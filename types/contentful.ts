import type { Asset, Entry } from "contentful"

export interface LandingPageFields {
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  mainHeading: string
  mainSubheading: string
  mainBody: string
  heroImages: Asset[]
  featuredImage: Asset
  featuredTitle: string
  featuredDescription: string
}

export interface HeroCarouselFields {
  title: string
  image: Asset
  order: number
}


