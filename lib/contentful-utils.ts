import type { Asset, Entry } from 'contentful';
import { getImageUrl } from './utils';

export function getAssetUrl(asset?: Asset): string {
  if (!asset?.fields?.file?.url) return '/placeholder.svg';
  return getImageUrl(asset.fields.file.url);
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

export function getEntryFields<T>(entry?: Entry<T>): T | null {
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
  return entry?.sys?.publishedAt !== undefined;
}

export function getEntryVersion(entry?: Entry<any>): number {
  return entry?.sys?.version || 0;
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

export function getEntryArchivedAt(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedAt || null;
}

export function getEntryArchivedVersion(entry?: Entry<any>): number | null {
  return entry?.sys?.archivedVersion || null;
}

export function getEntryArchivedBy(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.id || null;
}

export function getEntryArchivedByType(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.type || null;
}

export function getEntryArchivedByLinkType(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.linkType || null;
}

export function getEntryArchivedBySpaceId(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.space?.sys?.id || null;
}

export function getEntryArchivedByEnvironmentId(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.environment?.sys?.id || null;
}

export function getEntryArchivedByRevision(entry?: Entry<any>): number | null {
  return entry?.sys?.archivedBy?.sys?.revision || null;
}

export function getEntryArchivedByLocale(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.locale || null;
}

export function getEntryArchivedByVersion(entry?: Entry<any>): number | null {
  return entry?.sys?.archivedBy?.sys?.version || null;
}

export function getEntryArchivedByArchivedAt(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.archivedAt || null;
}

export function getEntryArchivedByArchivedVersion(entry?: Entry<any>): number | null {
  return entry?.sys?.archivedBy?.sys?.archivedVersion || null;
}

export function getEntryArchivedByArchivedBy(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.id || null;
}

export function getEntryArchivedByArchivedByType(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.type || null;
}

export function getEntryArchivedByArchivedByLinkType(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.linkType || null;
}

export function getEntryArchivedByArchivedBySpaceId(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.space?.sys?.id || null;
}

export function getEntryArchivedByArchivedByEnvironmentId(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.environment?.sys?.id || null;
}

export function getEntryArchivedByArchivedByRevision(entry?: Entry<any>): number | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.revision || null;
}

export function getEntryArchivedByArchivedByLocale(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.locale || null;
}

export function getEntryArchivedByArchivedByVersion(entry?: Entry<any>): number | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.version || null;
}

export function getEntryArchivedByArchivedByArchivedAt(entry?: Entry<any>): string | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.archivedAt || null;
}

export function getEntryArchivedByArchivedByArchivedVersion(entry?: Entry<any>): number | null {
  return entry?.sys?.archivedBy?.sys?.archivedBy?.sys?.archivedVersion || null;
} 