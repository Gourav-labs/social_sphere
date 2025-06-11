import { Asset } from "contentful";

export interface TextSectionProps {
  heading: string
  subheading: string
  body?: string
}


export interface ImageSectionProps {
  image: Asset;
  title: string;
  description: string;
  className?: string;
  maxDescriptionLength?: number;
  onLearnMore?: () => void;
  onGetStarted?: () => void;
}

export interface HeroCarouselProps {
  slides: Asset[];
}


export type Theme = 'dark' | 'light';

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export interface ServiceEntry {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    subTitle: string;
    description: {
      nodeType: "document";
      content: RichTextContent[];
      data: object;
    };
    featureImg: Asset;
  };
}

export interface RichTextContent {
  nodeType: string; 
  content: {
    nodeType: string;
    value: string;
    marks: { type: string }[];
    data: object;
  }[];
  data: object;
}

export interface ServiceLayoutProps {
  service: ServiceEntry;
}