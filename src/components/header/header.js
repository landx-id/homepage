import * as React from "react"
import PropTypes from "prop-types"
import Box from '@mui/material/Box';
import ResponsiveAppBar from "../navbar/navbar"
import HeaderAlerts from "../HeaderAlerts/HeaderAlerts"
import { SendVersiBuild } from "../../utils/clearCache";

const Header = ({ siteTitle }) => {
  const [widthWindows, setWidthWindows] = React.useState('')
  React.useEffect(() => {
    setWidthWindows(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidthWindows(window.innerWidth)
    })
  }, [widthWindows])

  React.useEffect(() => {
    SendVersiBuild()
  }, [])

  return (
    <Box style={{ position: widthWindows < 1055 ? 'relative' : `fixed`, top: 0, right: 0, left: 0, zIndex: 1030 }}>
      <HeaderAlerts />
      <ResponsiveAppBar />
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
