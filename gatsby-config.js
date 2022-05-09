module.exports = {
  siteMetadata: {
    title: `Investasi Online Aman Berizin OJK Lewat Equity Crowdfunding di LandX`,
    description: `Yuk investasi ke berbagai bisnis potensial mulai dari franchise fnb terbaik, sektor jasa,  dan berbagai bisnis potensial lainnya | Investasi online OJK`,
    author: `@landx`,
    siteUrl: `https://landx.id/`,
    siteImages: `/images/thumbnail_link.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5P9LT23",
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "341440499911698",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://landx.id/`,
      },
      headers: {
        "/kinerja-penerbit/*": [
          'X-Frame-Options: none'
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/images/LandX-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
