import Image from "next/image";
import type { Asset } from "contentful";
import { Button } from "@/components/ui/Button";
import { getAssetUrl, getAssetTitle } from "@/lib/contentful-utils";
import { cn, truncateText } from "@/lib/utils";

interface ImageSectionProps {
  image: Asset;
  title: string;
  description: string;
  className?: string;
  maxDescriptionLength?: number;
  onLearnMore?: () => void;
  onGetStarted?: () => void;
}

export default function ImageSection({ 
  image, 
  title, 
  description, 
  className,
  maxDescriptionLength = 200,
  onLearnMore,
  onGetStarted
}: ImageSectionProps) {
  const imageUrl = getAssetUrl(image);
  const altText = getAssetTitle(image) || title;
  const truncatedDescription = truncateText(description, maxDescriptionLength);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", className)}>
      <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{truncatedDescription}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="primary" 
            onClick={onLearnMore}
            aria-label={`Learn more about ${title}`}
          >
            Learn More
          </Button>
          <Button 
            variant="outline" 
            onClick={onGetStarted}
            aria-label={`Get started with ${title}`}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
