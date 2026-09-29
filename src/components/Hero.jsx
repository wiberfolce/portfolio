export default function Hero() {
  return (
    <section id="top" className="mesh-bg pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="container-page grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
        <div>
          <p className="text-sm font-medium text-violet-600 mb-5">Senior software engineer</p>
          <h1 className="text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-semibold text-ink-950 tracking-tight">
            I build web apps and websites that carry real businesses.
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-lg leading-relaxed">
            Full-stack development is the foundation, and web applications are where I spend most of
            my time: from first line of code to a product handling real traffic. Mobile apps, API
            integration, databases, and applied AI round out the rest.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-ink-950 text-paper text-sm font-medium px-6 py-3 hover:bg-ink-800 transition-colors"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-full border border-line text-ink-800 text-sm font-medium px-6 py-3 hover:border-ink-500 transition-colors"
            >
              See the work
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <dt className="sr-only">Experience</dt>
              <dd className="text-2xl font-semibold text-ink-950">8+ yrs</dd>
              <p className="text-sm text-ink-500 mt-1">Building software</p>
            </div>
            <div>
              <dt className="sr-only">Focus</dt>
              <dd className="text-2xl font-semibold text-ink-950">Full-stack</dd>
              <p className="text-sm text-ink-500 mt-1">Web to backend</p>
            </div>
            <div>
              <dt className="sr-only">Delivery</dt>
              <dd className="text-2xl font-semibold text-ink-950">Solo & teams</dd>
              <p className="text-sm text-ink-500 mt-1">Flexible engagement</p>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/10 to-teal-500/10 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-2xl bg-ink-950 shadow-soft overflow-hidden font-mono text-[13px] leading-6">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-white/40 text-xs">stack.config.js</span>
            </div>
            <pre className="px-5 py-5 overflow-x-auto text-white/80">
{`export const stack = {
  frontend: ["React", "Next.js", "React Native"],
  backend:  ["Node.js", "Postgres", "GraphQL"],
  infra:    ["Docker", "AWS", "CI/CD"],
  applied:  ["OpenAI", "vector search"],
}

export default function ship(idea) {
  return deploy(build(design(idea)))
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
