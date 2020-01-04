import React from 'react';
import { graphql } from 'gatsby';
import gatsbyTheme from '../markdown-themes/gatsby-style';
import ReadingLayout from '../layout/reading-layout';
import { MDXProvider } from '@mdx-js/react';

const Template = ({ children, data }) => {
  return (
    <ReadingLayout>
      <MDXProvider
        components={gatsbyTheme}
      >
        {children}
      </MDXProvider>
    </ReadingLayout>
  );
};

export default Template;

// export const query = graphql`
//   query($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
