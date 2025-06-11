import Image from "next/image";
import { getAssetTitle, getAssetUrl } from "@/lib/contentful-utils";
import { ServiceLayoutProps } from "@/types/component";
import { Button } from "./ui/Button";

interface ServiceLayoutExtendedProps extends ServiceLayoutProps {
  isReversed?: boolean;
}

export default function ServiceLayout({ service, isReversed = false }: ServiceLayoutExtendedProps) {
  const { title, subTitle, description, featureImg } = service.fields;

  const imageUrl = getAssetUrl(featureImg);
  const altText = getAssetTitle(featureImg) || title;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center gap-12`}
    >
      <div className={`md:w-1/2 relative md:h-[441px]  ${isReversed ? "before:-right-60 before:rotate-[-320deg]" : "before:-left-60 before:rotate-[30deg]"
      }`}>
        <Image
          src={imageUrl}
          alt={altText}
          width={800}
          height={600}
          className="rounded-xl shadow-lg object-cover size-full relative z-10"
        />
      </div>

      <div className="md:w-1/2 space-y-4">
        <h3 className="text-xs uppercase text-blue-800  w-fit pb-3 mb-6">{subTitle}</h3>
        <h2 className="text-4xl font-bold text-black uppercase">{title}</h2>
        <div className="prose prose-lg text-gray-700">
          {description.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph.content.map((text, i) => (
                <span key={i}>{text.value}</span>
              ))}
            </p>
          ))}
        </div>
        <span className="block w-12 h-2  pb-1 mb-5"></span>
        <Button  className="animate-bounce-in" >Read More</Button>
      </div>
    </div>
  );
}
