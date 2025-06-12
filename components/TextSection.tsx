"use client";
import { TextSectionProps } from "@/types/component";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";



export default function TextSection({ heading, subheading, body }: TextSectionProps) {
    const value=body as unknown as Document
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{heading}</h3>
      {subheading ?? <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">{subheading}</h2>}
      {value && <div className="text-lg md:text-xl text-gray-600 leading-relaxed">{documentToReactComponents(value)}</div>}

    </div>
  )
}
