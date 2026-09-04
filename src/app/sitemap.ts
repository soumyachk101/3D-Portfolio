import { MetadataRoute } from 'next';
import { categories, certificates } from '../data/certificates';

export default function sitemap(): MetadataRoute.Sitemap {
 const SITE = 'https://chksoumya.in';
 const now = new Date();

 const home: MetadataRoute.Sitemap[number] = {
 url: `${SITE}/`,
 lastModified: now,
 changeFrequency: 'weekly',
 priority: 1.0,
 };

 const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
 url: `${SITE}/certificates/${cat.id}/`,
 lastModified: now,
 changeFrequency: 'weekly',
 priority: 0.8,
 }));

 // All certificate pages for long-tail SEO (including internships)
 const certRoutes: MetadataRoute.Sitemap = certificates.map((cert) => {
 const certDate = new Date(`${cert.date}-01-01`);
 return {
 url: `${SITE}/certificates/${cert.id}/`,
 lastModified: certDate,
 changeFrequency: 'monthly',
 priority: 0.6,
 };
 });

 // Add the HTML sitemap page
 const sitemapPage: MetadataRoute.Sitemap[number] = {
 url: `${SITE}/sitemap`,
 lastModified: now,
 changeFrequency: 'weekly',
 priority: 0.5,
 };

 return [home, sitemapPage, ...categoryRoutes, ...certRoutes];
}
