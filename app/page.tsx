'use client';

import { useMemo, useState, useSyncExternalStore, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  FileText,
  Globe,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Zap,
} from 'lucide-react';

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

const services = [
  {
    icon: MessageSquare,
    title: 'WhatsApp & IG Automation',
    description:
      'Instant replies, PDF menus, lead capture, and appointment routing inside one reliable flow.',
  },
  {
    icon: MapPin,
    title: 'Google Business SEO & Verification',
    description:
      'Get discovered in near me searches, win trust, and verify profiles even for service-area brands.',
  },
  {
    icon: Zap,
    title: 'Multi-tenant CRM',
    description:
      'Manage leads, follow-ups, and customer records in one dashboard without expensive SaaS lock-in.',
  },
];

type PortfolioSite = {
  id: string;
  tabLabel: string;
  websiteName: string;
  category: string;
  summary: string;
  highlights: string[];
};

type ConversionScenario = {
  id: string;
  title: string;
  rate: number;
  description: string;
};

type Market = 'IN' | 'US';

const portfolioSites: PortfolioSite[] = [
  {
    id: 'gyms',
    tabLabel: 'Gyms',
    websiteName: 'Gym & Fitness Growth Site',
    category: 'Gyms and Fitness Studios',
    summary:
      'Conversion-focused website for membership signups with WhatsApp inquiry routing and trial booking.',
    highlights: [
      'Mobile-first membership landing and plan comparison modules',
      'Instant WhatsApp CTA with lead source tracking',
      'Class schedule and trainer trust section built for fast decisions',
    ],
  },
  {
    id: 'restaurants',
    tabLabel: 'Restaurants',
    websiteName: 'Restaurant Booking Site',
    category: 'Restaurants and Cafes',
    summary:
      'Menu-first website template designed for fast table booking and high-intent WhatsApp ordering.',
    highlights: [
      'PDF and interactive menu access in one tap',
      'Reservation CTA and map integration above the fold',
      'Festival offer banners optimized for repeat traffic',
    ],
  },
  {
    id: 'jewelers',
    tabLabel: 'Jewelers',
    websiteName: 'Jewelry Showroom Site',
    category: 'Jewelers and Luxury Retail',
    summary:
      'Premium catalog experience built for trust, appointment requests, and high-value lead capture.',
    highlights: [
      'Category-wise collections with inquiry buttons per product block',
      'Gold rate and hallmark trust messaging modules',
      'Wedding and custom-order consultation lead funnel',
    ],
  },
  {
    id: 'dental',
    tabLabel: 'Dental',
    websiteName: 'Dental Clinic Appointment Site',
    category: 'Dental and Healthcare Clinics',
    summary:
      'Clinic website focused on treatment discovery, social proof, and low-friction appointment booking.',
    highlights: [
      'Procedure pages optimized for local SEO intent',
      'Doctor profile and before-after trust builders',
      'Single-tap consultation booking via WhatsApp and call',
    ],
  },
  {
    id: 'beauty',
    tabLabel: 'Beauty',
    websiteName: 'Beauty Salon Booking Site',
    category: 'Beauty and Wellness',
    summary:
      'Service showcase website to drive package bookings, repeat visits, and campaign-based offers.',
    highlights: [
      'Service cards with starting price and quick booking actions',
      'Offer section for seasonal campaigns and bundles',
      'Instagram and testimonial embeds for social credibility',
    ],
  },
  {
    id: 'home-services',
    tabLabel: 'Home Services',
    websiteName: 'Home Services Lead Site',
    category: 'Cleaning, Repair, and Field Services',
    summary:
      'High-intent lead website designed for urgent service requests with area-wise targeting.',
    highlights: [
      'Service area coverage and response-time promises',
      'Quote request workflow with job-type qualifiers',
      'Trust markers including ratings, guarantees, and certifications',
    ],
  },
  {
    id: 'training',
    tabLabel: 'Training',
    websiteName: 'Training Academy Enrollment Site',
    category: 'Training Academies and Institutes',
    summary:
      'Program enrollment website for lead qualification, counseling calls, and batch seat conversion.',
    highlights: [
      'Course pages with outcomes, fees, and placement proof',
      'Counseling call and brochure request paths',
      'Batch countdown blocks to increase urgency and enrollments',
    ],
  },
];

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
    description: 'Balanced benchmark for most local businesses with active demand.',
  },
  {
    id: 'scale-ready',
    title: 'Scale-ready',
    rate: 40,
    description: 'For strong offers, faster response workflows, and higher intent leads.',
  },
];

