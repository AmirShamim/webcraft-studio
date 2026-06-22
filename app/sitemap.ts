import { MetadataRoute } from 'next';
import { getAllInsightSlugs } from '@/lib/pseo-data';
import { getAllVerticalAutomationSlugs } from '@/lib/vertical-automation-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alastoora.tech';

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/whatsapp-automation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // PSEO Insight Pages — auto-generated from data config
  const insightSlugs = getAllInsightSlugs();
  const insightPages: MetadataRoute.Sitemap = insightSlugs.map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const verticalAutomationPages: MetadataRoute.Sitemap = getAllVerticalAutomationSlugs().map((slug) => ({
    url: `${baseUrl}/whatsapp-automation/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...corePages, ...verticalAutomationPages, ...insightPages];
}
