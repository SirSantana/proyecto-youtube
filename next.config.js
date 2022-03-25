/** @type {import('next').NextConfig} */
require("dotenv").config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DBNAME: process.env.DBNAME,
  },
};
module.exports = nextConfig;
