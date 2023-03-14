import { gql } from '@apollo/client';

export const GET_HOME_PAGE = gql`
  query homePage($id: ID = "home") {
    page(id: $id, idType: URI) {
      homePage {
        fieldGroupName
        hero {
          button
          description
          fieldGroupName
          headline
          subheadline
          image {
            altText
            sourceUrl
          }
        }
      }
      seo {
        title
        metaDesc
      }
    }
  }
`;

export const GET_MAIN_MENU = gql`
  query mainMenu($id: ID = "Main Menu") {
    menu(id: $id, idType: NAME) {
      name
      menuItems {
        edges {
          node {
            label
            uri
          }
        }
      }
    }
  }
`;
