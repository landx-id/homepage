/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function Seo({ description, lang, meta, title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={description || `Yuk Miliki Bisnis Terbaik Cuma dengan 1 Jutaan`}
      meta={[
        {
          itemprop: `image`,
          content: `/images/thumbnail_link.png`,
        },
        {
          name: `thumbnail`,
          content: `/images/thumbnail_link.png`,
        },
        {
          name: `description`,
          content: description || `Yuk Miliki Bisnis Terbaik Cuma dengan 1 Jutaan`,
        },
        {
          property: `og:title`,
          content: `Yuk Miliki Bisnis Terbaik Cuma dengan 1 Jutaan`,
        },
        {
          property: `og:image`,
          content: `/images/thumbnail_link.png`,
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
          content: description || `Yuk investasi ke berbagai bisnis potensial mulai dari franchise fnb terbaik, sektor jasa,  dan berbagai bisnis potensial lainnya | Investasi online OJK`,
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
          content: `@landx` || ``,
        },
        {
          name: `twitter:title`,
          content: `Yuk Miliki Bisnis Terbaik Cuma dengan 1 Jutaan`,
        },
        {
          name: `twitter:description`,
          content: description || `Yuk investasi ke berbagai bisnis potensial mulai dari franchise fnb terbaik, sektor jasa,  dan berbagai bisnis potensial lainnya | Investasi online OJK`,
        },
        {
          name: `facebook-domain-verification`,
          content: `f7kayy7mhaddcpu6xbwde08hlvsdfm`,
        },
        {
          name: `charset`,
          content: `UTF-8`,
        },
      ].concat(meta)}
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
