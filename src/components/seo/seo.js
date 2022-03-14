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
  const TiktokAnalyticsObject = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) }};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{ },ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{ },ttq._t[e]=+new Date,ttq._o=ttq._o||{ },ttq._o[e]=n||{ };var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
    ttq.load('C8K5FU5MP02EUPVMHPUG');
    ttq.page();
  }(window, document, 'ttq');
  `
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title || `Investasi Online Aman Berizin OJK Lewat Equity Crowdfunding di LandX`}
      script={[{
        type: 'text/javascript',
        innerHTML: TiktokAnalyticsObject,
      }]}
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
          name: `title`,
          content: title || `Investasi Online Aman Berizin OJK Lewat Equity Crowdfunding di LandX`,
        },
        {
          name: `description`,
          content: description || `Yuk Miliki Bisnis Terbaik Cuma dengan 1 Jutaan`,
        },
        {
          property: `og:title`,
          content: title || `Investasi Online Aman Berizin OJK Lewat Equity Crowdfunding di LandX`,
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
