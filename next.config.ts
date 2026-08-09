import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 poweredByHeader: false,
 trailingSlash: true,
 images: {
 formats: ['image/avif', 'image/webp'],
 minimumCacheTTL: 31536000,
 dangerouslyAllowSVG: false,
 },
 experimental: {
 inlineCss: true,
 },
 async headers() {
 return [
 {
 source: '/(.*)',
 headers: [
 {
 key: 'X-Content-Type-Options',
 value: 'nosniff',
 },
 {
 key: 'X-Frame-Options',
 value: 'DENY',
 },
 {
 key: 'X-XSS-Protection',
 value: '1; mode=block',
 },
 {
 key: 'Referrer-Policy',
 value: 'strict-origin-when-cross-origin',
 },
 {
 key: 'Strict-Transport-Security',
 value: 'max-age=63072000; includeSubDomains; preload',
 },
 {
 key: 'Cross-Origin-Opener-Policy',
 value: 'same-origin',
 },
 {
 key: 'X-Robots-Tag',
 value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
 },
 ],
 },
 ];
 },
};

export default nextConfig;
