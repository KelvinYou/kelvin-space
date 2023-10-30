/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  i18n: {
    locales: ['en', 'zh', 'ms'],
    defaultLocale: 'en',
    pages: {
      "*": ["common"],
    },
  },
  reactStrictMode: true,
}

module.exports = nextTranslate(nextConfig);
