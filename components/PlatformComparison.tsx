import { ArrowRight, Check } from 'lucide-react';

const comparisons = [
  { area: 'Collection', manual: 'Documents spread across email threads and attachments.', connected: 'A structured WhatsApp intake flow with clear document requests.' },
  { area: 'Follow-up', manual: 'Staff track missing files and send individual reminders.', connected: 'Automated reminders and document validation triggers.' },
  { area: 'Handoff', manual: 'Attachments copied and client details entered by hand.', connected: 'Documents and client data routed through CRM and storage webhooks.' },
  { area: 'Team capacity', manual: 'More collection work competes with time for clients.', connected: 'Routine intake steps handled by a configured workflow.' },
];

export default function PlatformComparison() {
  return (
    <section className="bg-[var(--blue)] py-16 text-[var(--ink)] md:py-24">
      <div className="site-container">
        <div className="reveal mb-12 grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div>
            <span className="section-label">A more connected workflow</span>
            <h2 className="section-title mt-5">Less chasing.<br /><span className="italic">More continuity.</span></h2>
          </div>
          <p className="max-w-md self-end text-sm leading-7 text-[var(--muted)] sm:text-base">Bring the work between messages into one process. Leave the decisions that need expertise with the people who have it.</p>
        </div>
        <table className="hidden w-full table-fixed border-collapse text-left text-sm leading-7 sm:table">
          <caption className="sr-only">Manual intake compared with an Al Astoora connected workflow</caption>
          <thead>
            <tr className="border-y border-black/15">
              <th scope="col" className="w-[20%] py-5 pr-3 text-xs font-medium text-[var(--muted)]">The work</th>
              <th scope="col" className="w-[40%] px-5 py-5 text-xs font-medium text-[var(--muted)]">Manual intake</th>
              <th scope="col" className="w-[40%] bg-[var(--night)] px-6 py-5 font-semibold text-[var(--highlight)]">With Al Astoora</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((comparison) => (
              <tr key={comparison.area} className="border-b border-black/15 align-top">
                <th scope="row" className="break-words py-7 pr-3 font-semibold">{comparison.area}</th>
                <td className="px-5 py-7 text-[var(--muted)]">{comparison.manual}</td>
                <td className="bg-white/60 px-6 py-7">
                  <span className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-1 hidden h-4 w-4 shrink-0 text-[var(--accent)] sm:block" />
                    <span>{comparison.connected}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-t border-black/15 sm:hidden">
          {comparisons.map((comparison) => (
            <div key={comparison.area} className="border-b border-black/15 py-6">
              <h3 className="display-serif mb-4 text-2xl">{comparison.area}</h3>
              <dl className="grid grid-cols-2 gap-5 text-xs leading-6">
                <div>
                  <dt className="mb-2 font-semibold text-[var(--muted)]">Manual intake</dt>
                  <dd className="text-[var(--muted)]">{comparison.manual}</dd>
                </div>
                <div className="border-l border-black/15 pl-4">
                  <dt className="mb-2 font-semibold text-[var(--accent)]">With Al Astoora</dt>
                  <dd>{comparison.connected}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-3 text-xs leading-6 text-[var(--muted)]">
          <ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
          Integration scope and automation rules are defined around your existing systems and intake requirements.
        </p>
      </div>
    </section>
  );
}

