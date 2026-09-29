const tiers = [
  {
    name: 'Website',
    price: '$1,800',
    unit: 'starting price',
    desc: 'A fast, well-built marketing site or landing page that actually converts.',
    features: [
      'Up to 6 pages',
      'Responsive, accessible build',
      'CMS or static content',
      'Basic analytics setup',
      '2 weeks delivery',
    ],
    highlight: false,
  },
  {
    name: 'Web application',
    price: '$6,500',
    unit: 'starting price',
    desc: 'A full product: frontend, backend, database, auth, and deploy pipeline.',
    features: [
      'Custom frontend in React',
      'API and database design',
      'Authentication & user accounts',
      'Third-party integrations',
      'Deployment & CI/CD',
      '4–8 weeks delivery',
    ],
    highlight: true,
  },
  {
    name: 'Ongoing partnership',
    price: 'Custom',
    unit: 'monthly retainer',
    desc: 'Continued development, consultancy, and technical direction for an existing product.',
    features: [
      'Dedicated weekly hours',
      'Architecture & code review',
      'Feature development',
      'Database & performance work',
      'Direct async access',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-28 border-t border-line bg-mist/40">
      <div className="container-page">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-950 tracking-tight">Pricing</h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Scoped project work or an ongoing partnership. Every engagement starts with a short
            call to size up what you actually need.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 flex flex-col ${
                t.highlight
                  ? 'bg-ink-950 text-paper shadow-soft lg:-translate-y-3'
                  : 'bg-white border border-line shadow-card text-ink-900'
              }`}
            >
              <h3 className={`text-lg font-semibold ${t.highlight ? 'text-paper' : 'text-ink-950'}`}>
                {t.name}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${t.highlight ? 'text-white/70' : 'text-ink-600'}`}>
                {t.desc}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">{t.price}</span>
                <span className={`text-sm ${t.highlight ? 'text-white/60' : 'text-ink-500'}`}>{t.unit}</span>
              </div>

              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`mt-0.5 shrink-0 ${t.highlight ? 'text-teal-400' : 'text-teal-500'}`}
                    >
                      <path
                        d="M13.5 4.5L6.5 11.5L3 8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={t.highlight ? 'text-white/85' : 'text-ink-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex justify-center items-center rounded-full text-sm font-medium px-5 py-3 transition-colors ${
                  t.highlight
                    ? 'bg-paper text-ink-950 hover:bg-white/90'
                    : 'bg-ink-950 text-paper hover:bg-ink-800'
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
