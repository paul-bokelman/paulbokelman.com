exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);
  // create paginated pages for posts

  // const postPerPage = 2;

  // const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  actions.createPage({
    path: '/',
    component: require.resolve('./src/templates/allPosts.jsx'),
    context: { data },
  });

  // creates single blogpost
  data.allMdx.edges.forEach((edge) => {
    const { slug } = edge.node.frontmatter;
    const { id } = edge.node;
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/singlePost.jsx'),
      context: { id },
    });
  });
};
