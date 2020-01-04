const { resolve } = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  createKnowledgePages(createPage, result.data.allMdx.edges);
};

function createKnowledgePages(createPage, edges) {
  edges.forEach(({ node }) => {
    const shortFilePath = getPathFromFileName(node.fileAbsolutePath);
    const type = getType(shortFilePath);
    const path = node.frontmatter.path ? node.frontmatter.path : shortFilePath;
    const template = getTemplate(type);

    createPage({
      path,
      component: template,
      context: {
        id: node.id,
        pathSlug: path,
        pageType: type,
      },
    });
  });
}

function getPathFromFileName(absolutePath) {
  return absolutePath.split('/content')[1].split('.mdx')[0];
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
    home: 'src/templates/default.js',
    default: 'src/templates/default.js'
  };

  let templatePath = markdownSitePathTemplates[type];

  if (!templatePath) {
    console.info(`template for type ${type} not found. Using default template`);
    templatePath = markdownSitePathTemplates['default'];
  }
  
  return  resolve(templatePath);
}
