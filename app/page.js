import WhatsAppButton from "../components/WhatsAppButton";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 border-b border-gray-800 px-8 py-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold">NovaFlow AI</h1>
        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          AI Chatbots & Websites For Local Businesses
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          I help UK businesses get more leads, automate customer support, and save time using smart AI chatbots and modern websites.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Book Free Demo
          </a>
          <a href="#pricing" className="border border-white px-6 py-3 rounded-lg font-semibold">
            View Pricing
          </a>
        </div>
      </section>

      <section id="services" className="px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["AI Chatbot Setup", "Website chatbot, FAQ bot, lead collection and customer support automation."],
            ["Website Development", "Modern, mobile-friendly websites for barbers, restaurants, shops and service businesses."],
            ["Business Automation", "Booking forms, WhatsApp links, customer enquiry flows and simple business systems."],
          ].map(([title, text]) => (
            <div key={title} className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
<section className="py-20 text-center">
  <h2 className="text-5xl font-bold mb-12">Why Choose NovaFlow AI?</h2>

  <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-3">⚡ Fast Delivery</h3>
      <p>Professional websites delivered quickly.</p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-3">🤖 AI Chatbots</h3>
      <p>24/7 automated customer support.</p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-3">📱 Mobile Friendly</h3>
      <p>Perfect on phones, tablets and desktops.</p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-3">💬 WhatsApp Integration</h3>
      <p>Generate leads directly to WhatsApp.</p>
    </div>
  </div>
</section>
      <section id="pricing" className="px-8 py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Starter", "£99", ["1-page website", "Basic chatbot", "WhatsApp button"]],
            ["Business", "£199", ["3-page website", "AI chatbot", "Contact form", "Mobile design"]],
            ["Pro", "£399", ["Full website", "Advanced chatbot", "WhatsApp integration", "1 month support"]],
          ].map(([name, price, features]) => (
            <div key={name} className="bg-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-4xl font-bold my-4">{price}</p>
              <ul className="space-y-3 text-gray-300">
                {features.map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="px-8 py-20">
  <h2 className="text-4xl font-bold text-center mb-12">Demo Projects</h2>

  <div className="grid md:grid-cols-4 gap-6">
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold mb-3">Barber Shop AI Demo</h3>
      <p className="text-gray-300 mb-4">
        Complete barber website with AI chatbot and booking system.
      </p>

      <a
        href="/barber"
        className="bg-blue-600 px-4 py-2 rounded-lg inline-block"
      >
        View Demo
      </a>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold mb-3">Restaurant AI</h3>
      <p className="text-gray-300">
        Restaurant website and ordering assistant.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold mb-3">Estate Agent AI</h3>
      <p className="text-gray-300">
        Property listing and lead generation system.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold mb-3">Cleaning Company AI</h3>
      <p className="text-gray-300">
        Quote requests and booking automation.
      </p>
    </div>
  </div>
</section>

      <section id="contact" className="px-8 py-20 bg-gray-950 text-center">
  <h2 className="text-4xl font-bold mb-6">Book a Free Demo</h2>

  <p className="text-gray-300 mb-8">
    Want a chatbot or website for your business?
    Contact NovaFlow AI today.
  </p>

  <a
    href="https://wa.me/+447534991475"
    target="_blank"
    className="bg-green-600 px-8 py-4 rounded-lg font-bold inline-block"
  >
    Contact on WhatsApp
  </a>
</section>
      <footer
  id="contact"
  className="border-t border-gray-800 mt-20 py-12 text-center"
>
  <h2 className="text-3xl font-bold mb-4">Contact NovaFlow AI</h2>

  <p>Email: wahidhussainturi@gmail.com</p>
  <p>WhatsApp: +44 7534 993475</p>
  <p>Location: London, United Kingdom</p>
</footer>
        <WhatsAppButton />
      <ChatWidget />
    </main>
  );
}