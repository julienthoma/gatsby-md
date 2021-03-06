import React from 'react';
import { graphql } from 'gatsby';
import gatsbyTheme from '../markdown-themes/gatsby-style';
import ReadingLayout from '../layout/reading-layout';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

const Template = ({ data: { mdx } }) => {
  return (
    <ReadingLayout>
      <MDXProvider components={gatsbyTheme}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </ReadingLayout>
  );
};

export default Template;

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`;
