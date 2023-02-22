/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['gsap']);
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  
  
}

module.exports = nextConfig
module.exports=withTM({})