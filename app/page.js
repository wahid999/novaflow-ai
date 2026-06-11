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
          {["Barber Shop AI", "Restaurant AI", "Estate Agent AI", "Cleaning Company AI"].map((item) => (
            <div key={item} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-3">{item}</h3>
              <p className="text-gray-300">Demo chatbot project for local business customer support.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-8 py-20 bg-gray-950 text-center">
        <h2 className="text-4xl font-bold mb-6">Book a Free Demo</h2>
        <p className="text-gray-300 mb-8">
          Want a chatbot or website for your business? Contact me today.
        </p>
        <a
          href="https://wa.me/4475349931475"
          target="_blank"
          className="bg-green-600 px-8 py-4 rounded-lg font-bold inline-block"
        >
          Contact on WhatsApp
        </a>
      </section>
        <WhatsAppButton />
      <ChatWidget />
    </main>
  );
}