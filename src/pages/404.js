import * as React from "react"
import { ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { themeconfig } from '../assets/styling/themeConfig';
import { navigate } from 'gatsby';

import Seo from "../components/seo/seo"
import "../assets/styling/cssReset.scss"

const theme = themeconfig

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Seo title="404: Not found" />
    <Container>
      <Box style={{ height: `100vh`, display: `flex` }}>
        <Grid item xs={12} md={12} align="center" style={{ margin: `auto auto` }}>
          <img
            src="/images/404.webp"
            alt="Page Not found"
          />
          <Typography variant="h6" color="secondary" style={{ fontWeight: `700` }}>
            Oops, Halaman Tidak Ditemukan
          </Typography>
          <Typography color="secondary" style={{ marginBottom: `1rem` }}>
            Maaf, sepertinya kami tidak dapat menemukan halaman yang anda cari.
          </Typography>
          <Button onClick={() => { navigate("/") }} >kembali ke beranda</Button>
        </Grid>
      </Box>
    </Container>
  </ThemeProvider>
)

export default NotFoundPage
