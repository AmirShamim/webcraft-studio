'use client';

import Link from 'next/link';
import { useMemo, useState, useEffect } from 'react';
import { Calculator, MessageSquare, Send, Clock, Users, DollarSign } from 'lucide-react';
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
};

const marketConfigs: Record<string, MarketConfig> = {
  US: { code: 'USD', symbol: '$', locale: 'en-US', label: 'United States / Global (USD)', defaultBillableRate: 250 },
  UAE: { code: 'AED', symbol: 'AED', locale: 'en-AE', label: 'United Arab Emirates (AED)', defaultBillableRate: 900 },
  SEA: { code: 'SGD', symbol: 'S$', locale: 'en-SG', label: 'Singapore / SEA (SGD)', defaultBillableRate: 350 },
  IN: { code: 'INR', symbol: '₹', locale: 'en-IN', label: 'India (INR)', defaultBillableRate: 8000 },
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

function AnimatedNumber({ value, locale, currency }: { value: number; locale: string; currency: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;

    const duration = 600;
    const startTime = performance.now();
    let animationFrameId: number;

    const updateNumber = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const current = Math.round(start + (end - start) * easeProgress);

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateNumber);
      }
    };

    animationFrameId = requestAnimationFrame(updateNumber);
    return () => cancelAnimationFrame(animationFrameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(displayValue);

  return <span className="font-mono">{formatted}</span>;
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
    <section id="roi" className="relative bg-slate-950 py-20 md:py-28 overflow-hidden border-t border-slate-900">
      
      {/* Light glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Calculator className="h-3.5 w-3.5" />
            Billable Labor Loss Calculator
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How much billable revenue are you losing to manual document collection?
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Stop paying high-skilled lawyers, accountants, and consultants to manual-chase client paperwork. Adjust the sliders below to calculate your firm&apos;s recoverable capacity.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
          
          {/* Controls Panel */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-8 border border-slate-800 bg-slate-900/40">
            
            {/* Market / Currency Picker */}
            <div>
              <label htmlFor="market-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Select Market & Currency
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
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none transition-colors cursor-pointer"
              >
                {Object.entries(marketConfigs).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Input 1: Average Hourly Billable Rate */}
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <label htmlFor="hourly-rate-input" className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-emerald-400" />
                  Average Hourly Billable Rate ($150 - $500/hr)
                </label>
                <span className="text-lg font-bold text-emerald-400">
                  {activeMarket.symbol}{effectiveHourlyRate} <span className="text-xs text-slate-500 font-normal">/ hr</span>
                </span>
              </div>
              <input
                id="hourly-rate-slider"
                type="range"
                min={150}
                max={500}
                step={25}
                value={effectiveHourlyRate}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setHourlyBillableRate(val);
                  trackRoiEngagement('hourly_rate_changed', { hourly_rate: val });
                }}
                className="w-full cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-600 mt-2">
                <span>{activeMarket.symbol}150/hr</span>
                <span>{activeMarket.symbol}325/hr</span>
                <span>{activeMarket.symbol}500/hr</span>
              </div>
            </div>

            {/* Slider 2: Hours Spent Chasing Documents Weekly */}
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <label htmlFor="weekly-hours-slider" className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  Hours Spent Chasing Documents Weekly (5 to 20 hrs)
                </label>
                <span className="text-lg font-bold text-emerald-400">
                  {weeklyDocumentHours} <span className="text-xs text-slate-500 font-normal">hrs / staff</span>
                </span>
              </div>
              <input
                id="weekly-hours-slider"
                type="range"
                min={5}
                max={20}
                step={1}
                value={weeklyDocumentHours}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setWeeklyDocumentHours(val);
                  trackRoiEngagement('weekly_hours_changed', { weekly_hours: val });
                }}
                className="w-full cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-600 mt-2">
                <span>5 hours</span>
                <span>12 hours</span>
                <span>20 hours</span>
              </div>
            </div>

            {/* Slider 3: Number of Active Staff/Partners */}
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <label htmlFor="staff-count-slider" className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-400" />
                  Number of Active Staff / Partners (2 to 10)
                </label>
                <span className="text-lg font-bold text-emerald-400">
                  {activeStaffCount} <span className="text-xs text-slate-500 font-normal">professionals</span>
                </span>
              </div>
              <input
                id="staff-count-slider"
                type="range"
                min={2}
                max={10}
                step={1}
                value={activeStaffCount}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setActiveStaffCount(val);
                  trackRoiEngagement('staff_count_changed', { staff_count: val });
                }}
                className="w-full cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-600 mt-2">
                <span>2 partners</span>
                <span>6 partners</span>
                <span>10 partners</span>
              </div>
            </div>

            {/* Unbillable Hours Display inside Controls Panel */}
            <div className="rounded-2xl bg-rose-500/5 border border-rose-500/10 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-400">Unbillable Revenue Loss / Month</p>
                <p className="text-3xl font-extrabold text-rose-500 tracking-tight mt-1.5">
                  <AnimatedNumber
                    value={calculation.lostMonthlyRevenue}
                    locale={activeMarket.locale}
                    currency={activeMarket.code}
                  />
                </p>
              </div>
              <div className="text-xs text-slate-500 max-w-xs leading-normal">
                Estimated billable value wasted every month across {activeStaffCount} staff members chasing emails and missing files.
              </div>
            </div>

          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            
            {/* Main Recoverable Panel */}
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-950/20 p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-emerald-950/20">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-emerald-500/[0.03] blur-3xl" />
              
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Recoverable Billable Value
              </span>
              
              <h3 className="text-slate-300 text-sm mt-3 font-medium">Recoverable Billable Revenue / Month</h3>
              <p className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight mt-2">
                <AnimatedNumber
                  value={calculation.recoverableMonthlyRevenue}
                  locale={activeMarket.locale}
                  currency={activeMarket.code}
                />
              </p>
              
              <p className="text-xs text-slate-300 mt-5 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-emerald-500/20">
                By deploying Al Astoora&apos;s automated intake infrastructure, your firm reclaims unbillable administrative time. Our system securely collects, verifies, and routes client documents, allowing your highly skilled professionals to focus strictly on billable case work.
              </p>

              <div className="mt-6 pt-5 border-t border-emerald-500/10 flex items-center justify-between text-xs text-slate-400">
                <span>Reclaimed Billable Hours / Month:</span>
                <span className="font-bold text-white text-sm font-mono">
                  ~{Math.round(calculation.recoverableBillableHours)} hours / mo
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/contact"
                  onClick={() => handleEstimateHandoff('demo_handoff_clicked')}
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label="roi_demo_handoff"
                  data-analytics-location="roi_calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Deploy Intake System
                </Link>
                <a
                  href={roiWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleEstimateHandoff('whatsapp_handoff_clicked')}
                  data-analytics-event="whatsapp_clicked"
                  data-analytics-label="roi_estimate_whatsapp"
                  data-analytics-location="roi_calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-emerald-500/40 hover:bg-slate-900 hover:text-white"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  Send Calculation on WhatsApp
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-slate-800 bg-slate-900/30 text-xs text-slate-400 leading-relaxed space-y-2">
              <p className="font-semibold text-slate-200 uppercase tracking-wider text-[10px]">Why Automation Wins</p>
              <p>
                Professional service firms using Al Astoora replace up to 90% of manual follow-up touchpoints with automated WhatsApp document ingestion and automated webhook routing directly into internal case management tools.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

