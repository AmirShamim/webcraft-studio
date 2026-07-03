'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics, trackEvent, type FunnelEventName } from '@/lib/analytics';

function cleanText(value: string | null) {
  return value?.replace(/\s+/g, ' ').trim().slice(0, 120);
}

function whatsappDebugProperties(target: HTMLElement) {
  if (target.dataset.analyticsEvent !== 'whatsapp_clicked') {
    return {};
  }

  return {
    qualification_status: 'unqualified',
    contact_detail_present: false,
    business_type_named: false,
    automation_need_stated: false,
    trigger_surface: 'whatsapp_handoff_click',
    source_page: target.dataset.analyticsLocation,
    source_path: window.location.pathname,
    handoff_destination: 'whatsapp',
    carried_roi_estimate_present: target.dataset.analyticsLocation === 'roi_calculator',
  };
}

function isDemoPathInitiation(target: HTMLElement) {
  const href = target instanceof HTMLAnchorElement ? target.href : target.getAttribute('href');
  if (!href) {
    return false;
  }

  const path = new URL(href, window.location.href).pathname;
  if (path !== '/contact') {
    return false;
  }

  const label = target.dataset.analyticsLabel?.toLowerCase() || '';
  const text = cleanText(target.textContent)?.toLowerCase() || '';
  return label.includes('demo') || text.includes('demo');
}

function trackDemoPathInitiation(target: HTMLElement) {
  if (!isDemoPathInitiation(target)) {
    return;
  }

  const href = target instanceof HTMLAnchorElement ? target.href : target.getAttribute('href');

  trackEvent('demo_path_initiated', {
    qualification_status: 'unqualified',
    contact_detail_present: false,
    business_type_named: false,
    automation_need_stated: false,
    trigger_surface: 'demo_path_initiation',
    source_page: target.dataset.analyticsLocation,
    source_path: window.location.pathname,
    handoff_destination: 'demo',
    carried_roi_estimate_present: target.dataset.analyticsLocation === 'roi_calculator',
    cta_label: target.dataset.analyticsLabel,
    href,
    text: cleanText(target.textContent),
  });
}

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    trackEvent('$pageview', {
      path: pathname,
      referrer: document.referrer || null,
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>('[data-analytics-event]')
        : null;
      if (!target) {
        return;
      }

      const eventName = target.dataset.analyticsEvent as FunnelEventName | undefined;
      if (!eventName) {
        return;
      }

      trackEvent(eventName, {
        label: target.dataset.analyticsLabel,
        location: target.dataset.analyticsLocation,
        href: target instanceof HTMLAnchorElement ? target.href : target.getAttribute('href'),
        text: cleanText(target.textContent),
        ...whatsappDebugProperties(target),
      });
      trackDemoPathInitiation(target);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
