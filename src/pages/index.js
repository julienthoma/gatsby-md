import React from 'react';
import Header from '../components/Header';
import { graphql, Link } from 'gatsby';

const Layout = ({ data }) => {
  console.log(data);
  const { edges } = data.allSitePage;
  return (
    <div>
      <Header />
      {edges.map(edge => {
        const { markdownTitle, pathSlug } = edge.node.context;
        return (
          <div key={pathSlug}>
            <Link to={pathSlug}>{markdownTitle}</Link>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query HomepageQuery {
    allSitePage(filter: {context: {pageType: {ne: null}}}) {
      edges {
        node {
          id
          context {
            pathSlug
            markdownTitle
          }
        }
      }
    }
  }
`;

export default Layout;
