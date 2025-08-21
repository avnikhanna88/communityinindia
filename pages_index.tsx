import Link from "next/link";

const communities = [
  { name: "Designers", slug: "designers" },
  { name: "Devs", slug: "devs" },
  { name: "DevOps", slug: "devops" },
  { name: "Cyber Security", slug: "cyber-security" },
  { name: "Startup", slug: "startup" },
  { name: "Others", slug: "others" }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-vibrant to-accent p-8">
      <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Community Hub
      </h1>
      <p className="mb-8 text-xl text-white/80 max-w-xl text-center">
        A vibrant platform to promote and support diverse communities: designers, devs, devops, cyber security, startups, and more!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {communities.map((c) => (
          <Link key={c.slug} href={`/community/${c.slug}`}>
            <div className="bg-white/80 hover:bg-white rounded-xl p-6 text-center shadow-xl cursor-pointer transition-all">
              <h2 className="text-2xl font-semibold text-vibrant">{c.name}</h2>
              <p className="text-gray-600 mt-2">Explore {c.name} community</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex gap-6 mt-6">
        <Link href="/contact" className="bg-vibrant py-3 px-8 rounded-full text-white font-bold shadow hover:bg-accent transition-all">Contact Us</Link>
        <Link href="/blog" className="bg-white py-3 px-8 rounded-full text-vibrant font-bold shadow hover:bg-accent hover:text-white transition-all">Blog</Link>
      </div>
    </main>
  );
}