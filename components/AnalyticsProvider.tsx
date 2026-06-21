'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnalytics, trackEvent, type FunnelEventName } from '@/lib/analytics';

function cleanText(value: string | null) {
  return value?.replace(/\s+/g, ' ').trim().slice(0, 120);
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
      });
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
