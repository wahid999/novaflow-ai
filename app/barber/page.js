import WhatsAppButton from "../../components/WhatsAppButton.js";
import BarberChatWidget from "../../components/BarberChatWidget.js";

export default function BarberDemo() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 border-b border-gray-800 px-8 py-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold">Premium Barber</h1>
        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Book Now</a>
        </div>
      </nav>

      <section className="pt-40 pb-28 px-6 text-center bg-gradient-to-b from-black via-gray-950 to-black">
        <p className="text-yellow-500 font-semibold mb-4">
          Demo Website Built by NovaFlow AI
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Fresh Cuts, Clean Fades & Premium Grooming
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Book your haircut, skin fade, beard trim or full grooming package with our professional barber team.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/447534991475"
            target="_blank"
            className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded-lg font-bold"
          >
            Book on WhatsApp
          </a>

          <a
            href="#services"
            className="border border-white px-8 py-4 rounded-lg font-bold"
          >
            View Services
          </a>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-6 max-w-4xl mx-auto px-6 py-12 text-center">
        <div>
          <h3 className="text-4xl font-bold text-yellow-500">9AM</h3>
          <p className="text-gray-400">Opening Time</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-500">£15+</h3>
          <p className="text-gray-400">Haircuts From</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-500">24/7</h3>
          <p className="text-gray-400">AI Booking Help</p>
        </div>
      </section>

      <section id="services" className="px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Skin Fade", "Clean modern fade with sharp finishing.", "£20"],
            ["Beard Trim", "Professional beard shape-up and trim.", "£15"],
            ["Hair & Beard Package", "Complete grooming package.", "£30"],
            ["Standard Haircut", "Classic haircut for everyday style.", "£15"],
            ["Kids Haircut", "Friendly service for younger customers.", "£12"],
            ["Luxury Grooming", "Premium cut, beard and styling.", "£40"],
          ].map(([title, desc, price]) => (
            <div
              key={title}
              className="bg-slate-900 p-8 rounded-2xl border border-gray-800 hover:border-yellow-600 transition"
            >
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-gray-300 mb-4">{desc}</p>
              <p className="text-3xl font-bold text-yellow-500">{price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-8 py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold">Quick Cut</h3>
            <p className="text-4xl font-bold my-4 text-yellow-500">£15</p>
            <p className="text-gray-300">Standard haircut with clean finish.</p>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-yellow-600">
            <h3 className="text-2xl font-bold">Most Popular</h3>
            <p className="text-4xl font-bold my-4 text-yellow-500">£30</p>
            <p className="text-gray-300">Haircut + beard trim package.</p>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold">Premium Grooming</h3>
            <p className="text-4xl font-bold my-4 text-yellow-500">£40</p>
            <p className="text-gray-300">Full grooming and styling service.</p>
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Why Choose Premium Barber?
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          We provide clean fades, sharp beard trims, friendly service, and easy WhatsApp booking. Our AI assistant can help customers check prices, opening hours and request appointments instantly.
        </p>
      </section>

      <section id="contact" className="px-8 py-20 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Book Your Appointment
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
  <span className="bg-slate-900 px-4 py-2 rounded-full">
    ✅ Online Booking
  </span>

  <span className="bg-slate-900 px-4 py-2 rounded-full">
    ✅ AI Chatbot
  </span>

  <span className="bg-slate-900 px-4 py-2 rounded-full">
    ✅ WhatsApp Leads
  </span>
</div>

<div className="mt-8 text-yellow-400 text-lg font-semibold">
  ⭐⭐⭐⭐⭐ 4.9/5 Rating | 500+ Happy Customers
</div>

        <p className="text-gray-300 mb-8">
          Message us on WhatsApp with your name, service and preferred time.
        </p>

        <a
          href="https://wa.me/447534991475"
          target="_blank"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold inline-block"
        >
          Book on WhatsApp
        </a>
      </section>

      <footer className="border-t border-gray-800 py-10 text-center text-gray-400">
        <p>Premium Barber Shop Demo by NovaFlow AI</p>
      </footer>

      <WhatsAppButton />
      <BarberChatWidget />
    </main>
  );
}