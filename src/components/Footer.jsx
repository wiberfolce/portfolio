export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="container-page py-24 sm:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink-950 tracking-tight max-w-lg mx-auto">
          Have a web app or website in mind?
        </h2>
        <p className="mt-4 text-ink-600 max-w-md mx-auto leading-relaxed">
          Tell me what you're building and I'll reply within a day with next steps.
        </p>
        <a
          href="mailto:hello@yayra.dev"
          className="mt-8 inline-flex items-center rounded-full bg-ink-950 text-paper text-sm font-medium px-6 py-3 hover:bg-ink-800 transition-colors"
        >
          hello@yayra.dev
        </a>
      </div>

      <div className="border-t border-line">
        <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-500">
          <p>© {new Date().getFullYear()} Yayra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#solutions" className="hover:text-ink-800">Solutions</a>
            <a href="#work" className="hover:text-ink-800">Work</a>
            <a href="#pricing" className="hover:text-ink-800">Pricing</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
