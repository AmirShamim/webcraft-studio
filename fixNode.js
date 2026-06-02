const fs = require('fs');
let code = fs.readFileSync('webcraft-studio/app/page.tsx', 'utf-8');

// fix JSX fragments
code = code.replace('<>\r\n      <title>', '<>\r\n      <div className="min-h-screen bg-slate-50 text-slate-900">\r\n      <title>');
code = code.replace(/<div className="min-h-screen bg-slate-50 text-slate-900">\r\n\s*<header/, '      <header');
code = code.replace('    </div>\r\n    </>\r\n  );\r\n}', '    </>\r\n  );\r\n}');

// remove activePortfolio logic
code = code.replace(/const activePortfolio = useMemo[\s\S]*?\[activePortfolioId\],\r\n  \);\r\n/m, '');

// replace rows="4" with rows={4}
code = code.replace('rows="4"', 'rows={4}');

// replace portfolio section
const start = code.indexOf('<motion.section\r\n          id="portfolio"');
if(start !== -1) {
    const sectionEndTag = '</motion.section>';
    const end = code.indexOf(sectionEndTag, start) + sectionEndTag.length;
    const about = `<motion.section
          id="about"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={revealTransition}
          className="bg-slate-900 py-20 text-slate-100"
        >
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl border border-slate-700 bg-slate-900/50 p-8 rounded-3xl">
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Meta Verified Business Partner
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Built by a founder who understands your business
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Al Astoora was founded to solve one problem — businesses spend on ads but lose leads to slow response times. We build automation infrastructure on Meta's official WhatsApp Cloud API so your business never misses a customer.
                </p>
              </div>
            </div>
          </div>
        </motion.section>`;
    code = code.substring(0, start) + about + code.substring(end);
}

fs.writeFileSync('webcraft-studio/app/page.tsx', code);
console.log('done node!!');
