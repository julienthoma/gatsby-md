const { resolve } = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
            html
            fileAbsolutePath
          }
        }
      }
    }
  `);
  const pageData = result.data.allMarkdownRemark.edges;
  createKnowledgePages(createPage, pageData);
};

function createKnowledgePages(createPage, markdownSitesData) {
  markdownSitesData.forEach(({ node }) => {
    const shortFilePath = getPathFromFileName(node.fileAbsolutePath);
    const type = getType(shortFilePath);
    const path = node.frontmatter.path ? node.frontmatter.path : shortFilePath;
    const { title, tags } = node.frontmatter;
    const html = node.html;
    const template = getTemplate(type);

    createPage({
      path,
      component: template,
      context: {
        pathSlug: path,
        markdownTitle: title || path,
        markdownTags: tags || [],
        markdownHtml: html,
        pageType: type,
      },
    });
  });
}

function getPathFromFileName(absolutePath) {
  return absolutePath.split('/pages')[1].split('.md')[0];
}

function getType(shortFilePath) {
  const parts = shortFilePath.split('/');

  if (parts.length === 2) {
    return 'default';
  }

  return parts[1];
}

function getTemplate(type) {
  const markdownSitePathTemplates = {
    knowledge: 'src/templates/knowledge.js',
    default: 'src/templates/default.js'
  };

  let templatePath = markdownSitePathTemplates[type];

  if (!templatePath) {
    console.info(`template for type ${type} not found. Using default template`);
    templatePath = markdownSitePathTemplates['default'];
  }
  
  return  resolve(templatePath);
}
