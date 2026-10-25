'use client';

import Link from 'next/link';
import { useMemo, useState, useEffect } from 'react';
import { MessageSquare, ArrowRight, Clock, Users, Banknote } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import {
  ROI_ESTIMATE_STORAGE_KEY,
  formatRoiEstimateForMessage,
  serializeRoiEstimate,
  type RoiEstimate,
} from '@/lib/roi-handoff';

type MarketConfig = {
  code: string;
  symbol: string;
  locale: string;
  label: string;
  defaultBillableRate: number;
  minBillableRate: number;
  maxBillableRate: number;
  rateStep: number;
};

const marketConfigs: Record<string, MarketConfig> = {
  US: { code: 'USD', symbol: '$', locale: 'en-US', label: 'United States / Global (USD)', defaultBillableRate: 250, minBillableRate: 150, maxBillableRate: 500, rateStep: 25 },
  UAE: { code: 'AED', symbol: 'AED', locale: 'en-AE', label: 'United Arab Emirates (AED)', defaultBillableRate: 900, minBillableRate: 500, maxBillableRate: 2000, rateStep: 50 },
  SEA: { code: 'SGD', symbol: 'S$', locale: 'en-SG', label: 'Singapore / SEA (SGD)', defaultBillableRate: 350, minBillableRate: 200, maxBillableRate: 700, rateStep: 25 },
  IN: { code: 'INR', symbol: '₹', locale: 'en-IN', label: 'India (INR)', defaultBillableRate: 8000, minBillableRate: 2000, maxBillableRate: 20000, rateStep: 500 },
};

function saveRoiEstimate(estimate: RoiEstimate) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(ROI_ESTIMATE_STORAGE_KEY, serializeRoiEstimate(estimate));
  } catch {
    // Ignore storage failures so direct WhatsApp handoff works.
  }
}

function CurrencyValue({ value, locale, currency }: { value: number; locale: string; currency: string }) {
  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);

  return <span className="tabular-nums">{formatted}</span>;
}

