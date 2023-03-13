export const GET_ALL_POSTS = gql`
  query getPosts {
    posts {
      nodes {
        title
        categories {
          nodes {
            name
            categoryId
            slug
          }
        }
        excerpt
        slug
        featuredImage {
          node {
            mediaItemUrl
            altText
            mediaDetails {
              sizes(include: MEDIUM_LARGE) {
                height
                width
                name
              }
            }
          }
        }
      }
    }
  }
`;
