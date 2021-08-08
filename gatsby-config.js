module.exports = {
  siteMetadata: {
    siteUrl: "https://woong-jae.netlify.app",
    title: "햣 블로그",
    description: "Jihae의 기술 블로그",
    author: "Jihae Na",
    socials: {
      email: "njnjh0317@gmail.com",
      github: "njh0317",
      instagram: "n___aj22"
    },
    categories: [
      {
        name: "Blog",
        slug: "blog",
        color: "#0c9ee4",
      },
      {
        name: "Front",
        slug: "front",
        color: "#f7615f",
      },
      {
        name: "Algorithm",
        slug: "algorithm",
        color: "#ffa22b",
      },
    ],
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "G-9E8MSQHQBY", // Google Analytics / GA
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     // gtagConfig: {
    //     //   optimize_id: "OPT_CONTAINER_ID",
    //     //   anonymize_ip: true,
    //     //   cookie_expires: 0,
    //     // },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
          name: "content",
          path: `${__dirname}/content/`
      }
    },  
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "햣 블로그 by woong-jae",
    //     short_name: "햣 블로그",
    //     start_url: "/",
    //     background_color: "##25292e",
    //     theme_color: "##25292e",
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: "standalone",
    //     icon: "src/images/icon.png", // This path is relative to the root of the site.
    //     // An optional attribute which provides support for CORS check.
    //     // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    //     // Any invalid keyword or empty string defaults to `anonymous`
    //     crossOrigin: `use-credentials`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans+KR\:100,300,400,500,700,900`,
          `Roboto+Mono\:100,300,400,500,700,900`
          ],
        display: "swap",
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
  ],
};