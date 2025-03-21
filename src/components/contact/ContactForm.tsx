"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        data-testid="name-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        data-testid="email-input"
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-2 border rounded"
        data-testid="message-textarea"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" data-testid="submit-button">
        Send
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}
