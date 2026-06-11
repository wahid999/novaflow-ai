export default function BarberDemo() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold mb-6">
          Premium Barber Shop
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Modern cuts, beard trims and premium grooming services.
        </p>

        <button className="bg-blue-600 px-8 py-4 rounded-lg font-bold">
          Book Appointment
        </button>
      </section>

      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold">Skin Fade</h3>
            <p className="mt-3 text-gray-300">£20</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold">Beard Trim</h3>
            <p className="mt-3 text-gray-300">£15</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold">Hair & Beard</h3>
            <p className="mt-3 text-gray-300">£30</p>
          </div>
        </div>
      </section>
    </main>
  );
}