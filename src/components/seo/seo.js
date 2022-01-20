/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  return (
    <StaticQuery
      query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={data.site.siteMetadata?.title ? `%s | ${data.site.siteMetadata?.title}` : null}
          meta={[
            {
              itemprop: `image`,
              content: data.site.siteMetadata.siteImages,
            },
            {
              name: `thumbnail`,
              content: data.site.siteMetadata.siteImages,
            },
            {
              name: `description`,
              content: description || data.site.siteMetadata.description,
            },
            {
              property: `og:title`,
              content: data.site.siteMetadata.title,
            },
            {
              property: `og:image`,
              content: data.site.siteMetadata.siteImages,
            },
            {
              property: `og:image:width`,
              content: `400`,
            },
            {
              property: `og:image:height`,
              content: `300`,
            },
            {
              property: `og:description`,
              content: description || data.site.siteMetadata.description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata?.author || ``,
            },
            {
              name: `twitter:title`,
              content: data.site.siteMetadata.title,
            },
            {
              name: `twitter:description`,
              content: description || data.site.siteMetadata.description,
            },
            {
              name: "facebook-domain-verification",
              content: "f7kayy7mhaddcpu6xbwde08hlvsdfm",
            },
          ].concat(meta)}
        />
      )}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
