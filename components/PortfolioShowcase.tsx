'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageSquare, Phone, Send, FileText, CalendarCheck2, ArrowRight } from 'lucide-react';

type PortfolioSite = {
  id: string;
  tabLabel: string;
  websiteName: string;
  category: string;
  summary: string;
  highlights: string[];
};

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

type SimulationChat = {
  sender: 'user' | 'bot';
  text: string;
  actions?: string[];
};

const chatSimulations: Record<string, SimulationChat[]> = {
  gyms: [
    { sender: 'user', text: 'Hey, I want to book a free trial session for tomorrow!' },
    { sender: 'bot', text: 'Awesome! 🏋️ What is your preferred slot?\n1. 8:00 AM (Morning Flow)\n2. 6:30 PM (Evening Burn)' },
    { sender: 'user', text: 'Let’s do 6:30 PM.' },
    { sender: 'bot', text: 'Locked in! 🎟️ You are booked for 6:30 PM tomorrow at Al Astoora Fitness. I have sent your entry pass. See you there!', actions: ['Get Entry Pass PDF', 'Change Time'] }
  ],
  restaurants: [
    { sender: 'user', text: 'Do you have a table for 4 tonight around 8 PM?' },
    { sender: 'bot', text: 'Hi! Yes, we have standard tables and outdoor tables open. Would you like to reserve one? 🍕' },
    { sender: 'user', text: 'Outdoor table please.' },
    { sender: 'bot', text: 'Table reserved for 4 at 8:00 PM under name Alex. Tap below to see our live menu.', actions: ['View PDF Menu', 'Cancel Booking'] }
  ],
  jewelers: [
    { sender: 'user', text: 'Hello, I want to see your wedding collections catalogue.' },
    { sender: 'bot', text: 'Welcome to Al Astoora Fine Jewelry! 💍 Let me share our Wedding Collection Catalogue and schedule a consultation slot with our designers.', actions: ['Wedding Catalog PDF', 'Book Designer Call'] }
  ],
  dental: [
    { sender: 'user', text: 'Can I book a consultation with Dr. Sarah this week?' },
    { sender: 'bot', text: 'Hi! Dr. Sarah has free slots tomorrow at 11:30 AM and Friday at 4:00 PM. Which works best? 🩺' },
    { sender: 'user', text: 'Friday at 4:00 PM works.' },
    { sender: 'bot', text: 'Perfect! Scheduled for Friday at 4:00 PM. Please fill out our pre-checkup card below.', actions: ['Pre-Checkup Form', 'Clinic Directions'] }
  ],
  beauty: [
    { sender: 'user', text: 'I want to schedule a hair spa and pedicure today.' },
    { sender: 'bot', text: 'Excellent choice! 💅 Our available slots for today:\n1. 2:30 PM\n2. 5:30 PM\nSelect one to book.' },
    { sender: 'user', text: '2:30 PM works.' },
    { sender: 'bot', text: 'Confirmed under Alex for 2:30 PM today at Main Salon. Tap below to add a reminder.', actions: ['Add to Calendar', 'View Pricing Card'] }
  ],
  'home-services': [
    { sender: 'user', text: 'My kitchen sink is leaking, can you send a plumber today?' },
    { sender: 'bot', text: 'Urgent plumbing request registered! 🚨 A certified technician can arrive at your address in 45 mins. Please confirm your location.', actions: ['Send Location'] },
    { sender: 'user', text: 'Shared location.' },
    { sender: 'bot', text: 'Plumber on his way! Dispatcher Mike ETA: 35 minutes. Tracking details sent.' }
  ],
  training: [
    { sender: 'user', text: 'When does the next full-stack coding batch start?' },
    { sender: 'bot', text: 'Our next cohort starts on June 15th. 🚀 Only 3 seats left! Tap below to request the brochure or book a counseling call.', actions: ['Download Brochure PDF', 'Book Counseling Call'] }
  ],
};

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<string>('gyms');

  const selectedSite = portfolioSites.find((site) => site.id === activeTab) ?? portfolioSites[0];
  const activeChat = chatSimulations[activeTab] ?? chatSimulations.gyms;

  return (
    <section id="portfolio" className="bg-slate-950 py-20 md:py-28 relative overflow-hidden border-t border-slate-900">
      
      {/* Lights */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Case Studies
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bespoke automation for every local industry
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            See how different industry verticals use our high-converting landing pages integrated with Meta Cloud API to capture customers instantly.
          </p>
        </div>

        {/* Tab controls - Horizontal list scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 gap-2 border-b border-slate-900 scrollbar-none snap-x snap-mandatory">
          {portfolioSites.map((site) => {
            const isActive = site.id === activeTab;
            return (
              <button
                key={site.id}
                onClick={() => setActiveTab(site.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer snap-start ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {site.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] mt-12 items-center">
          
          {/* Details Column */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSite.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                  {selectedSite.category}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {selectedSite.websiteName}
                </h3>
              </div>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {selectedSite.summary}
              </p>

              <div className="space-y-3.5 border-t border-slate-900 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Key Conversion Highlights
                </p>
                <ul className="space-y-3">
                  {selectedSite.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5">
                        <Check className="h-3.5 w-3.5 font-bold" />
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="/contact"
                  data-analytics-event="primary_cta_clicked"
                  data-analytics-label={`portfolio_${selectedSite.id}_framework_request`}
                  data-analytics-location="portfolio_showcase"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
                >
                  Request this framework for your business
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Chat Simulation Column */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSite.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[310px] h-[500px] rounded-[36px] border-8 border-slate-900 bg-slate-950 shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Phone Header */}
                <div className="bg-slate-900 px-4 py-3.5 flex items-center gap-2.5 shrink-0">
                  <div className="h-8.5 w-8.5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                    AA
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white">Al Astoora Simulation</p>
                    <p className="text-[9px] text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Auto-flow active
                    </p>
                  </div>
                </div>

                {/* Simulated Messages Screen */}
                <div className="flex-1 p-3.5 bg-slate-950 overflow-y-auto space-y-3.5 flex flex-col justify-end">
                  {activeChat.map((msg, index) => {
                    const isBot = msg.sender === 'bot';
                    return (
                      <div
                        key={index}
                        className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} w-full`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                            isBot
                              ? 'bg-slate-900 border border-slate-800 text-slate-100 rounded-bl-sm'
                              : 'bg-emerald-500 text-slate-950 font-semibold rounded-br-sm'
                          }`}
                        >
                          {msg.text}

                          {msg.actions && (
                            <div className="mt-3.5 space-y-1.5 border-t border-slate-800 pt-2.5">
                              {msg.actions.map((act, actIdx) => (
                                <div
                                  key={actIdx}
                                  className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-950 border border-slate-800 px-3 py-1.5 text-[10px] font-bold text-emerald-400 cursor-pointer"
                                >
                                  {act}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Phone Bottom Input */}
                <div className="p-3 bg-slate-900 border-t border-slate-800/80 flex items-center gap-2 shrink-0">
                  <div className="flex-1 bg-slate-950 border border-slate-800/50 rounded-full py-1 px-4.5 text-[9px] text-slate-600">
                    Simulation reading mode...
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
