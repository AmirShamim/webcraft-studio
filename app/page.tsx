'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import {
  Gem,
  Menu,
  Globe,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Clock,
  ShieldCheck,
  Palette,
  Smartphone,
  MessageSquare,
  Star,
  CalendarCheck,
  Zap,
  Search,
  PenTool,
  Code,
  Rocket,
  XCircle,
  Check,
  Crown,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
  X
} from 'lucide-react';

// --- STYLES ---
const glassCard = "backdrop-blur-2xl bg-white/[0.04] border border-white/[0.07] shadow-[0_0_1px_rgba(255,255,255,0.1)] transition-all duration-500";
const glassCardHover = "hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.04)] hover:border-white/[0.15]";
const glassPill = "backdrop-blur-2xl bg-white/[0.04] border border-white/[0.07] shadow-[0_0_1px_rgba(255,255,255,0.1)] rounded-full";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- COMPONENTS ---

function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 mix-blend-overlay" />
      
      {/* Orbs */}
      <motion.div
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-600/20 blur-[140px]"
      />
      <motion.div
        animate={{
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-10%', '10%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/20 blur-[140px]"
      />
      <motion.div
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['5%', '-5%', '5%'],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[140px]"
      />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`${glassPill} px-6 py-4 flex items-center justify-between`}>
          <div className="flex items-center gap-2 text-white font-display font-bold text-xl tracking-tight">
            <Gem className="w-6 h-6 text-violet-400" />
            WebCraft
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            {['Services', 'Process', 'Work', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <button className={`${glassPill} px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300`}>
              Start a Project
            </button>
          </div>

          <button className="md:hidden text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-6 rounded-3xl backdrop-blur-3xl bg-[#05050A]/90 border border-white/10 shadow-2xl md:hidden flex flex-col gap-6"
          >
            {['Services', 'Process', 'Work', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-zinc-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full py-3 rounded-full bg-white text-black font-medium mt-4">
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center"
      >
        <motion.div variants={fadeUp} className={`${glassPill} inline-flex items-center gap-2 px-4 py-2 mb-8`}>
          <Globe className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Trusted by 120+ businesses worldwide</span>
        </motion.div>

        <motion.h1 
          variants={fadeUp}
          className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50"
        >
          Websites that convert.<br className="hidden md:block" /> Built by experts.
        </motion.h1>

        <motion.p 
          variants={fadeUp}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          We design and develop blazing-fast, conversion-optimized websites for ambitious brands. Strategy, design, and engineering — handled.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-white to-zinc-300 text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Start a Project <ArrowRight className="w-4 h-4" />
          </button>
          <button className={`w-full sm:w-auto px-8 py-4 ${glassPill} text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors duration-300`}>
            View Our Work <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </button>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            "48hr Turnaround",
            "PageSpeed 95+",
            "Conversion Focused",
            "Dedicated Strategist"
          ].map((badge, i) => (
            <div key={i} className={`${glassPill} px-4 py-2 flex items-center gap-2`}>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-zinc-300">{badge}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialProofBar() {
  const stats = [
    { icon: Globe, label: "120+ Live Sites" },
    { icon: Layers, label: "13 Industries" },
    { icon: Clock, label: "48hr Avg. Delivery" },
    { icon: ShieldCheck, label: "98% Retention Rate" }
  ];

  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className={`${glassCard} rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8`}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <stat.icon className="w-6 h-6 text-zinc-300" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Palette, title: "Brand & Web Design", desc: "Visual systems that elevate your market position." },
    { icon: Smartphone, title: "Mobile-First Engineering", desc: "70% of traffic is mobile. We build for that first." },
    { icon: MessageSquare, title: "Lead Capture & WhatsApp", desc: "Every visitor inquiry routed instantly to your team." },
    { icon: Star, title: "Reputation Management", desc: "Showcase Google reviews and build instant trust." },
    { icon: CalendarCheck, title: "Booking & Scheduling", desc: "Integrated appointment systems. No third-party tools." },
    { icon: Zap, title: "Performance & SEO", desc: "Sub-second load times. Top local search rankings." }
  ];

  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className={`${glassPill} inline-flex px-4 py-1.5 mb-6`}>
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-300">What We Do</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
            End-to-end digital craft.
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={fadeUp} className={`${glassCard} ${glassCardHover} rounded-3xl p-8 group`}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: Search, title: "Discovery", desc: "We audit your market, competitors, and digital gaps." },
    { icon: PenTool, title: "Design", desc: "Bespoke layouts crafted for your brand and audience." },
    { icon: Code, title: "Engineering", desc: "Pixel-perfect build on Next.js. Optimized for speed and SEO." },
    { icon: Rocket, title: "Launch & Scale", desc: "Go live, track performance, and iterate with data." }
  ];

  return (
    <section id="process" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">How we work.</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-transparent md:-translate-x-1/2" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#05050A] border-2 border-fuchsia-500 -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
                
                <div className="w-full md:w-1/2 pl-20 md:pl-0 flex flex-col">
                  <div className={`${glassCard} ${glassCardHover} rounded-3xl p-8 ${i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-mono text-zinc-500">0{i + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">{step.title}</h3>
                    <p className="text-zinc-400">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PortfolioShowcase() {
  const projects = [
    { title: "Luxury Retail & Jewelry", count: 18, img: "https://images.unsplash.com/photo-1599643478514-4a11018613c6?auto=format&fit=crop&w=800&q=80", span: "md:col-span-2 md:row-span-2" },
    { title: "Healthcare & Dental", count: 15, img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80", span: "md:col-span-1 md:row-span-1" },
    { title: "Hospitality & Wellness", count: 22, img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", span: "md:col-span-1 md:row-span-1" },
    { title: "Professional Services", count: 14, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", span: "md:col-span-2 md:row-span-1" }
  ];

  return (
    <section id="work" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">Selected verticals.</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6"
        >
          {projects.map((proj, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className={`relative rounded-3xl overflow-hidden group ${proj.span}`}
            >
              <Image 
                src={proj.img} 
                alt={proj.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A]/90 via-[#05050A]/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white mb-3">
                      {proj.count} Projects
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">{proj.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeUp} className={`${glassCard} rounded-3xl p-10 border-red-500/20 hover:border-red-500/40`}>
            <div className="inline-flex px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-8">
              Without WebCraft
            </div>
            <ul className="space-y-6">
              {["Template builders", "Slow load times", "Zero local SEO", "No lead capture"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-400 text-lg">
                  <XCircle className="w-6 h-6 text-red-500/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className={`${glassCard} rounded-3xl p-10 border-emerald-500/20 hover:border-emerald-500/40 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="inline-flex px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8">
              With WebCraft
            </div>
            <ul className="space-y-6 relative z-10">
              {["Custom architecture", "PageSpeed 95+", "Rank #1 locally", "Instant lead routing"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white text-lg font-medium">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Growth",
      price: "$149",
      desc: "Perfect for new businesses needing a professional presence.",
      features: ["Single-page site", "Mobile responsive", "Contact form", "Basic SEO"],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      desc: "For established brands ready to scale and capture leads.",
      features: ["Multi-page site", "Booking system", "Google Reviews widget", "Priority support", "Advanced SEO"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      desc: "Full-scale digital platform with custom architecture.",
      features: ["Full custom build", "E-commerce", "Analytics dashboard", "Dedicated strategist", "Monthly performance reviews"],
      icon: Crown,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">Simple, transparent pricing.</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Invest in a digital asset that pays for itself.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className={`relative rounded-3xl p-8 flex flex-col ${plan.popular ? 'bg-white/[0.08] border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]' : glassCard}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-white">{plan.name}</h3>
                  {plan.icon && <plan.icon className="w-6 h-6 text-amber-400" />}
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-400">/mo</span>
                </div>
                <p className="text-zinc-400 text-sm">{plan.desc}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular ? 'bg-white text-black hover:scale-[1.02]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { quote: "WebCraft completely transformed our online presence. Our bookings have doubled since launch.", name: "Sarah Mitchell", biz: "Bloom & Co Florist", img: "https://i.pravatar.cc/80?img=5" },
    { quote: "The attention to detail and performance is unmatched. Best agency we've ever worked with.", name: "James Rivera", biz: "Rivera Dental Group", img: "https://i.pravatar.cc/80?img=11" },
    { quote: "They don't just build websites; they build business engines. Highly recommended.", name: "Elena Rostova", biz: "Luxe Interiors", img: "https://i.pravatar.cc/80?img=9" },
    { quote: "Fast, professional, and the results speak for themselves. A true partner in growth.", name: "David Chen", biz: "Chen Legal Partners", img: "https://i.pravatar.cc/80?img=14" }
  ];

  return (
    <section className="py-32 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">Don&apos;t just take our word for it.</h2>
      </div>

      <div className="flex w-[200%] md:w-[150%] lg:w-[120%] animate-[slide_30s_linear_infinite] hover:[animation-play-state:paused] gap-6 px-6">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className={`${glassCard} rounded-3xl p-8 w-[350px] md:w-[450px] shrink-0 flex flex-col justify-between`}>
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-lg text-zinc-300 italic mb-8 leading-relaxed">&quot;{t.quote}&quot;</p>
            <div className="flex items-center gap-4">
              <Image src={t.img} alt={t.name} width={48} height={48} className="rounded-full border border-white/20" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-zinc-400">{t.biz}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What's included in each plan?", a: "Every plan includes custom design, Next.js development, mobile optimization, basic SEO setup, and premium hosting. Higher tiers add features like booking systems, e-commerce, and dedicated strategy sessions." },
    { q: "How fast can you deliver?", a: "Our standard turnaround is 4-6 weeks for Growth and Professional plans. Enterprise builds typically take 8-12 weeks depending on complexity." },
    { q: "Do I own the website?", a: "Absolutely. Once the final payment is made, you own 100% of the code, design assets, and content. We don't hold your business hostage." },
    { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. We scale with your business needs." },
    { q: "What makes you different from Wix or Squarespace?", a: "Template builders are slow, generic, and bad for SEO. We build custom, hard-coded Next.js applications that load in milliseconds, rank higher on Google, and are tailored specifically to your conversion goals." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">Common questions.</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`${glassCard} rounded-2xl overflow-hidden`}
            >
              <button 
                className="w-full px-8 py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-lg text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative rounded-[3rem] p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Glass background with strong border glow */}
          <div className="absolute inset-0 backdrop-blur-3xl bg-white/[0.02] border border-white/10" />
          <div className="absolute inset-0 border-[2px] border-transparent bg-gradient-to-b from-white/20 to-transparent [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none rounded-[3rem]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-fuchsia-500/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Let&apos;s build something remarkable.</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">Join 120+ brands that chose performance over templates.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-white to-zinc-300 text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                Start a Project <ArrowRight className="w-4 h-4" />
              </button>
              <button className={`w-full sm:w-auto px-8 py-4 ${glassPill} text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors duration-300`}>
                <Phone className="w-4 h-4 text-zinc-400" /> Book a Strategy Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/10 relative z-10 bg-[#05050A]/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-white font-display font-bold text-xl tracking-tight mb-4">
              <Gem className="w-6 h-6 text-violet-400" />
              WebCraft
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">Digital agency for ambitious brands. We build websites that perform, convert, and scale.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              {['Services', 'Process', 'Work', 'Pricing'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Industries</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>Luxury Retail</li>
              <li>Healthcare</li>
              <li>Hospitality</li>
              <li>Professional Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@webcraft.studio</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 WebCraft Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingElements() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <button className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-110 transition-transform relative group">
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#05050A] selection:bg-fuchsia-500/30 selection:text-white">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <SocialProofBar />
      <Services />
      <Process />
      <PortfolioShowcase />
      <BeforeAfter />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingElements />
    </main>
  );
}
