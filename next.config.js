// /** @type {import('next').NextConfig} */
// const nextTranslate = require('next-translate-plugin')
// const { i18n } = require('./i18n.json');

// const nextConfig = nextTranslate({
//   i18n,
//   reactStrictMode: true,
// });

// module.exports = nextConfig;


const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate()