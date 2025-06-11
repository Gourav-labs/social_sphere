"use client"
import { Suspense, useEffect, useState } from "react"
import { getPageContent, getServices } from "@/lib/contentful"
import type { Metadata } from "next"
import HeroCarousel from "@/components/HeroCarousel"
import TextSection from "@/components/TextSection"
import ImageSection from "@/components/ImageSection"
import Footer from "@/components/Footer"
import FAQAccordion from "@/components/ui/Faqaccordion"
import { PageContent } from "@/types/contentful"
import ServiceLayout from "@/components/ServiceLayout"
import { ServiceEntry } from "@/types/component"

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const sampleFAQData: FAQItem[] = [
  {
    id: 1,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return, and we'll provide you with a prepaid shipping label. Refunds are processed within 5-7 business days after we receive your return."
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping options are also available at checkout. International shipping times vary by destination, usually 7-14 business days."
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination. Please note that international customers are responsible for any customs duties, taxes, or fees imposed by their country."
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or directly with the shipping carrier. You'll also receive updates via email as your package moves through the delivery process."
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. For large orders, we also offer payment plans through Klarna and Afterpay."
  },
  {
    id: 6,
    question: "How do I contact customer support?",
    answer: "You can reach our customer support team through multiple channels: email us at support@company.com, call us at 1-800-123-4567 (Monday-Friday, 9 AM-6 PM EST), or use our live chat feature on the website. We typically respond to emails within 24 hours."
  }
];



export default function Home() {
  const [content, setContent] = useState<PageContent>();
  const [service, setService] = useState<ServiceEntry[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const [dataResponse, serviceResponse] = await Promise.all([getPageContent(), getServices()])
      setContent(dataResponse);
      setService(serviceResponse)
    }
    fetchContent();
  },[])

  console.log(content, service, '111');

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
          <div className="max-w-7xl mx-auto">
            {service.map((item,idx) => (
              <ServiceLayout key={item.sys.id} service={item} isReversed={idx%2===0} />      
            ))}
          </div>
        </section>
     
      </main>
    </div>
  )
}

