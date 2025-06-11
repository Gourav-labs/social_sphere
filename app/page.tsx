

import { Suspense } from "react"
import Navigation from "@/components/Navigation"
import { getPageContent } from "@/lib/contentful"
import type { Metadata } from "next"
import HeroCarousel from "@/components/HeroCarousel"
import TextSection from "@/components/TextSection"
import ImageSection from "@/components/ImageSection"
import Footer from "@/components/Footer"

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent()

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    keywords: content.seoKeywords,
}
}

export default async function Home() {
  const content = await getPageContent()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <HeroCarousel slides={content.heroImages || []} />
        </Suspense>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">{
            (content.mainHeading&& content.mainSubheading && content.mainBody)&&<TextSection heading={content.mainHeading} subheading={content.mainSubheading} body={content.mainBody} />}
            
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {(content.featuredImage && content.featuredTitle && content.featuredDescription) && <ImageSection
              image={content.featuredImage}
              title={content.featuredTitle}
              description={content.featuredDescription}
            />}
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

