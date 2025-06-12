import type { Asset, Entry, EntrySkeletonType, AssetFile } from 'contentful';
import { getImageUrl } from './utils';

interface ContentfulSys {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  revision: number;
  contentType: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  locale: string;
  space: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  environment: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  publishedAt?: string;
}

export function getAssetUrl(asset?: Asset): string {
  if (!asset?.fields?.file?.url) return '/placeholder.svg';
  const url = asset.fields.file.url;
  return getImageUrl(typeof url === 'string' ? url : url.url);
}

export function getAssetTitle(asset?: Asset): string {
  if (!asset?.fields?.title) return 'Untitled';
  return typeof asset.fields.title === 'string' 
    ? asset.fields.title 
    : 'Untitled';
}

export function getAssetDescription(asset?: Asset): string {
  if (!asset?.fields?.description) return '';
  return typeof asset.fields.description === 'string'
    ? asset.fields.description
    : '';
}

export function getEntryFields<T extends EntrySkeletonType>(entry?: Entry<T>): T['fields'] | null {
  if (!entry?.fields) return null;
  return entry.fields;
}

export function getEntryId(entry?: Entry<any>): string {
  return entry?.sys?.id || '';
}

export function getEntryType(entry?: Entry<any>): string {
  return entry?.sys?.contentType?.sys?.id || '';
}

export function getEntryCreatedAt(entry?: Entry<any>): string {
  return entry?.sys?.createdAt || '';
}

export function getEntryUpdatedAt(entry?: Entry<any>): string {
  return entry?.sys?.updatedAt || '';
}

export function isEntryPublished(entry?: Entry<any>): boolean {
  const sys = entry?.sys as ContentfulSys | undefined;
  return Boolean(sys?.publishedAt);
}

export function getEntryLocale(entry?: Entry<any>): string {
  return entry?.sys?.locale || 'en-US';
}

export function getEntrySpaceId(entry?: Entry<any>): string {
  return entry?.sys?.space?.sys?.id || '';
}

export function getEntryEnvironmentId(entry?: Entry<any>): string {
  return entry?.sys?.environment?.sys?.id || '';
}

export function getEntryRevision(entry?: Entry<any>): number {
  return entry?.sys?.revision || 0;
} 