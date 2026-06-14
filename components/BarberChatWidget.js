"use client";

import { useEffect, useRef, useState } from "react";

export default function BarberChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 Welcome to Premium Barber Shop. What would you like today? Haircut, skin fade, beard trim, or hair & beard package?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const getReply = (message) => {
    const text = message.toLowerCase();

    if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
      return "Hi 👋 Welcome! Are you looking to book a haircut, skin fade, beard trim, or hair & beard package today?";
    }

    if (text.includes("yes") || text.includes("book") || text.includes("appointment")) {
      return "Great 👍 Please send your name, preferred date, time, and service. Example: My name is Ali, I want a skin fade today at 5pm.";
    }

    if (text.includes("skin fade") || text.includes("fade")) {
      return "Skin Fade is £20 and usually takes 30–40 minutes. Would you like to book an appointment?";
    }

    if (text.includes("beard")) {
      return "Beard Trim is £15. Hair & Beard Package is £30. Would you like the full package?";
    }

    if (text.includes("haircut")) {
      return "Standard Haircut is £15. Skin Fade is £20. Which one would you like to book?";
    }

    if (text.includes("price") || text.includes("cost") || text.includes("how much")) {
      return "Here are our prices: Standard Haircut £15, Skin Fade £20, Beard Trim £15, Hair & Beard Package £30, Kids Haircut £12.";
    }

    if (text.includes("open") || text.includes("hours") || text.includes("time")) {
      return "We are open Monday to Saturday from 9 AM to 7 PM. Sunday is closed.";
    }

    if (text.includes("pm") || text.includes("am") || text.includes("today") || text.includes("tomorrow")) {
      return "Thanks. Please confirm your name and service, then we can confirm your booking on WhatsApp: +44 7534 991475.";
    }

    if (text.includes("location") || text.includes("address")) {
      return "This is a demo barber shop website. For a real shop, we can add the exact address, Google Maps, and directions.";
    }

    return "I can help with prices, services, opening hours, and booking appointments. What service would you like?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: getReply(input) },
    ]);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-4 rounded-full shadow-2xl font-semibold"
      >
        {open ? "Close" : "Barber AI"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[90vw] bg-white text-black rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-yellow-600 text-white p-4">
            <h3 className="font-bold text-lg">Barber AI Assistant</h3>
            <p className="text-sm text-yellow-100">Online • Booking help available</p>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-yellow-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about haircut prices..."
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-yellow-600"
            />

            <button
              onClick={handleSend}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 rounded-xl font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}