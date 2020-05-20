// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: 'Cooking Documentation, What\'s the Recipe?',
  description:
    'A talk by Victoria Bergquist about VuePress and how can you customize it to fit your needs?',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    globalHashtags: ['romajs', 'vuepress', 'vuejs']
  },
  markdown: {
    anchor: {
      permalink: false
    }
  },
  plugins: {
    'clean-urls': {
      normalSuffix: ''
    }
  }
};
