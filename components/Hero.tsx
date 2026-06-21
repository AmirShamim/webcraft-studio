'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Send, FileText, CalendarCheck2, MessageSquare, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';

const revealTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};

type Message = {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  actions?: { label: string; icon: any }[];
};

const demoMessages: Message[] = [
  { id: 1, sender: 'user', text: 'Hey, are you open today? And do you have booking slots?', timestamp: '10:02 AM' },
  { id: 2, sender: 'bot', text: 'Yes! We are open until 10:00 PM today. ⚡', timestamp: '10:02 AM' },
  {
    id: 3,
    sender: 'bot',
    text: 'Here is our menu and booking portal. Select a time below to confirm instantly!',
    timestamp: '10:02 AM',
    actions: [
      { label: 'View PDF Menu', icon: FileText },
      { label: 'Book Appointment', icon: CalendarCheck2 },
    ]
  },
  { id: 4, sender: 'user', text: 'Perfect! Booking 4 PM slot for Hair Styling.', timestamp: '10:03 AM' },
  { id: 5, sender: 'bot', text: 'Confirmed! Alex, your booking is locked in for 4:00 PM today. A reminder has been added to your calendar. See you soon! 🗓️✨', timestamp: '10:03 AM' }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax floating offsets
  const yFloating1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yFloating2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacityFloating = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Chat message simulator logic
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [demoStep, setDemoStep] = useState(0);

  useEffect(() => {
    if (demoStep >= demoMessages.length) {
      const restartTimer = setTimeout(() => {
        setVisibleMessages([]);
        setDemoStep(0);
      }, 5000);
      return () => clearTimeout(restartTimer);
    }

    const currentMsg = demoMessages[demoStep];
    let delay = 1200; // time before starting to type/display

    if (currentMsg.sender === 'bot') {
      // Simulate typing delays
      const startTypingTimer = setTimeout(() => {
        setIsTyping(true);
      }, 800);

      const messageTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, currentMsg]);
        setDemoStep((prev) => prev + 1);
      }, 2500);

      return () => {
        clearTimeout(startTypingTimer);
        clearTimeout(messageTimer);
      };
    } else {
      // User message delay is faster
      const messageTimer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, currentMsg]);
        setDemoStep((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(messageTimer);
    }
  }, [demoStep]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-slate-950 text-slate-100 py-20 md:py-32"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      {/* Hexagonal Honeycomb Pattern Overlay */}
      <div className="absolute inset-0 bg-hex-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={revealTransition}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-400 mb-6 w-fit shadow-lg shadow-emerald-950/20">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Official WhatsApp Cloud API Stack</span>
          </div>

          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            Turn your WhatsApp into a <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent font-bold">24/7 automated</span> front desk.
          </h1>
          
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
            Stop losing qualified leads to slow response times. We build intelligent conversational agents that capture customer details, answer FAQs, share documents, and book appointments instantly inside WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              data-analytics-event="primary_cta_clicked"
              data-analytics-label="hero_see_live_demo"
              data-analytics-location="homepage_hero"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
            >
              See Live Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#roi"
              data-analytics-event="primary_cta_clicked"
              data-analytics-label="hero_calculate_roi"
              data-analytics-location="homepage_hero"
              className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-sm px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-slate-700 hover:text-white hover:bg-slate-900"
            >
              Calculate ROI
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-900 pt-8 max-w-md">
            <div>
              <p className="text-2xl font-bold text-white">1.8s</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Avg. Response</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Lead Capture</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">0$</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">SaaS Platform Fees</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Mockup & Parallax Widgets */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          
          {/* Parallax Floating Widget 1: Lead Captured */}
          <motion.div
            style={{ y: yFloating1, opacity: opacityFloating }}
            className="absolute left-[-20px] top-[15%] z-20 hidden min-[540px]:flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/90 backdrop-blur-md p-3.5 shadow-2xl shadow-slate-950/50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Check className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">New Booking</p>
              <p className="text-sm font-semibold text-white">Alex - Hair Styling 4:00 PM</p>
            </div>
          </motion.div>

          {/* Parallax Floating Widget 2: Recovery Stats */}
          <motion.div
            style={{ y: yFloating2, opacity: opacityFloating }}
            className="absolute right-[-20px] bottom-[20%] z-20 hidden min-[540px]:flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/90 backdrop-blur-md p-3.5 shadow-2xl shadow-slate-950/50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <MessageSquare className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-400">Inquiry Recovery</p>
              <p className="text-sm font-semibold text-white">65% Rescued Leads</p>
            </div>
          </motion.div>

          {/* Core Phone Mockup container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...revealTransition, delay: 0.15 }}
            className="relative w-full max-w-[320px] h-[580px] rounded-[42px] border-[10px] border-slate-900 bg-slate-950 shadow-[0_32px_80px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[22px] bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center" />

            {/* Phone Header */}
            <div className="bg-slate-900/90 border-b border-slate-800 px-5 pt-7 pb-3 flex items-center gap-3 shrink-0">
              <div className="relative">
                <div className="h-9 w-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-bold">
                  AA
                </div>
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Al Astoora Assistant</p>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online | Bot Active
                </p>
              </div>
            </div>

            {/* Phone Screen/Chat Area */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 flex flex-col justify-end bg-slate-950 relative scrollbar-none">
              
              {/* Floating watermark background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                <MessageSquare className="w-48 h-48" />
              </div>

              {visibleMessages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} w-full`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                        isBot
                          ? 'bg-slate-900 border border-slate-800 text-slate-100 rounded-bl-sm'
                          : 'bg-emerald-500 text-slate-950 font-medium rounded-br-sm shadow-md'
                      }`}
                    >
                      {msg.text}

                      {/* Display CTA action buttons in WhatsApp template format */}
                      {msg.actions && (
                        <div className="mt-3.5 space-y-2 border-t border-slate-800 pt-2.5">
                          {msg.actions.map((act, index) => {
                            const IconComp = act.icon;
                            return (
                              <div
                                key={index}
                                className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-950 border border-slate-800 px-3 py-1.5 text-[11px] font-semibold text-emerald-400"
                              >
                                <IconComp className="h-3 w-3" />
                                {act.label}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-slate-600 mt-1 px-1">{msg.timestamp}</span>
                  </motion.div>
                );
              })}

              {/* Typing indicator bubble */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-2.5 w-fit rounded-bl-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </motion.div>
              )}
            </div>

            {/* Phone Footer Input */}
            <div className="p-3 bg-slate-900/90 border-t border-slate-800/80 flex items-center gap-2 shrink-0">
              <div className="flex-1 bg-slate-950 border border-slate-800/50 rounded-full py-1.5 px-4 text-[10px] text-slate-500">
                Message...
              </div>
              <span className="h-7 w-7 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950">
                <Send className="h-3.5 w-3.5 fill-current" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
