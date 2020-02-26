const path = require('path');

const ROOT = process.cwd();

const config = {
  // Your website's name, used for favicon meta tags
  site_name: 'Static Site Boilerplate',

  // Your website's description, used for favicon meta tags
  site_description: 'A modern boilerplate for static website development',

  // Your website's URL, used for sitemap
  site_url: 'http://staticsiteboilerplate.com',

  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width,initial-scale=1',

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, '/src/assets/favicon.png'),

  // Local development URL
  dev_host: 'localhost',

  // Local development port
  dev_port: process.env.PORT || 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
};

module.exports = config;
