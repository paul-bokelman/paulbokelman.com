module.exports = {
  siteMetadata: {
    title: "Paul Bokelman's Blog",
    description: "Paul Bokelman's Blog",
    url: "https://paulbokelman.com",
    author: "Paul Bokelman",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Crimson Text", "Open Sans", "Roboto Mono"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `roboto mono`,
    //       `Crimson Text\:400, 400i, 600, 600i, 700, 700i, 900`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
    `gatsby-plugin-styled-components`,
  ],
};
