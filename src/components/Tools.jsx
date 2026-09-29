const groups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'GraphQL', 'REST'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Infra & AI',
    items: ['Docker', 'AWS', 'CI/CD', 'OpenAI API'],
  },
]

export default function Tools() {
  return (
    <section id="tools" className="py-24 sm:py-28 border-t border-line">
      <div className="container-page">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-950 tracking-tight">Tools I reach for</h2>
          <p className="mt-4 text-ink-600 leading-relaxed">
            A stable core, adapted to what a project actually needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {groups.map((g) => (
            <div key={g.label} className="bg-white p-7">
              <h3 className="text-sm font-medium text-ink-500">{g.label}</h3>
              <ul className="mt-4 space-y-2.5 font-mono text-[15px] text-ink-900">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
