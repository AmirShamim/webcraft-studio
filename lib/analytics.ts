import posthog from 'posthog-js';

const managedPosthogKey = 'phc_qhKRcN76aujA4GJ43QhqdToyd3zMF7NRqxWCHhnJD9cq';
const managedPosthogHost = 'https://us.i.posthog.com';
const managedPosthogUiHost = 'https://us.posthog.com';

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || managedPosthogKey;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || managedPosthogHost;
const posthogUiHost = process.env.NEXT_PUBLIC_POSTHOG_UI_HOST || managedPosthogUiHost;

export type FunnelEventName =
  | '$pageview'
  | 'primary_cta_clicked'
  | 'whatsapp_clicked'
  | 'qualified_handoff_submitted'
  | 'contact_form_handoff_submitted'
  | 'insight_cta_clicked'
  | 'roi_calculator_engaged'
  | 'homepage_gym_vertical_clicked'
  | 'homepage_dental_vertical_clicked';

type EventProperties = Record<string, string | number | boolean | null | undefined>;

type QualifiedHandoffProperties = EventProperties & {
  contact_detail_present: boolean;
  business_type_named: boolean;
  automation_need_stated: boolean;
  trigger_surface: 'whatsapp_handoff_click' | 'demo_path_initiation';
  handoff_destination: 'whatsapp' | 'demo';
};

let analyticsReady = false;

export function initAnalytics() {
  if (analyticsReady || typeof window === 'undefined' || !posthogKey) {
    return analyticsReady;
  }

  posthog.init(posthogKey, {
    api_host: posthogHost,
    ui_host: posthogUiHost,
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: false,
    person_profiles: 'identified_only',
  });

  analyticsReady = true;
  return analyticsReady;
}

export function trackEvent(eventName: FunnelEventName, properties: EventProperties = {}) {
  if (!initAnalytics()) {
    return;
  }

  posthog.capture(eventName, {
    site: 'alastoora',
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    page_url: typeof window !== 'undefined' ? window.location.href : undefined,
    ...properties,
  });
}

export function trackQualifiedHandoff(properties: QualifiedHandoffProperties) {
  const isQualified =
    properties.contact_detail_present &&
    properties.business_type_named &&
    properties.automation_need_stated;

  if (!isQualified) {
    return false;
  }

  trackEvent('qualified_handoff_submitted', {
    qualification_status: 'qualified',
    source_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    ...properties,
  });

  return true;
}
