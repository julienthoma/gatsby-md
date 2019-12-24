import React from 'react';
import { graphql } from 'gatsby';

const Template = props => {
  const context = props.data.sitePage.context;
  const { markdownTitle, markdownTags, markdownHtml } = context;
  return (
    <div>
      <h2>Default Template: {markdownTitle}</h2>
      <p>{markdownTags.join(', ')}</p>
      <div
        className="default-template"
        dangerouslySetInnerHTML={{
          __html: markdownHtml,
        }}
      />
    </div>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    sitePage(context: { pathSlug: { eq: $pathSlug } }) {
      context {
        pathSlug
        markdownTags
        markdownTitle
        markdownHtml
      }
    }
  }
`;

export default Template;
