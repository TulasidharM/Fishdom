const heroImage =
  'https://images.unsplash.com/photo-1520302654189-c4f8f3f8d8b7?auto=format&fit=crop&w=1400&q=80'

function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center" id="home">
      <div>
        <p className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ocean-700 shadow-sm dark:bg-slate-800 dark:text-cyan-300">
          Fishdom Aquarium Studio
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          Fishdom – Your All-in-One Aquarium Solution
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
          Fishdom helps you build your dream aquarium with complete setup kits, beautiful aquascaping, and reliable
          maintenance services for homes and offices.
        </p>
        <a
          href="#setups"
          className="mt-8 inline-flex rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ocean-700"
        >
          Explore Setups
        </a>
      </div>
      <div className="relative">
        <img
          src={heroImage}
          alt="Stylish home aquarium with tropical fish"
          className="h-[360px] w-full rounded-3xl object-cover shadow-soft"
        />
      </div>
    </section>
  )
}

export default Hero