function detectMarket(): Market {
  if (typeof window === 'undefined') {
    return 'IN';
  }

  const params = new URLSearchParams(window.location.search);
  const forcedMarket = params.get('market')?.toLowerCase();

  if (forcedMarket === 'us') {
    return 'US';
  }

  if (forcedMarket === 'in') {
    return 'IN';
  }

  const locales =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  const localeRegions = locales
    .map((locale) => locale.split('-').at(-1)?.toUpperCase())
    .filter((region): region is string => Boolean(region));

  if (localeRegions.includes('US')) {
    return 'US';
  }

  if (localeRegions.includes('IN')) {
    return 'IN';
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (timeZone === 'Asia/Kolkata') {
    return 'IN';
  }

  return 'IN';
}

function subscribeToMarket(onStoreChange: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  window.addEventListener('languagechange', onStoreChange);
  window.addEventListener('popstate', onStoreChange);

  return () => {
    window.removeEventListener('languagechange', onStoreChange);
    window.removeEventListener('popstate', onStoreChange);
  };
}

function getClientMarketSnapshot(): Market {
  return detectMarket();
}

function getServerMarketSnapshot(): Market {
  return 'IN';
}

function formatCurrency(value: number, locale: string, currency: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HomePage() {
  const market = useSyncExternalStore(
    subscribeToMarket,
    getClientMarketSnapshot,
    getServerMarketSnapshot,
  );
  const isUSMarket = market === 'US';
  const defaultCustomerValue = isUSMarket ? 40 : 1800;
  const [dailyMissedInquiries, setDailyMissedInquiries] = useState(12);
  const [activeScenarioId, setActiveScenarioId] = useState('growth');
  const [averageCustomerValue, setAverageCustomerValue] = useState<number | null>(null);
  const [activePortfolioId, setActivePortfolioId] = useState(portfolioSites[0].id);

  const currencyCode = market === 'US' ? 'USD' : 'INR';
  const currencyLocale = market === 'US' ? 'en-US' : 'en-IN';
  const customerValueLabel = market === 'US' ? 'Average customer value in USD' : 'Average customer value in INR';
  const effectiveAverageCustomerValue = averageCustomerValue ?? defaultCustomerValue;

  const activePortfolio = useMemo(
    () => portfolioSites.find((site) => site.id === activePortfolioId) ?? portfolioSites[0],
    [activePortfolioId],
  );

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
      safeConversionRate,
      monthlyConvertedCustomers,
      lostRevenue,
      automationRecoveryRate,
      recoverableRevenue,
    };
  }, [conversionRate, dailyMissedInquiries, effectiveAverageCustomerValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveScenarioId((prevId) => {
        const currentIndex = conversionScenarios.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % conversionScenarios.length;
        return conversionScenarios[nextIndex].id;
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeScenarioId]);

  const formattedLostMonthlyRevenue = formatCurrency(
    revenueModel.lostRevenue,
    currencyLocale,
    currencyCode,
  );
  const formattedRecoverableMonthlyRevenue = formatCurrency(
    revenueModel.recoverableRevenue,
    currencyLocale,
    currencyCode,
  );

  const annualSaaSCost = isUSMarket ? 360 : 30000;
  const formattedAnnualSaaSCost = formatCurrency(
    annualSaaSCost,
    currencyLocale,
    currencyCode,
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 text-[var(--accent)] sm:h-9 sm:w-9">
              <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            <p className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-slate-900 sm:text-base">
              Al Astoora
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 min-[520px]:inline-flex sm:px-4 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5" />
              Contact Us
            </a>
            <a
              href="#contact"
              aria-label="Call Al Astoora"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 min-[520px]:hidden"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[var(--accent)] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-strong)] sm:px-5 sm:text-sm"
            >
              Book Demo
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(47,123,255,0.22),transparent_45%),radial-gradient(circle_at_100%_30%,rgba(47,123,255,0.12),transparent_40%)]" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Al Astoora Automation Agency
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                We turn your WhatsApp into a 24/7 automated front desk.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Stop losing customers to missed messages. We build omnichannel bots for local
                businesses that book tables, sell memberships, and answer FAQs instantly.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
                >
                  See a Live Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#roi"
                  className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-400 hover:bg-slate-900"
                >
                  Calculate ROI
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-900"
                >
                  Website Portfolio
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...revealTransition, delay: 0.15 }}
              className="rounded-3xl border border-slate-700 bg-slate-900/85 p-5 shadow-[0_32px_120px_-55px_rgba(47,123,255,0.5)]"
            >
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <p className="text-sm font-medium text-slate-200">WhatsApp Assistant Preview</p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                  Live
                </span>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.9 }}
                  transition={{ duration: 0.45 }}
                  className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-slate-100 px-4 py-3 text-slate-900"
                >
                  Are you open?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.9 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="max-w-[88%] rounded-2xl rounded-bl-md bg-[var(--accent)]/18 px-4 py-3 text-slate-50"
                >
                  Yes. We are open until 10:00 PM today. Sharing menu and instant booking link.

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 rounded-xl bg-slate-950/35 px-3 py-2 text-xs">
                      <FileText className="h-3.5 w-3.5 text-blue-300" />
                      PDF menu shared
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-slate-950/35 px-3 py-2 text-xs">
                      <CalendarCheck2 className="h-3.5 w-3.5 text-blue-300" />
                      Booking link sent
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-700 pt-3 text-xs text-slate-400">
                <span>Average response time: 1.8 seconds</span>
                <motion.span
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="inline-flex items-center gap-1"
                >
                  <Send className="h-3 w-3" />
                  Bot active
                </motion.span>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="roi"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={revealTransition}
          className="bg-white py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_70px_-50px_rgba(15,23,42,0.45)] sm:p-8 md:p-10">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Interactive ROI Calculator
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  How much revenue are you missing?
                </h2>
              </div>

              <div className="mt-8 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-7">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <label htmlFor="missed-inquiries" className="text-sm font-medium text-slate-700">
                          Average daily missed WhatsApp inquiries
                        </label>
                        <span className="text-sm font-semibold text-[var(--accent)]">
                          {dailyMissedInquiries}
                        </span>
                      </div>
                      <input
                        id="missed-inquiries"
                        aria-label="Average daily missed WhatsApp inquiries"
                        type="range"
                        min={1}
                        max={50}
                        value={dailyMissedInquiries}
                        onChange={(event) => setDailyMissedInquiries(Number(event.target.value))}
                        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-[var(--accent)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="customer-value"
                        className="mb-3 block text-sm font-medium text-slate-700"
                      >
                        {customerValueLabel}
                      </label>
                      <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-4 py-3 focus-within:border-[var(--accent)]">
                        <span className="mr-2 text-sm font-semibold text-slate-500">{currencyCode}</span>
                        <input
                          id="customer-value"
                          type="number"
                          min={0}
                          value={effectiveAverageCustomerValue}
                          onChange={(event) => {
                            const nextValue = Number(event.target.value);
                            setAverageCustomerValue(
                              Number.isFinite(nextValue) ? Math.max(0, nextValue) : 0,
                            );
                          }}
                          className="w-full bg-transparent text-base font-semibold text-slate-900 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-950 p-6 text-slate-100 sm:p-7">
                    <p className="text-sm font-medium text-slate-300">
                      Lost Monthly Revenue ({currencyCode}):{' '}
                      <span className="font-semibold">{formattedLostMonthlyRevenue}</span>
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {formattedLostMonthlyRevenue}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      Projected Recoverable Revenue With Automation ({currencyCode}):{' '}
                      <span className="font-semibold text-slate-100">
                        {formattedRecoverableMonthlyRevenue}
                      </span>
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      Our automation costs a fraction of this. Stop leaving money on the table.
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                      Market detected: {isUSMarket ? 'United States (USD)' : 'India (INR)'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {conversionScenarios.map((scenario) => {
                    const isActive = scenario.id === activeScenario.id;

                    return (
                      <button
                        key={scenario.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveScenarioId(scenario.id)}
                        className={`group relative w-full overflow-hidden rounded-3xl border text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? 'border-[var(--accent)] bg-white p-6 shadow-[0_12px_40px_-15px_rgba(47,123,255,0.15)] sm:p-7'
                            : 'border-slate-200 bg-slate-50 p-5 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            key={scenario.id}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 3, ease: 'linear' }}
                            className="absolute bottom-0 left-0 h-1 bg-[var(--accent)] opacity-20"
                          />
                        )}

                        <div className="flex items-center justify-between gap-4">
                          <h3
                            className={`text-lg font-semibold transition-colors sm:text-xl ${
                              isActive ? 'text-[var(--accent)]' : 'text-slate-700 group-hover:text-slate-900'
                            }`}
                          >
                            {scenario.title}
                          </h3>
                          <span
                            className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-bold transition-colors ${
                              isActive
                                ? 'bg-[var(--accent)] text-white'
                                : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300 group-hover:text-slate-900'
                            }`}
                          >
                            {scenario.rate}% Rate
                          </span>
                        </div>

                        <motion.div
                          initial={false}
                          animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {scenario.description}
                          </p>

                          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                            <p className="text-sm leading-relaxed text-slate-700">
                              Estimated missed conversions/month:{' '}
                              <span className="font-semibold text-slate-900">
                                {Math.max(1, Math.round(revenueModel.monthlyConvertedCustomers))}
                              </span>
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-700">
                              Automation can recover approximately{' '}
                              <span className="font-semibold text-[var(--accent)]">
                                {Math.round(revenueModel.automationRecoveryRate * 100)}%
                              </span>{' '}
                              of this lost revenue opportunity.
                            </p>
                          </div>
                        </motion.div>
                      </button>
                    );
                  })}
                  <p className="mt-2 text-center text-xs leading-relaxed text-slate-400">
                    Auto-cycles every 3s. Select an option to pause. Benchmark scenarios are provided to keep projections practical.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="bg-slate-950 py-20 text-slate-100">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={revealTransition}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Automation infrastructure built for local business growth.
              </h2>
            </motion.div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ ...revealTransition, delay: index * 0.08 }}
                  className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent)]/10">
                    <service.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          id="portfolio"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={revealTransition}
          className="bg-white py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.35)] sm:p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Website Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Seven category-specific websites, presented as a dedicated portfolio tab.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
                This section lets prospects browse your existing website builds by business type so they
                instantly see that Al Astoora also delivers complete websites, not only automation.
              </p>

              <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
                {portfolioSites.map((site) => {
                  const isActive = site.id === activePortfolio.id;

                  return (
                    <button
                      key={site.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActivePortfolioId(site.id)}
                      className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                      }`}
                    >
                      {site.tabLabel}
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={activePortfolio.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
              >
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {activePortfolio.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    {activePortfolio.websiteName}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {activePortfolio.summary}
                  </p>

                  <div className="mt-6 space-y-3">
                    {activePortfolio.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-100">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-[var(--accent)]">
                    <Globe className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-lg font-semibold tracking-tight">Portfolio Tab Preview</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Use this tabbed module to showcase all seven category websites on one page while
                    keeping the main website clean and conversion-oriented.
                  </p>

                  <div className="mt-5 space-y-2 rounded-xl border border-slate-700 bg-slate-950/70 p-4 text-sm text-slate-300">
                    <p>Total website categories: 7</p>
                    <p>Active category: {activePortfolio.tabLabel}</p>
                    <p>Primary goal: Convert visitors into qualified leads</p>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
                  >
                    Discuss Portfolio Deployment
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={revealTransition}
          className="bg-slate-100 py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.5)] md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Zero Platform Fees. Zero Headaches.
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Unlike Wati or Interakt, we do not lock your business into software subscriptions that
                can cross {formattedAnnualSaaSCost} every year. We build your custom automation
                infrastructure so you only pay Meta direct per-message costs and our flat management
                retainer.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                <Zap className="h-4 w-4 text-[var(--accent)]" />
                Custom stack ownership stays with your business.
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer id="contact" className="border-t-4 border-[var(--accent)] bg-slate-950 text-slate-100">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Legal and Compliance Footer
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Al Astoora Formal Business Identity
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
              The details below are intentionally displayed in a formal format for Meta and Google
              Business verification workflows.
            </p>

            <div className="mt-7 grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Legal Business Name</p>
                <p className="mt-2 font-medium text-slate-100">Al Astoora</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Registered Address</p>
                <p className="mt-2 font-medium text-slate-100">[Your Business Address]</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Registered Business Phone</p>
                <p className="mt-2 font-medium text-slate-100">[Your Contact Number]</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Tax Registration</p>
                <p className="mt-2 font-medium text-slate-100">GSTIN: 07RFVPS6101B1ZZ</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            © 2026 Al Astoora. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
