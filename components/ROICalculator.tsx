'use client';

import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Calculator, ChevronRight, Check } from 'lucide-react';

type ConversionScenario = {
  id: string;
  title: string;
  rate: number;
  description: string;
};

const conversionScenarios: ConversionScenario[] = [
  {
    id: 'foundational',
    title: 'Foundational',
    rate: 15,
    description: 'Best for early-stage teams building consistent lead follow-ups.',
  },
  {
    id: 'growth',
    title: 'Growth',
    rate: 28,
    description: 'Balanced benchmark for local businesses with active demand.',
  },
  {
    id: 'scale-ready',
    title: 'Scale-ready',
    rate: 40,
    description: 'For strong offers, faster response workflows, and higher intent leads.',
  },
];

type MarketConfig = {
  code: string;
  symbol: string;
  locale: string;
  label: string;
  defaultCustomerValue: number;
};

const marketConfigs: Record<string, MarketConfig> = {
  UAE: { code: 'AED', symbol: 'AED', locale: 'en-AE', label: 'United Arab Emirates (AED)', defaultCustomerValue: 900 },
  SEA: { code: 'SGD', symbol: 'S$', locale: 'en-SG', label: 'Singapore / SEA (SGD)', defaultCustomerValue: 350 },
  IN: { code: 'INR', symbol: '₹', locale: 'en-IN', label: 'India (INR)', defaultCustomerValue: 8000 },
  US: { code: 'USD', symbol: '$', locale: 'en-US', label: 'United States / Global (USD)', defaultCustomerValue: 250 },
};

// Custom Hook or Component to animate numbers smoothly
function AnimatedNumber({ value, locale, currency }: { value: number; locale: string; currency: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;

    const duration = 600; // ms
    const startTime = performance.now();

    let animationFrameId: number;

    const updateNumber = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const current = Math.round(start + (end - start) * easeProgress);

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateNumber);
      }
    };

    animationFrameId = requestAnimationFrame(updateNumber);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value]);

  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(displayValue);

  return <span className="font-mono">{formatted}</span>;
}

