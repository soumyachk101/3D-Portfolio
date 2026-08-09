import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
 return {
 rules: [
 {
 userAgent: '*',
 allow: '/',
 disallow: ['/api/', '/_next/', '/dashboard/'],
 },
 {
 userAgent: 'Googlebot',
 allow: '/',
 crawlDelay: 0,
 },
 ],
 sitemap: 'https://chksoumya.in/sitemap.xml',
 host: 'https://chksoumya.in',
 };
}
