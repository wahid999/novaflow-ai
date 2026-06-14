"use client";

import { useState } from "react";

export default function BarberBookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("Skin Fade");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    const message = `Hi, I would like to book an appointment.

Name: ${name}
Service: ${service}
Date: ${date}
Time: ${time}`;

    const whatsappUrl = `https://wa.me/447534991475?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="px-8 py-20 bg-gradient-to-b from-black via-slate-950 to-black text-center" id="booking">
      <h2 className="text-5xl font-bold mb-6 text-white">
        Book Appointment
      </h2>

      <p className="text-gray-300 mb-10">
        Fill in your details and confirm your booking on WhatsApp.
      </p>

      <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-2xl border-2 border-yellow-500 shadow-2xl space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-4 rounded-lg bg-white text-black border border-gray-300 outline-none focus:border-yellow-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="w-full p-4 rounded-lg bg-white text-black border border-gray-300 outline-none focus:border-yellow-500"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>Standard Haircut</option>
          <option>Skin Fade</option>
          <option>Beard Trim</option>
          <option>Hair & Beard Package</option>
          <option>Kids Haircut</option>
          <option>Luxury Grooming</option>
        </select>

        <input
          type="date"
          className="w-full p-4 rounded-lg bg-white text-black border border-gray-300 outline-none focus:border-yellow-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="w-full p-4 rounded-lg bg-white text-black border border-gray-300 outline-none focus:border-yellow-500"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          onClick={handleBooking}
          className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-lg font-bold text-white"
        >
          Confirm on WhatsApp
        </button>
      </div>
    </section>
  );
}