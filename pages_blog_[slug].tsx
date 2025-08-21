import { useRouter } from "next/router";

const posts: any = {
  welcome: {
    title: "Welcome to the Community Blog",
    content: "Kickstart your journey in the community hub. Here you'll find news, updates, and inspiring stories from all our communities!"
  },
  "devops-tips": {
    title: "Top DevOps Tips",
    content: "Streamline your workflow with these practical tips for DevOps teams. Stay tuned for regular updates."
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return <p className="text-center mt-10">Post not found.</p>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center py-10 bg-white">
      <article className="max-w-2xl w-full bg-accent/10 rounded-xl p-8 shadow">
        <h1 className="text-3xl font-bold text-vibrant mb-4">{post.title}</h1>
        <p className="text-lg text-gray-800">{post.content}</p>
      </article>
    </main>
  );
}