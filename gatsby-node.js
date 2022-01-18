exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-read-pdf/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// Generally you create redirects while creating pages.
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: '/project/#/[code]', toPath: '/project/[code]', isPermanent: true })
}