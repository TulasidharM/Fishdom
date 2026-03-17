const setups = [
  {
    name: 'Nano Tank',
    description: 'Compact and elegant setup ideal for apartments and work desks.',
    price: 'Starting at $299',
    image:
      'https://images.unsplash.com/photo-1520637836862-4d197d17c55a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Planted Tank',
    description: 'A lush freshwater ecosystem with curated plants and balanced lighting.',
    price: 'Starting at $499',
    image:
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Reef Tank',
    description: 'Premium saltwater setup designed for vibrant corals and marine life.',
    price: 'Starting at $899',
    image:
      'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Minimal Aquascape',
    description: 'A clean, artistic layout with hardscape-first aesthetics and clarity.',
    price: 'Starting at $549',
    image:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Family Community Tank',
    description: 'Colorful community fish environment that is easy to maintain.',
    price: 'Starting at $649',
    image:
      'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Office Display Tank',
    description: 'A sleek focal-point aquarium crafted for lobbies and meeting spaces.',
    price: 'Starting at $1,199',
    image:
      'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80',
  },
]

function SetupCards() {
  return (
    <section id="setups" className="mx-auto w-full max-w-6xl px-6 py-14">
      <h2 className="text-2xl font-bold md:text-3xl">Aquarium Setups</h2>
      <p className="mt-2 text-slate-600">Choose from thoughtfully designed setups tailored to your space and style.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {setups.map((setup) => (
          <article key={setup.name} className="overflow-hidden rounded-2xl border border-cyan-100 bg-white shadow-soft">
            <img src={setup.image} alt={setup.name} className="h-44 w-full object-cover" />
            <div className="space-y-2 p-5">
              <h3 className="text-lg font-semibold">{setup.name}</h3>
              <p className="text-sm text-slate-600">{setup.description}</p>
              <p className="pt-2 text-sm font-semibold text-ocean-700">{setup.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SetupCards
