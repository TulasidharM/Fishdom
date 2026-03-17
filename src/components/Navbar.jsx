const links = [
  { label: 'Setups', href: '#setups' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="text-xl font-semibold tracking-tight text-ocean-700 dark:text-cyan-300">
          Fishdom
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex dark:text-slate-200">
            {links.map((link) => (
              <li key={link.label}>
                <a className="transition hover:text-ocean-600 dark:hover:text-cyan-300" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-ocean-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
