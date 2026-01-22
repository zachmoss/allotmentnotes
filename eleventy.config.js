import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {

  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    templates: {
      feed: {
        permalink: '/posts/feed.xml',
        title: 'ADRT notes'
      },
      tags: false,
      searchIndex: false,
      sitemap: false
    },
    header: {
      logotype: {
        text: 'ADRT notes'
      },
      productName: "",
      organisationName: "Compassion in Dying"
    },
    footer: {
      copyright: {
        text: '© 2026–2027'
      },
      contentLicence: {
        text: "This is a staff blog created by the Compassion in Dying team. Views expressed are not necessarily those of the organisation."
      },
      logo: false,
      meta: {
        items: [
          {
            href: "/posts/feed.xml",
            text: "Subscribe to feed"
          }
        ]
      }
    },
    icons: {
      touch: false,
      shortcut: false,
      mask: false
    },
    themeColor: '#00403a',
    stylesheets: ['/assets/styles.css'],
    titleSuffix: 'ADRT notes from Compassion in Dying',
    url: process.env.GITHUB_ACTIONS && 'https://adrtnotes.compassionindying.org.uk/'
  })

  // Collections
  eleventyConfig.addCollection('post', (collection) => {
    return collection.getFilteredByGlob('app/posts/*.md')
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./app/images')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app'
    },
    pathPrefix: '/'
  }
};
