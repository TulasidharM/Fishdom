function Contact() {
  return (
    <section id="contact" className="pb-16">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-cyan-100 bg-white px-6 py-10 shadow-soft">
        <h2 className="text-2xl font-bold md:text-3xl">Contact Us</h2>
        <p className="mt-2 text-slate-600">Tell us about your dream aquarium and we will get back to you soon.</p>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-ocean-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-ocean-500"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-ocean-500"
          />
          <button
            type="submit"
            className="rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
