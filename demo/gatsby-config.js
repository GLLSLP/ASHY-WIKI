const path = require('path')

// const pathPrefix = process.env.KB_BASE_PATH || '/ASHY-WIKI'
const pathPrefix = `/ASHY-WIKI`;
module.exports = {
  // pathPrefix: `/ASHY-WIKI`,
  pathPrefix:`/ASHY-WIKI`,
  siteMetadata: {
    title: `안소혜윤 위키🍑`,
    description: `안소혜윤의 위키입니다`,
    author: `@ashy`,
    icon: `manggom.png`, 
  },
  plugins: [
    {
      resolve: 'gatsby-theme-kb',
      options: {
        contentPath: path.resolve(__dirname, 'content'),
        wikiLinkLabelTemplate: '[[{{ title }}]]',
        getPluginMdx(defaultPluginMdx) {
          defaultPluginMdx.options.gatsbyRemarkPlugins.push({
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          })
          return defaultPluginMdx
        },
      },
    },
    'gatsby-plugin-no-sourcemaps',
  ],
}
