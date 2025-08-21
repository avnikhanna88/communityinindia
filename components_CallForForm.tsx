import { useState } from "react";

const labels: Record<string, string> = {
  community: "Call for Community",
  venue: "Call for Venue",
  sponsors: "Call for Sponsors",
  speakers: "Call for Speakers",
  mentors: "Call for Mentors",
  judges: "Call for Judges",
};

type Props = {
  type: string;
  community: string;
};

export default function CallForForm({ type, community }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you'd implement your API call (e.g., POST to backend)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-2 text-vibrant">{labels[type]}</h3>
      {submitted ? (
        <p className="text-green-600">Thank you for your submission!</p>
      ) : (
        <>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="mb-2 p-2 rounded border w-full"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="mb-2 p-2 rounded border w-full"
          />
          <textarea
            name="details"
            required
            placeholder={`Tell us about your interest in ${labels[type].toLowerCase()}...`}
            className="mb-2 p-2 rounded border w-full"
            rows={3}
          />
          <button
            type="submit"
            className="bg-vibrant text-white px-4 py-2 rounded hover:bg-accent transition-all w-full"
          >
            Submit
          </button>
        </>
      )}
    </form>
  );
}