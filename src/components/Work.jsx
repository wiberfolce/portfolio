const projects = [
  {
    tag: 'Web app',
    title: 'Buioolt',
    desc: 'A migration service that moves apps built on AI app builders — Bolt, Lovable, Replit, v0 — onto self-hosted infrastructure, cutting platform lock-in and cost at scale.',
    stack: ['React', 'Node.js', 'Postgres'],
  },
  {
    tag: 'Web app',
    title: 'SaaS operations dashboard',
    desc: 'Internal tool consolidating billing, usage, and support data into one real-time view for a subscription product.',
    stack: ['Next.js', 'GraphQL', 'Postgres'],
  },
  {
    tag: 'Mobile + API',
    title: 'Booking platform',
    desc: 'Customer-facing booking flow with a native mobile app on top of a shared scheduling API.',
    stack: ['React Native', 'Node.js', 'Stripe API'],
  },
  {
    tag: 'Applied AI',
    title: 'Support assistant',
    desc: 'Retrieval-backed assistant embedded in an existing help center, trained on the product\'s own documentation.',
    stack: ['OpenAI', 'Vector search', 'Node.js'],
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-28 border-t border-line bg-mist/40">
      <div className="container-page">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-950 tracking-tight">Selected work</h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            A mix of products I've built end to end and systems I've integrated into.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-line bg-white p-7 sm:p-8 shadow-card hover:shadow-soft transition-shadow"
            >
              <span className="text-xs font-mono text-teal-500">{p.tag}</span>
              <h3 className="mt-3 text-xl font-semibold text-ink-950">{p.title}</h3>
              <p className="mt-2.5 text-sm text-ink-600 leading-relaxed">{p.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="text-xs font-mono text-ink-600 bg-mist rounded-full px-2.5 py-1"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
