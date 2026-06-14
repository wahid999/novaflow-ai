import WhatsAppButton from "../../components/WhatsAppButton.js";
import BarberChatWidget from "../../components/BarberChatWidget.js";

export default function BarberDemo() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          Premium Barber Shop
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Modern cuts, beard trims and premium grooming services.
        </p>

        <a
          href="https://wa.me/447534991475"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 px-8 py-4 rounded-lg font-bold"
        >
          Book Appointment
        </a>
      </section>

      {/* Services */}
      <section className="px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">
              Skin Fade
            </h3>
            <p className="text-2xl text-gray-300">
              £20
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">
              Beard Trim
            </h3>
            <p className="text-2xl text-gray-300">
              £15
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">
              Hair & Beard Package
            </h3>
            <p className="text-2xl text-gray-300">
              £30
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-8 py-20 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Why Choose Us?
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          Professional barbers, modern styles, premium products,
          and excellent customer service. Book your appointment
          today and experience the difference.
        </p>
      </section>

      {/* Contact */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="mb-4">
          WhatsApp: +44 7534 991475
        </p>

        <a
          href="https://wa.me/447534991475"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 px-8 py-4 rounded-lg font-bold inline-block"
        >
          Chat on WhatsApp
        </a>
      </section>

      <WhatsAppButton />
      <BarberChatWidget />

    </main>
  );
}