export default function ROICalculator() {
  const [marketKey, setMarketKey] = useState<string>('UAE');
  const activeMarket = marketConfigs[marketKey];

  const [dailyMissedInquiries, setDailyMissedInquiries] = useState(12);
  const [activeScenarioId, setActiveScenarioId] = useState('growth');
  const [averageCustomerValue, setAverageCustomerValue] = useState<number | null>(null);

  const effectiveAverageCustomerValue = averageCustomerValue ?? activeMarket.defaultCustomerValue;

  // Reset custom customer value when market changes to match default currency scale
  useEffect(() => {
    setAverageCustomerValue(null);
  }, [marketKey]);

  const activeScenario = useMemo(
    () =>
      conversionScenarios.find((scenario) => scenario.id === activeScenarioId) ??
      conversionScenarios[1],
    [activeScenarioId],
  );
  const conversionRate = activeScenario.rate;

  const revenueModel = useMemo(() => {
    const safeDailyInquiries = Number.isFinite(dailyMissedInquiries)
      ? Math.max(1, dailyMissedInquiries)
      : 1;
    const safeAverageValue = Number.isFinite(effectiveAverageCustomerValue)
      ? Math.max(0, effectiveAverageCustomerValue)
      : 0;
    const safeConversionRate = Number.isFinite(conversionRate)
      ? Math.min(100, Math.max(1, conversionRate))
      : 1;

    const monthlyMissedInquiries = safeDailyInquiries * 30;
    const monthlyConvertedCustomers = monthlyMissedInquiries * (safeConversionRate / 100);
    const lostRevenue = monthlyConvertedCustomers * safeAverageValue;
    const automationRecoveryRate = 0.65;
    const recoverableRevenue = lostRevenue * automationRecoveryRate;

    return {
      monthlyConvertedCustomers,
      lostRevenue,
      automationRecoveryRate,
      recoverableRevenue,
    };
  }, [conversionRate, dailyMissedInquiries, effectiveAverageCustomerValue]);

  // Autocycle scenarios
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveScenarioId((prevId) => {
        const currentIndex = conversionScenarios.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % conversionScenarios.length;
        return conversionScenarios[nextIndex].id;
      });
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeScenarioId]);

  return (
    <section id="roi" className="relative bg-slate-950 py-20 md:py-28 overflow-hidden border-t border-slate-900">
      
      {/* Light glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Calculator className="h-3.5 w-3.5" />
            ROI Calculator
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How much revenue are you losing to missed WhatsApp inquiries?
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Local service businesses lose up to 60% of incoming leads because of delayed responses. Adjust the sliders below to calculate your market potential.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
          
          {/* Controls Panel */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-8 border border-slate-800 bg-slate-900/40">
            
            {/* Market / Currency Picker */}
            <div>
              <label htmlFor="market-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Select Your Market & Currency
              </label>
              <select
                id="market-select"
                value={marketKey}
                onChange={(e) => setMarketKey(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:border-emerald-500 focus:outline-none transition-colors cursor-pointer"
              >
                {Object.entries(marketConfigs).map(([key, config]) => (
                  <option key={key} value={key}>
                    {config.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Range Slider 1: Missed Inquiries */}
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <label htmlFor="missed-inquiries" className="text-sm font-semibold text-slate-300">
                  Daily Missed Inquiries
                </label>
                <span className="text-lg font-bold text-emerald-400">
                  {dailyMissedInquiries} <span className="text-xs text-slate-500 font-normal">/ day</span>
                </span>
              </div>
              <input
                id="missed-inquiries"
                type="range"
                min={1}
                max={50}
                value={dailyMissedInquiries}
                onChange={(e) => setDailyMissedInquiries(Number(e.target.value))}
                className="w-full cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-600 mt-2">
                <span>1 inquiry</span>
                <span>25 inquiries</span>
                <span>50 inquiries</span>
              </div>
            </div>

            {/* Input 2: Average Customer Value */}
            <div>
              <label htmlFor="customer-value" className="block text-sm font-semibold text-slate-300 mb-3">
                Average Customer Value (LTV)
              </label>
              <div className="relative flex items-center rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 focus-within:border-emerald-500 transition-colors">
                <span className="mr-2 text-sm font-bold text-slate-500">{activeMarket.symbol}</span>
                <input
                  id="customer-value"
                  type="number"
                  min={0}
                  value={effectiveAverageCustomerValue}
                  onChange={(e) => {
                    const nextVal = Number(e.target.value);
                    setAverageCustomerValue(Number.isFinite(nextVal) ? Math.max(0, nextVal) : 0);
                  }}
                  className="w-full bg-transparent text-base font-bold text-slate-100 outline-none"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                The average initial booking fee + repeat visit revenue for a typical client in your vertical.
              </p>
            </div>

            {/* Outputs display inside Controls Panel (Lost Revenue Block) */}
            <div className="rounded-2xl bg-rose-500/5 border border-rose-500/10 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-400">Lost Monthly Revenue Opportunity</p>
                <p className="text-3xl font-extrabold text-rose-500 tracking-tight mt-1.5">
                  <AnimatedNumber
                    value={revenueModel.lostRevenue}
                    locale={activeMarket.locale}
                    currency={activeMarket.code}
                  />
                </p>
              </div>
              <div className="text-xs text-slate-500 max-w-xs leading-normal">
                This is revenue completely lost to competitors due to slow response times or unanswered WhatsApp chats.
              </div>
            </div>

          </div>

          {/* Results & Conversion Benchmark Scenarios Panel */}
          <div className="space-y-6">
            
            {/* Main Recoverable Panel */}
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-950/20 p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-emerald-950/20">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-emerald-500/[0.03] blur-3xl" />
              
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Recoverable with Al Astoora
              </span>
              
              <h3 className="text-slate-300 text-sm mt-3 font-medium">Estimated Recoverable Revenue / Month</h3>
              <p className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight mt-2">
                <AnimatedNumber
                  value={revenueModel.recoverableRevenue}
                  locale={activeMarket.locale}
                  currency={activeMarket.code}
                />
              </p>
              
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                By setting up official automated response frameworks, we recover approximately <span className="text-emerald-400 font-bold">65%</span> of lost client inquiries. Our system pays for itself within the first few client bookings.
              </p>

              <div className="mt-6 pt-5 border-t border-emerald-500/10 flex items-center justify-between text-xs text-slate-400">
                <span>Estimated recovered clients/mo:</span>
                <span className="font-bold text-white text-sm">
                  ~{Math.round(revenueModel.monthlyConvertedCustomers * revenueModel.automationRecoveryRate)}
                </span>
              </div>
            </div>

            {/* Scenario Buttons Column */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">
                Conversion Benchmarks
              </p>
              {conversionScenarios.map((scenario) => {
                const isActive = scenario.id === activeScenario.id;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveScenarioId(scenario.id)}
                    className={`w-full relative overflow-hidden text-left p-4.5 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? 'border-emerald-500/40 bg-slate-900/60 shadow-lg shadow-emerald-500/[0.02]'
                        : 'border-slate-900 bg-slate-950 hover:border-slate-800 hover:bg-slate-900/40'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 h-[2px] bg-emerald-500"
                        style={{ width: '100%' }}
                        transition={{ duration: 6, ease: 'linear' }}
                      />
                    )}
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold ${isActive ? 'text-emerald-400' : 'text-slate-300'}`}>
                        {scenario.title}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-900 text-slate-500'}`}>
                        {scenario.rate}% conversion
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {scenario.description}
                      </p>
                    )}
                  </button>
                );
              })}
              <p className="text-[10px] text-slate-600 text-center mt-2">
                Click any scenario to lock it. Automatically transitions every 6 seconds.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
