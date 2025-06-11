import Image from "next/image";
import type { Asset } from "contentful";

interface ImageSectionProps {
  image: Asset;
  title: string;
  description: string;
}

const getImageUrl = (asset: Asset): string => {
  const url = asset?.fields?.file?.url;
  return typeof url === "string"
    ? url.startsWith("http")
      ? url
      : `https:${url}`
    : "/placeholder.svg?height=400&width=600";
};

const getAltText = (title: unknown, fallback: string): string => {
  if (typeof title === "string") return title;
  if (title && typeof title === "object") {
    const values = Object.values(title as Record<string, string | undefined>);
    return values[0] || fallback;
  }
  return fallback;
};

export default function ImageSection({ image, title, description }: ImageSectionProps) {
  const imageUrl = getImageUrl(image);
  const altText = getAltText(image?.fields?.title, title);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Learn More
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
