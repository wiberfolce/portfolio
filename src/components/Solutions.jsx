const services = [
  {
    title: 'Mobile apps',
    desc: 'iOS and Android apps sharing a codebase with your web product where it makes sense.',
  },
  {
    title: 'API integration',
    desc: 'Payments, auth, third-party platforms — wired up cleanly and documented.',
  },
  {
    title: 'Databases',
    desc: 'Schema design, migrations, and query performance for Postgres and Mongo.',
  },
  {
    title: 'Applied AI',
    desc: 'LLM features, retrieval, and automation built into an existing product.',
  },
  {
    title: 'Consultancy',
    desc: 'Architecture review, code audits, and technical direction for your team.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-28 border-t border-line">
      <div className="container-page">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-950 tracking-tight">
            Solutions
          </h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            Web applications and websites are the core of what I do. Everything else exists to
            support that: the mobile app that extends it, the API it depends on, the database
            underneath it, the AI feature layered on top.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 lg:row-span-2 rounded-2xl border border-line bg-white p-8 sm:p-10 shadow-card flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-mono text-violet-600 bg-violet-500/10 rounded-full px-3 py-1">
                Primary focus
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-ink-950">Web apps & websites</h3>
              <p className="mt-3 text-ink-600 leading-relaxed max-w-md">
                From marketing sites to full product dashboards — designed, built, and shipped
                as one continuous piece of work. React on the front, a backend that matches the
                actual load you expect, and a deploy pipeline that doesn't need babysitting.
              </p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-600 font-mono">
              <li>marketing sites</li>
              <li>SaaS dashboards</li>
              <li>internal tools</li>
              <li>e-commerce</li>
            </ul>
          </div>

          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-white p-7 shadow-card">
              <h3 className="text-lg font-semibold text-ink-950">{s.title}</h3>
              <p className="mt-2.5 text-sm text-ink-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
