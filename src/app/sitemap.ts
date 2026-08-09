import { MetadataRoute } from 'next';
import { categories, publicCertificates } from '../data/certificates';

export default function sitemap(): MetadataRoute.Sitemap {
 const SITE = 'https://chksoumya.in';
 const today = new Date();

 const home: MetadataRoute.Sitemap[number] = {
 url: `${SITE}/`,
 lastModified: today,
 changeFrequency: 'weekly',
 priority: 1.0,
 };

 const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
 url: `${SITE}/certificates/${cat.id}/`,
 lastModified: today,
 changeFrequency: 'weekly',
 priority: 0.8,
 }));

 // 41 individual certificate pages for long-tail SEO
 const certRoutes: MetadataRoute.Sitemap = publicCertificates.map((cert) => ({
 url: `${SITE}/certificates/${cert.id}/`,
 lastModified: today,
 changeFrequency: 'monthly',
 priority: 0.6,
 }));

 return [home, ...categoryRoutes, ...certRoutes];
}
