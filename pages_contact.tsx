import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-vibrant to-accent">
      <div className="bg-white/90 p-8 rounded-xl shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-vibrant mb-4">Contact Us</h1>
        {sent ? (
          <p className="text-green-600 text-lg">Thank you for contacting us!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input required type="text" placeholder="Your Name" className="p-3 rounded border" />
            <input required type="email" placeholder="Your Email" className="p-3 rounded border" />
            <textarea required placeholder="Your Message" className="p-3 rounded border" rows={5} />
            <button className="bg-vibrant text-white py-3 rounded font-bold hover:bg-accent transition-all">
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}