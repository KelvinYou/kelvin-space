// /** @type {import('next').NextConfig} */
// const nextTranslate = require('next-translate-plugin')
// const { i18n } = require('./i18n.json');

// const nextConfig = nextTranslate({
//   i18n,
//   reactStrictMode: true,
// });

// module.exports = nextConfig;
const withMDX = require('@next/mdx')()
const nextTranslate = require('next-translate-plugin')
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextTranslate(nextConfig))


// module.exports = nextTranslate()