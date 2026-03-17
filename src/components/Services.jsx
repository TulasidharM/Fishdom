const services = [
  'Aquarium Setup',
  'Monthly Maintenance',
  'Aquascaping',
  'Fish Health Consultation',
  'Tank Cleaning',
]

function Services() {
  return (
    <section id="services" className="bg-white/70 py-14 dark:bg-slate-900/70">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-2xl font-bold md:text-3xl">Services</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">From first-time installation to expert care, we handle everything.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-white to-ocean-50 p-5 shadow-soft dark:border-slate-700 dark:from-slate-800 dark:to-slate-900"
            >
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
