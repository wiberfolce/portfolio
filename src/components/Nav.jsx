import { useEffect, useState } from 'react'

const links = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#work', label: 'Work' },
  { href: '#tools', label: 'Tools' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-semibold text-ink-950">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-ink-950 text-paper text-sm font-mono">Y</span>
          <span>Yayra</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[15px] text-ink-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink-950 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-ink-950 text-paper text-sm font-medium px-4 py-2 hover:bg-ink-800 transition-colors"
        >
          Start a project
        </a>

        <button
          className="md:hidden grid place-items-center w-9 h-9"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-[1.5px] bg-ink-950 transition-transform ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] bg-ink-950 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] bg-ink-950 transition-transform ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <ul className="container-page py-4 flex flex-col gap-4 text-ink-700">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-ink-950 text-paper text-sm font-medium px-4 py-2"
              >
                Start a project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
