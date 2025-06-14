import { PageContent } from "@/types/contentful"
import { createClient } from "contentful"
import type { Asset } from "contentful"


const getContentfulClient = () => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

  if (!spaceId || !accessToken) {
    console.warn("Contentful credentials are missing. Using fallback content.")
    return null
  }

  try {
    return createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  } catch (error) {
    console.error("Failed to create Contentful client:", error)
    return null
  }
}

const fallbackContent: PageContent = {
  seoTitle: "SocialSphere Solutions - Leading Digital Innovation",
  seoDescription:
    "Transform your business with cutting-edge technology solutions. Expert web development, AI integration, and digital transformation services.",
  seoKeywords: "web development, AI solutions, digital transformation, technology consulting",
  mainHeading: "Transform Your Business with Innovation",
  mainSubheading: "Leading Technology Solutions",
  mainBody: "We deliver cutting-edge technology solutions that drive growth and innovation for businesses worldwide.",
  heroImages: [],
  featuredImage: null,
  featuredTitle: "Our Expertise",
  featuredDescription: "Comprehensive solutions tailored to your needs",
}

export async function getPageContent(): Promise<PageContent> {
  const client = getContentfulClient();
  if (!client) return fallbackContent;

  try {
    const entries = await client.getEntries({ content_type: "landingPage", limit: 1 });
  
    if (entries.items.length === 0) return fallbackContent;

    const entry:PageContent = entries.items[0].fields;
    return {
      seoTitle: entry.seoTitle ?? fallbackContent.seoTitle,
      seoDescription: entry.seoDescription ?? fallbackContent.seoDescription,
      seoKeywords: entry.seoKeywords ?? fallbackContent.seoKeywords,
      mainHeading: entry.mainHeading ?? fallbackContent.mainHeading,
      mainSubheading: entry.mainSubheading ?? fallbackContent.mainSubheading,
      mainBody: entry.mainBody ?? fallbackContent.mainBody,
      heroImages: entry.heroImages ?? [],
      featuredImage: entry.featuredImage ?? null,
      featuredTitle: entry.featuredTitle ?? fallbackContent.featuredTitle,
      featuredDescription: entry.featuredDescription ?? fallbackContent.featuredDescription,
    };
  } catch (error) {
    console.error("Error fetching content from Contentful:", error);
    return fallbackContent;
  }
}

export async function getHeroImages(): Promise<Asset[]> {
  const client = getContentfulClient()

  if (!client) {
    return []
  }

  try {
    const entries = await client.getEntries({
      content_type: "landingPage",
    })

    return entries.items.map((item) => item.fields.image as Asset).filter(Boolean)
  } catch (error) {
    console.error("Error fetching hero images:", error)
    return []
  }
}

export async function getServices(): Promise<any> {
  const client = getContentfulClient();
  if (!client) {
    return [];
  }
  try {
    const entries = await client.getEntries({
      content_type: "services",
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching services", error);
    return [];
  }
}
export async function getFAQ(): Promise<any> {
  const client = getContentfulClient();
  if (!client) {
    return [];
  }
  try {
    const entries = await client.getEntries({
      content_type: "question",
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching services", error);
    return [];
  }
}
