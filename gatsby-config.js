module.exports = {
  siteMetadata: {
    title: 'My MDX Blog',
    description: 'This is a random blog thing',
    url: 'https://youtube.com',
    image: '/office.jpg',
    author: 'Paul Bokelman',
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Crimson Text', 'Open Sans', 'Roboto Mono'],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `roboto mono`,
    //       `Crimson Text\:400, 400i, 600, 600i, 700, 700i, 900`,
    //     ],
    //     display: "swap",
    //   },
    // },
    `gatsby-plugin-styled-components`,
  ],
};
