export type VerticalAutomationPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  buyerFit: string;
  primaryUseCase: string;
  whatsappMessage: string;
  fitSignals: string[];
  bookingFlow: Array<{
    title: string;
    description: string;
  }>;
  syncPoints: string[];
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  relatedInsight: {
    href: string;
    title: string;
  };
};

export const verticalAutomationPages: VerticalAutomationPage[] = [
  {
    slug: 'gyms',
    title: 'WhatsApp automation for gyms',
    metaTitle: 'WhatsApp Automation for Gyms and Fitness Studios | Al Astoora',
    metaDescription:
      'Build an official WhatsApp Cloud API booking flow for gyms. Capture trial requests, share class schedules, qualify membership leads, and sync details to your tools.',
    eyebrow: 'Gym booking automation',
    heroTitle: 'Turn WhatsApp trial inquiries into booked gym visits.',
    heroSubtitle:
      'Al Astoora builds an official WhatsApp Cloud API flow for gyms and fitness studios that answers trial questions, shares schedules, captures lead details, and sends booking requests to your team.',
    buyerFit:
      'Best for gyms, boutique studios, fitness academies, and personal training teams that already get membership and trial questions through WhatsApp.',
    primaryUseCase: 'Trial class and membership inquiry booking',
    whatsappMessage: 'Hi I want to automate WhatsApp trial bookings for my gym',
    fitSignals: [
      'Trial requests arrive after reception hours.',
      'Leads ask the same class, trainer, and membership questions.',
      'New prospects need a quick path to book a trial slot.',
      'Reception needs cleaner lead details before calling back.',
    ],
    bookingFlow: [
      {
        title: 'Qualify the trial request',
        description:
          'The flow asks what the visitor wants, such as weight loss, strength training, group classes, or personal training.',
      },
      {
        title: 'Show useful booking options',
        description:
          'Prospects can choose a trial session, preferred time window, branch, or membership plan interest before your team follows up.',
      },
      {
        title: 'Send a clear handoff',
        description:
          'The gym receives the lead name, phone number, goal, preferred slot, and source in a structured record.',
      },
    ],
    syncPoints: [
      'Google Sheets or Notion lead sheet',
      'Trial booking calendar',
      'Trainer or sales-team follow-up list',
      'Membership inquiry status field',
    ],
    faqItems: [
      {
        question: 'Can this book trial sessions directly from WhatsApp?',
        answer:
          'Yes. The flow can collect the prospect details, show available trial options, and send a structured booking request to your team or calendar setup.',
      },
      {
        question: 'Can it share class schedules?',
        answer:
          'Yes. The automation can send class schedules, trainer details, branch information, PDFs, or links from inside the WhatsApp conversation.',
      },
      {
        question: 'Does this replace the gym sales team?',
        answer:
          'No. It handles the repeat first reply, qualification, and handoff so the sales team starts with a warmer, cleaner lead.',
      },
    ],
    relatedInsight: {
      href: '/insights/automate-whatsapp-for-gyms-and-fitness',
      title: 'Read the gym automation insight',
    },
  },
  {
    slug: 'dental-clinics',
    title: 'WhatsApp automation for dental clinics',
    metaTitle: 'WhatsApp Automation for Dental Clinics | Al Astoora',
    metaDescription:
      'Build an official WhatsApp Cloud API appointment flow for dental clinics. Capture patient interest, route appointment requests, send reminders, and sync details to clinic tools.',
    eyebrow: 'Dental appointment automation',
    heroTitle: 'Turn dental WhatsApp inquiries into cleaner appointment requests.',
    heroSubtitle:
      'Al Astoora builds an official WhatsApp Cloud API flow for dental clinics that answers common appointment questions, captures patient intent, routes requests, and keeps the front desk from losing high-intent messages.',
    buyerFit:
      'Best for dental clinics and healthcare practices where reception teams are busy with in-clinic patients while WhatsApp inquiries keep arriving.',
    primaryUseCase: 'Appointment request and patient intake handoff',
    whatsappMessage: 'Hi I want to automate WhatsApp appointment requests for my dental clinic',
    fitSignals: [
      'Patients ask about appointments while reception is busy.',
      'The same treatment, timing, and location questions repeat daily.',
      'New patients need a fast way to request cleaning, consultation, or follow-up slots.',
      'The clinic wants appointment context before a human calls back.',
    ],
    bookingFlow: [
      {
        title: 'Capture appointment intent',
        description:
          'The flow asks whether the patient needs a cleaning, consultation, follow-up, emergency visit, or another clinic-defined service.',
      },
      {
        title: 'Route the request safely',
        description:
          'The system collects only the operational details needed for scheduling, then routes the request to the clinic team for confirmation.',
      },
      {
        title: 'Keep the front desk informed',
        description:
          'The clinic receives the patient name, phone number, service interest, preferred timing, and notes in the chosen handoff tool.',
      },
    ],
    syncPoints: [
      'Reception follow-up sheet',
      'Appointment request calendar',
      'Clinic CRM or patient-intake tracker',
      'Reminder and reschedule status fields',
    ],
    faqItems: [
      {
        question: 'Can this confirm dental appointments automatically?',
        answer:
          'It can collect appointment requests and route them to your team. Final confirmation can stay with the clinic if you want a human to approve availability first.',
      },
      {
        question: 'Can it send reminders?',
        answer:
          'Yes. Reminder flows can be configured for appointment confirmations, follow-ups, and reschedule prompts through the official WhatsApp setup.',
      },
      {
        question: 'Does this store sensitive medical notes?',
        answer:
          'The flow can be kept to scheduling details only. Any health-specific data collection should match the clinic process and the storage tool you approve.',
      },
    ],
    relatedInsight: {
      href: '/insights/automate-whatsapp-for-dental-and-healthcare',
      title: 'Read the dental and healthcare insight',
    },
  },
];

export function getVerticalAutomationPage(slug: string) {
  return verticalAutomationPages.find((page) => page.slug === slug);
}

export function getAllVerticalAutomationSlugs() {
  return verticalAutomationPages.map((page) => page.slug);
}
