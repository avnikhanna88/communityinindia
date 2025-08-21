type Props = { community: string };

export default function Gallery({ community }: Props) {
  // For demo: static images, replace with dynamic ones per community
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg"
  ];

  return (
    <section className="w-full max-w-4xl my-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="rounded-lg shadow-md object-cover h-40 w-full"
          />
        ))}
      </div>
    </section>
  );
}