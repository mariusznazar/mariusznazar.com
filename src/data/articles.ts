import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './site';

export type ArticleEntry = CollectionEntry<'articles'>;

export function articleSlug(entry: ArticleEntry): string {
  const slug = entry.id.split('/').at(-1);
  if (!slug) throw new Error(`Invalid article id: ${entry.id}`);
  return slug;
}

export async function articlesFor(locale: Locale): Promise<ArticleEntry[]> {
  const entries = await getCollection('articles', ({ data }) => data.locale === locale);
  return entries.sort((a, b) => b.data.order - a.data.order);
}

export async function articleRoutes(locale: Locale) {
  const entries = await getCollection('articles');
  return entries.filter((entry) => entry.data.locale === locale).map((entry) => {
    const counterpart = entries.find((candidate) =>
      candidate.data.key === entry.data.key && candidate.data.locale !== locale);
    if (!counterpart) throw new Error(`Missing translation for article ${entry.data.key}`);
    return { params: { slug: articleSlug(entry) }, props: { entry, counterpart } };
  });
}
