"use client"
import { Suspense, useEffect, useState } from "react"
import { getFAQ, getPageContent, getServices } from "@/lib/contentful"
import type { Metadata } from "next"
import HeroCarousel from "@/components/HeroCarousel"
import TextSection from "@/components/TextSection"
import ImageSection from "@/components/ImageSection"
import Footer from "@/components/Footer"
import FAQAccordion from "@/components/ui/Faqaccordion"
import { PageContent } from "@/types/contentful"
import ServiceLayout from "@/components/ServiceLayout"
import { Faq, ServiceEntry } from "@/types/component"

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}


export default function Home() {
  const [content, setContent] = useState<PageContent>();
  const [service, setService] = useState<ServiceEntry[]>([]);
  const [sampleFAQData, setSampleFAQData] = useState<FAQItem[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const [dataResponse, serviceResponse, faqResponse] = await Promise.all([getPageContent(), getServices(), getFAQ()])
      setContent(dataResponse);
      setService(serviceResponse);


      const val=faqResponse.map((e:Faq)=>{return {...e.fields,id:Math.random()}})
      setSampleFAQData(val);
    }
    fetchContent();
  },[])

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

