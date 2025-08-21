import Link from "next/link";

const demoPosts = [
  { slug: "welcome", title: "Welcome to the Community Blog", excerpt: "Kickstart your journey in the community hub..." },
  { slug: "devops-tips", title: "Top DevOps Tips", excerpt: "Streamline your workflow with these practical tips..." }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-vibrant mb-6">Community Blog</h1>
      <div className="max-w-2xl w-full space-y-6">
        {demoPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="bg-accent/10 p-6 rounded-xl hover:bg-accent/20 transition-all shadow cursor-pointer">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}