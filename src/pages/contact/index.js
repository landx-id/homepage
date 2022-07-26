import * as React from "react"
import { Container, Grid, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const Contact = () => (
  <Layout>
    <Seo title="Kontak PT Numex Teknologi Indonesia" description="LandX (PT Numex Teknologi Indonesia) merupakan platform crowdfunding yang telah berizin dan diawasi oleh OJK " />

    <Container className="menu-mt">
      <Grid item xs={12} md={12}>
        <Typography color="primary" component="h1" className="menu-title">
          Hubungi Kami
        </Typography>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: `3rem` }}>
        <Grid item xs={12} md={6} style={{ marginBottom: `2rem` }}>
          <Typography color="primary" variant="h5" paragraph={true} style={{ fontWeight: `600` }}>
            PT Numex Teknologi Indonesia
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <MailOutlineIcon fontSize="medium" color="primary" />
            </Grid>
            <Grid item xs={11} md={11}>
              <Typography paragraph={true} color="secondary">
                hello@landx.id
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <PhoneInTalkIcon fontSize="medium" color="primary" />
            </Grid>
            <Grid item xs={11} md={11}>
              <Typography paragraph={true} color="secondary">
                (+62) 21 2245 5061
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <WhatsAppIcon fontSize="medium" color="primary" />
            </Grid>
            <Grid item xs={11} md={11}>
              <Typography paragraph={true} color="secondary">
                (+62) 811 956 2878
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <WhatsAppIcon fontSize="medium" color="primary" />
            </Grid>
            <Grid item xs={11} md={11}>
              <Typography paragraph={true} color="secondary">
                (+62) 813 8186 2878
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <WhatsAppIcon fontSize="medium" color="primary" />
            </Grid>
            <Grid item xs={11} md={11}>
              <Typography paragraph={true} color="secondary">
                (+62) 811 1622 878 (Consultant Representative)
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <LocationOnOutlinedIcon fontSize="medium" color="primary" />
            </Grid>
            <Grid item xs={11} md={11}>
              <Typography paragraph={true} color="secondary">
                Italian Walk C.15-16, Mall of Indonesia,
                Jl. Yos Sudarso, RT.18, RT.18/RW.8,
                Kelapa Gading Barat, Kelapa Gading, Kota Jakarta Utara, Jakarta 14240
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className="menu-contact-maps">
          <iframe className="responsive-iframe" title="Maps LandX" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8385216442557!2d106.88995741559607!3d-6.1523756955455955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f54172c3c55b%3A0xaac8e4c79c6ae74!2sLandX!5e0!3m2!1sen!2sid!4v1591602410328!5m2!1sen!2sid"></iframe>
        </Grid>
      </Grid>

    </Container>
  </Layout>
)

export default Contact