export default function ROICalculator() {
  const [marketKey, setMarketKey] = useState<string>('US');
  const activeMarket = marketConfigs[marketKey];

  const [hourlyBillableRate, setHourlyBillableRate] = useState<number | null>(null);
  const [weeklyDocumentHours, setWeeklyDocumentHours] = useState(10);
  const [activeStaffCount, setActiveStaffCount] = useState(4);
  const [hasInteracted, setHasInteracted] = useState(false);

  const effectiveHourlyRate = hourlyBillableRate ?? activeMarket.defaultBillableRate;

  const calculation = useMemo(() => {
    const safeRate = Math.max(50, effectiveHourlyRate);
    const safeHours = Math.max(1, weeklyDocumentHours);
    const safeStaff = Math.max(1, activeStaffCount);

    const weeklyLostHours = safeHours * safeStaff;
    const monthlyLostHours = weeklyLostHours * 4.33;
    const lostMonthlyRevenue = monthlyLostHours * safeRate;

    const recoveryEfficiency = 0.85; // 85% intake time saved with automated routing
    const recoverableBillableHours = monthlyLostHours * recoveryEfficiency;
    const recoverableMonthlyRevenue = lostMonthlyRevenue * recoveryEfficiency;

    return {
      monthlyLostHours,
      lostMonthlyRevenue,
      recoverableBillableHours,
      recoverableMonthlyRevenue,
    };
  }, [effectiveHourlyRate, weeklyDocumentHours, activeStaffCount]);

  const roiEstimate = useMemo<RoiEstimate>(() => ({
    market: marketKey,
    marketLabel: activeMarket.label,
    locale: activeMarket.locale,
    currency: activeMarket.code,
    hourlyBillableRate: effectiveHourlyRate,
    weeklyDocumentHours,
    activeStaffCount,
    monthlyLostHours: calculation.monthlyLostHours,
    lostMonthlyRevenue: calculation.lostMonthlyRevenue,
    recoverableMonthlyRevenue: calculation.recoverableMonthlyRevenue,
    recoverableBillableHours: calculation.recoverableBillableHours,
    updatedAt: new Date().toISOString(),
  }), [
    activeMarket.code,
    activeMarket.label,
    activeMarket.locale,
    activeStaffCount,
    calculation.lostMonthlyRevenue,
    calculation.monthlyLostHours,
    calculation.recoverableBillableHours,
    calculation.recoverableMonthlyRevenue,
    effectiveHourlyRate,
    marketKey,
    weeklyDocumentHours,
  ]);

  const roiEstimateLines = useMemo(
    () => formatRoiEstimateForMessage(roiEstimate),
    [roiEstimate],
  );

  const roiWhatsAppUrl = useMemo(() => {
    const text = [
      'Hi Al Astoora, I calculated our firm billable hour loss and want to deploy intake infrastructure.',
      '',
      ...roiEstimateLines,
    ].join('\n');

    return `https://wa.me/919289581053?text=${encodeURIComponent(text)}`;
  }, [roiEstimateLines]);

  function trackRoiEngagement(action: string, properties: Record<string, string | number> = {}) {
    setHasInteracted(true);
    trackEvent('roi_calculator_engaged', {
      action,
      market: marketKey,
      hourly_rate: effectiveHourlyRate,
      weekly_hours: weeklyDocumentHours,
      staff_count: activeStaffCount,
      ...properties,
    });
  }

  function handleEstimateHandoff(action: string) {
    saveRoiEstimate(roiEstimate);
    trackRoiEngagement(action, {
      lost_monthly_revenue: Math.round(roiEstimate.lostMonthlyRevenue),
      recoverable_monthly_revenue: Math.round(roiEstimate.recoverableMonthlyRevenue),
      recoverable_hours: Math.round(roiEstimate.recoverableBillableHours),
    });
  }

  useEffect(() => {
    if (!hasInteracted) {
      return;
    }
    saveRoiEstimate(roiEstimate);
  }, [hasInteracted, roiEstimate]);

  return (
    <section id="roi" className="border-t border-[var(--line)] bg-[var(--paper)] py-20 text-[var(--ink)] md:py-28">
      <div className="site-container">
        <div className="reveal mb-12 grid gap-6 md:grid-cols-2 md:gap-16">
          <div>
            <span className="section-label">01 / The business case</span>
            <h2 className="section-title mt-5">Your time has value.<br /><span className="italic text-[var(--accent)]">See how much.</span></h2>
          </div>
          <p className="max-w-lg self-end text-base leading-relaxed text-[var(--muted)]">
            Client paperwork takes time. Estimate the billable capacity tied up in document collection, and what a more connected workflow could return to your team.
          </p>
        </div>
        <div className="grid overflow-hidden border border-[var(--line)] lg:grid-cols-[1.1fr_1fr]">
          <div className="min-w-0 space-y-8 bg-white p-5 sm:p-8 lg:p-10">
            <div>
              <label htmlFor="market-select" className="mb-3 block text-sm font-semibold">
                Market & currency
              </label>
              <select
                id="market-select"
                value={marketKey}
                onChange={(e) => {
                  const nextMarket = e.target.value;
                  setMarketKey(nextMarket);
                  setHourlyBillableRate(null);
                  trackRoiEngagement('market_changed', { market: nextMarket });
                }}
                className="field w-full min-w-0 cursor-pointer"
              >
                {Object.entries(marketConfigs).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <label htmlFor="hourly-rate-slider" className="flex items-center gap-2 text-sm font-semibold">
                  <Banknote aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                  Hourly billable rate
                </label>
                <output htmlFor="hourly-rate-slider" className="text-base font-semibold tabular-nums">
                  <CurrencyValue value={effectiveHourlyRate} locale={activeMarket.locale} currency={activeMarket.code} />
                  <span className="ml-1 text-xs font-normal text-[var(--muted)]">/ hr</span>
                </output>
              </div>
              <input
                id="hourly-rate-slider"
                type="range"
                min={activeMarket.minBillableRate}
                max={activeMarket.maxBillableRate}
                step={activeMarket.rateStep}
                value={effectiveHourlyRate}
                aria-valuetext={`${effectiveHourlyRate} ${activeMarket.code} per hour`}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setHourlyBillableRate(val);
                  trackRoiEngagement('hourly_rate_changed', { hourly_rate: val });
                }}
                className="h-6 w-full cursor-pointer accent-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              />
              <div className="mt-1 flex justify-between gap-3 text-xs text-[var(--muted)]">
                <span>{activeMarket.symbol} {activeMarket.minBillableRate.toLocaleString(activeMarket.locale)}</span>
                <span>{activeMarket.symbol} {activeMarket.maxBillableRate.toLocaleString(activeMarket.locale)}</span>
              </div>
            </div>

            <div>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <label htmlFor="weekly-hours-slider" className="flex items-center gap-2 text-sm font-semibold">
                  <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                  Weekly collection time per person
                </label>
                <output htmlFor="weekly-hours-slider" className="text-base font-semibold tabular-nums">
                  {weeklyDocumentHours} <span className="text-xs font-normal text-[var(--muted)]">hours</span>
                </output>
              </div>
              <input
                id="weekly-hours-slider"
                type="range"
                min={5}
                max={20}
                step={1}
                value={weeklyDocumentHours}
                aria-valuetext={`${weeklyDocumentHours} hours per person per week`}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setWeeklyDocumentHours(val);
                  trackRoiEngagement('weekly_hours_changed', { weekly_hours: val });
                }}
                className="h-6 w-full cursor-pointer accent-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              />
              <div className="mt-1 flex justify-between text-xs text-[var(--muted)]">
                <span>5 hours</span>
                <span>20 hours</span>
              </div>
            </div>

            <div>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <label htmlFor="staff-count-slider" className="flex items-center gap-2 text-sm font-semibold">
                  <Users aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                  Staff involved in collection
                </label>
                <output htmlFor="staff-count-slider" className="text-base font-semibold tabular-nums">
                  {activeStaffCount} <span className="text-xs font-normal text-[var(--muted)]">people</span>
                </output>
              </div>
              <input
                id="staff-count-slider"
                type="range"
                min={2}
                max={10}
                step={1}
                value={activeStaffCount}
                aria-valuetext={`${activeStaffCount} people`}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setActiveStaffCount(val);
                  trackRoiEngagement('staff_count_changed', { staff_count: val });
                }}
                className="h-6 w-full cursor-pointer accent-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              />
              <div className="mt-1 flex justify-between text-xs text-[var(--muted)]">
                <span>2 people</span>
                <span>10 people</span>
              </div>
            </div>

          </div>
          <div className="dark-section min-w-0 border-t border-[var(--line)] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div aria-live="polite" aria-atomic="true">
              <span className="section-label mb-8">Your potential return</span>
              <h3 className="text-sm font-medium text-[#d4d9cd]">Potential billable value recovered / month</h3>
              <p className="display-serif mt-4 break-words text-[32px] leading-tight text-[var(--highlight)] sm:text-[40px]">
                <CurrencyValue value={calculation.recoverableMonthlyRevenue} locale={activeMarket.locale} currency={activeMarket.code} />
              </p>
              <dl className="mt-8 divide-y divide-white/15 border-y border-white/15 text-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <dt className="text-[#c3cbbd]">Potential time recovered</dt>
                  <dd className="font-semibold tabular-nums">~{Math.round(calculation.recoverableBillableHours)} hrs / month</dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <dt className="text-[#c3cbbd]">Current monthly time value</dt>
                  <dd className="font-semibold"><CurrencyValue value={calculation.lostMonthlyRevenue} locale={activeMarket.locale} currency={activeMarket.code} /></dd>
                </div>
              </dl>
            </div>
            <p className="mt-6 text-xs leading-6 text-[#c3cbbd]">
              An illustrative estimate using 4.33 weeks per month and an assumed 85% reduction in collection time. Recovered capacity is not guaranteed revenue; results depend on your workflow and billable demand. Implementation and platform costs are not included.
            </p>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => handleEstimateHandoff('demo_handoff_clicked')}
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label="roi_demo_handoff"
                  data-analytics-location="roi_calculator"
                  className="button-primary w-full gap-2 text-center"
                >
                  Discuss your estimate
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <a
                  href={roiWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleEstimateHandoff('whatsapp_handoff_clicked')}
                  data-analytics-event="whatsapp_clicked"
                  data-analytics-label="roi_estimate_whatsapp"
                  data-analytics-location="roi_calculator"
                  className="button-secondary w-full gap-2 text-center"
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4 shrink-0" />
                  Share on WhatsApp
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

