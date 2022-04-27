import React, { useState } from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box } from "@mui/system"
import PropTypes from "prop-types"
import "./SectionFAQ.scss"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

function AccordionTutorial() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

const SectionFAQ = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container className="container-faq">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="Tutorial">
              <Tab label="Registrasi" {...a11yProps(0)} />
              <Tab label="Verifikasi" {...a11yProps(1)} />
              <Tab label="Pembelian" {...a11yProps(2)} />
              <Tab label="Penarikan" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div style={{ textAlign: "center" }}>
              <iframe
                className="tutorial-faq"
                src="https://www.youtube.com/embed/tXcYeeaYFF0"
                title="Registrasi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div style={{ textAlign: "center" }}>
              <iframe
                className="tutorial-faq"
                src="https://www.youtube.com/embed/YiFxg3oPpPM"
                title="Verifikasi/KYC"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div style={{ textAlign: "center" }}>
              <iframe
                className="tutorial-faq"
                src="https://www.youtube.com/embed/DV36qUZ---4"
                title="Pembelian"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div style={{ textAlign: "center" }}>
              <iframe
                className="tutorial-faq"
                src="https://youtube.com/embed/_HnmLRC2M4Q"
                title="Penarikan"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </TabPanel>
        </Grid>
        <Grid item xs={12} md={6}>
          {AccordionTutorial()}
        </Grid>
      </Grid>
    </Container>
  )
}

export default SectionFAQ
