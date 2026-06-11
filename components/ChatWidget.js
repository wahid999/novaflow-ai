"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m Wahid’s AI Assistant. Ask me about websites, chatbots, pricing, or booking a free demo.",
    },
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (message) => {
    const text = message.toLowerCase();

    if (text.includes("price") || text.includes("cost") || text.includes("pricing")) {
      return "Our packages start from £99. Starter is £99, Business is £199, and Pro is £399.";
    }

    if (text.includes("website")) {
      return "Yes, Wahid can build modern, mobile-friendly websites for local businesses like barbers, restaurants, shops, cleaners, and service providers.";
    }

    if (text.includes("chatbot") || text.includes("ai")) {
      return "Our AI chatbots can answer customer questions, collect leads, explain services, and guide customers to book through WhatsApp.";
    }

    if (text.includes("whatsapp") || text.includes("contact") || text.includes("demo")) {
      return "You can book a free demo on WhatsApp here: +44 7534 993475.";
    }

    return "Thanks for your message. Wahid can help with AI chatbot setup, business websites, and automation. For a free demo, contact us on WhatsApp.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-2xl font-semibold"
      >
        {open ? "Close" : "Chat"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[90vw] bg-white text-black rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-bold text-lg">Wahid AI Assistant</h3>
            <p className="text-sm text-blue-100">Online • Replies instantly</p>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about pricing..."
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-blue-600"
            />

            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-xl font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}