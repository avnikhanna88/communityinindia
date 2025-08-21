import { useRouter } from "next/router";
import Gallery from "../../components/Gallery";
import CallForForm from "../../components/CallForForm";

const formTypes = [
  "community",
  "venue",
  "sponsors",
  "speakers",
  "mentors",
  "judges"
];

export default function CommunityPage() {
  const router = useRouter();
  const { community } = router.query as { community: string };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold text-vibrant mb-4 capitalize">
        {community?.replace("-", " ")} Community
      </h1>
      <Gallery community={community || ""} />

      <div className="w-full max-w-3xl mt-10">
        <h2 className="text-2xl font-bold mb-4 text-accent">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formTypes.map((type) => (
            <CallForForm key={type} type={type} community={community || ""} />
          ))}
        </div>
      </div>
    </div>
  );
}