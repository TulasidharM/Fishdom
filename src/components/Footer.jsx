function Footer() {
  return (
    <footer className="border-t border-cyan-100 bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Fishdom</p>
        <p>All-in-one aquarium setups & maintenance.</p>
      </div>
    </footer>
  )
}

export default Footer
