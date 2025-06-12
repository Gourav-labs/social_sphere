import { Suspense } from "react"
import HeroCarousel from "@/components/HeroCarousel"
import TextSection from "@/components/TextSection"
import ImageSection from "@/components/ImageSection"
import Footer from "@/components/Footer"
import FAQAccordion from "@/components/ui/Faqaccordion"
import { getPageContent, getServices, getFAQ } from "@/lib/contentful"
import { PageContent } from "@/types/contentful"
import ServiceLayout from "@/components/ServiceLayout"
import { Faq, ServiceEntry } from "@/types/component"

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default async function Home() {
  const content: PageContent = await getPageContent();
  const service: ServiceEntry[] = await getServices();
  const faqResponse: Faq[] = await getFAQ();
  const sampleFAQData: FAQItem[] = faqResponse.map((e: Faq) => ({ ...e.fields, id: Math.random() }));

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <HeroCarousel slides={content?.heroImages || []} />
        </Suspense>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">{
            (content?.mainHeading && content?.mainSubheading && content.mainBody)&&<TextSection heading={content.mainHeading} subheading={content.mainSubheading} body={content.mainBody} />}
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {(content?.featuredImage && content.featuredTitle && content.featuredDescription) && <ImageSection
              image={content.featuredImage}
              title={content.featuredTitle}
              description={content.featuredDescription}
            />}            
          </div>
        </section>

        <section>
          <FAQAccordion 
            data={sampleFAQData}
            title="Help Center"
            subtitle="Get quick answers to common questions about our service."
            contactButtonText="Get Help Now"
            contactLink="https://support.example.com"
            allowMultipleOpen={false}
          />
        </section>
        <section className="py-16 px-4 bg-gray-50">
           <div className="max-w-7xl mx-auto mb-10">
              <TextSection heading="Our Services" />
            </div>
          {service.map((item,idx) => (
            <div key={idx} className="max-w-7xl mx-auto mb-20">
                <ServiceLayout key={item.sys.id} service={item} isReversed={idx%2===0} />      
            </div>
          ))}
        </section> 
      
      </main>
    </div>
  )
}

