"use client";

import { useEffect, useRef, useState } from "react";

export default function BarberChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 Welcome to Premium Barber Shop. I’m your booking assistant. What service would you like today?\n\n1. Skin Fade (£20)\n2. Standard Haircut (£15)\n3. Beard Trim (£15)\n4. Hair & Beard (£30)",
    },
  ]);

  const [input, setInput] = useState("");
  const [booking, setBooking] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const getReply = (message) => {
    const text = message.toLowerCase();

    if (text.includes("price") || text.includes("cost")) {
      return "Here are our prices:\n\nSkin Fade: £20\nStandard Haircut: £15\nBeard Trim: £15\nHair & Beard: £30\nKids Haircut: £12";
    }

    if (!booking.service) {
      let selectedService = "";

      if (text.includes("skin") || text.includes("fade") || text === "1") {
        selectedService = "Skin Fade";
      } else if (text.includes("standard") || text.includes("haircut") || text === "2") {
        selectedService = "Standard Haircut";
      } else if (text.includes("beard") || text === "3") {
        selectedService = "Beard Trim";
      } else if (text.includes("hair") && text.includes("beard") || text === "4") {
        selectedService = "Hair & Beard Package";
      }

      if (selectedService) {
        setBooking((prev) => ({ ...prev, service: selectedService }));
        return `Great choice 👍 ${selectedService} selected.\n\nWhat day would you like to book?\nExample: Today, Tomorrow, Friday, or 25 June.`;
      }

      return "Please choose a service:\n\n1. Skin Fade (£20)\n2. Standard Haircut (£15)\n3. Beard Trim (£15)\n4. Hair & Beard (£30)";
    }

    if (!booking.date) {
      setBooking((prev) => ({ ...prev, date: message }));
      return "Perfect. What time would you prefer?\n\nAvailable times:\n10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm";
    }

    if (!booking.time) {
      setBooking((prev) => ({ ...prev, time: message }));
      return "Great. What is your name?";
    }

    if (!booking.name) {
      setBooking((prev) => ({ ...prev, name: message }));
      return "Thanks. Please share your phone number.";
    }

    if (!booking.phone) {
      const finalBooking = {
        ...booking,
        phone: message,
      };

      setBooking(finalBooking);

      const whatsappMessage = `Hi, I would like to book an appointment.

Service: ${finalBooking.service}
Date: ${finalBooking.date}
Time: ${finalBooking.time}
Name: ${finalBooking.name}
Phone: ${finalBooking.phone}`;

      const whatsappUrl = `https://wa.me/447534991475?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      return `Thank you ${finalBooking.name} ✅\n\nYour booking request is ready:\n\nService: ${finalBooking.service}\nDate: ${finalBooking.date}\nTime: ${finalBooking.time}\nPhone: ${finalBooking.phone}\n\nPlease click the green WhatsApp button on the left side to confirm your booking.`;
    }

    return "Your booking request is already prepared. Please confirm it on WhatsApp.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = getReply(input);

    setMessages((prev) => [
      ...prev,
      userMessage,
      { sender: "bot", text: botReply },
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
        <div className="fixed bottom-24 right-6 z-50 w-[370px] max-w-[90vw] bg-white text-black rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-yellow-600 text-white p-4">
            <h3 className="font-bold text-lg">Barber AI Receptionist</h3>
            <p className="text-sm text-yellow-100">
              Online • Takes booking requests
            </p>
          </div>

          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`whitespace-pre-line px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
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
              placeholder="Type your reply..."
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