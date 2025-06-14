"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getImageUrl } from "@/lib/utils";
import { HeroCarouselProps } from "@/types/component";

const getImageUrlLocal = getImageUrl;
export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const fallbackSlides = [
    {
      fields: {
        title: "Innovation at Scale",
        file: { url: "" },
      },
    },
    {
      fields: {
        title: "Digital Transformation",
        file: { url: "" },
      },
    },
    {
      fields: {
        title: "Future-Ready Solutions",
        file: { url: "" },
      },
    },
  ];

  const displaySlides = slides.length > 0 ? slides : fallbackSlides;

  useEffect(() => {
    if (!isAutoPlaying || displaySlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displaySlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, displaySlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + displaySlides.length) % displaySlides.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % displaySlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (displaySlides.length === 0) {
    return (
      <div className="relative h-96 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No carousel images available</p>
      </div>
    );
  }

  return (
    <section className="relative h-[300px] md:h-[40vh] lg:h-[60vh]">
      <div className="relative h-full">
        {displaySlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide?.fields?.file?.url ? (
              <Image
                src={getImageUrlLocal(slide?.fields?.file?.url as string)}
                alt={
                  typeof slide?.fields?.title === "string"
                    ? slide.fields.title
                    : `Slide ${index + 1}`
                }
                fill
                className="md:object-contain object-center xl:object-top max-md:h-[300px]"
                priority={index === 0}
                sizes="100vw"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {`${slide.fields.title}` || "Welcome to SocialSphere"}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                      Transforming businesses through innovative technology
                      solutions
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {displaySlides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl cursor-pointer bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl cursor-pointer bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </>
      )}

      {displaySlides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {displaySlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
