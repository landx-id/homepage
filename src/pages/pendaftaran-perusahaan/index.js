import * as React from "react"
import { Container, Grid, Typography, Box, Button } from '@mui/material';


import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const CompanyRegistration = () => (
  <Layout>
    	<Seo title="Pendaftaran Perusahaan" />

			<Container className="menu-mt">
				<Grid item xs={12} md={12}>
					<Typography color="primary" className="menu-title">
            Pendaftaran Perusahaan
					</Typography>
          <Typography color="secondary" align="center" style={{ fontWeight:`600`, paddingBottom:`3rem` }}>
            Daftarkan perusahaan Anda untuk mendapatkan modal tambahan dengan listing di LandX.
					</Typography>
				</Grid>

        <Grid item xs={12} md={12}>
				  <Typography color="secondary" align="center" variant="h6" style={{ fontWeight:`600` }}>
            Fee Penerbit
					</Typography>
				</Grid>        

        <Box className="menu-register" style={{ marginTop:`3rem` }}>
          <Grid container p={4}>
            <Grid item xs={12} md={6}>
              <Typography color="primary" paragraph={true} style={{ fontWeight:`600` }}>
                Pendaftaran Kustodian Sentral Efek Indonesia (KSEI)
              </Typography>
              <Typography color="secondary">
                Biaya Pendaftaran (Satu kali)
              </Typography>
              <Typography color="secondary">
                Biaya Tahunan
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color="primary" paragraph={true} className="menu-register-fee">
                Biaya
              </Typography>
              <Typography color="secondary">
                Rp 7.500.000
              </Typography>
              <Typography color="secondary">
                Rp 5.000.000
              </Typography>
            </Grid>
          </Grid>  
        </Box>
        <Box className="menu-register" style={{ marginTop:`0.5rem` }}>
          <Grid container p={4}>
            <Grid item xs={12} md={6}>
              <Typography color="primary" paragraph={true} style={{ fontWeight:`600` }}>
                Bank Kustodian
              </Typography>
              <Typography color="secondary">
                Biaya Tahunan Bank Kustodian
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color="primary" paragraph={true} className="menu-register-fee">
                Biaya
              </Typography>
              <Typography color="secondary">
                0.1% Per Tahun dari Total Dana yang Terkumpul
              </Typography>
            </Grid>
          </Grid>  
        </Box>
        <Box className="menu-register" style={{ marginTop:`0.5rem` }}>
          <Grid container p={4}>
            <Grid item xs={12} md={6}>
              <Typography color="primary" paragraph={true} style={{ fontWeight:`600` }}>
                Biaya Manajemen
              </Typography>
              <Typography color="secondary">
                Biaya yang dikenakan kepada Penerbit selaku pengelola usaha (tidak dibebankan kepada investor)
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color="primary" paragraph={true} className="menu-register-fee">
                Biaya
              </Typography>
              <Typography color="secondary">
                2.5% dari omzet bersih
              </Typography>
            </Grid>
          </Grid>  
        </Box>
        <Box className="menu-register" style={{ marginTop:`0.5rem` }}>
          <Grid container p={4}>
            <Grid item xs={12} md={6}>
              <Typography color="primary" paragraph={true} style={{ fontWeight:`600` }}>
                Biaya Administrasi LandX
              </Typography>
              <Typography color="secondary">
                Biaya administrasi dari jumlah dana yang terkumpul. Penerbit akan mendapatkan:
              </Typography>
              <Grid sx={{ marginLeft:`2rem`, marginTop:`2rem` }}>
                <ul style={{ listStyleType:`disc`, color:`#5e798d` }}>
                  <li>
                    <Typography color="secondary">
                      Sistem Pembayaran melalui Escrow
                    </Typography>
                  </li>
                  <li>
                    <Typography color="secondary">
                      Konsultasi Pitch Deck
                    </Typography>
                  </li>
                  <li>
                    <Typography color="secondary">
                      Kontrak Perjanjian Investasi dengan Investor
                    </Typography>
                  </li>
                  <li>
                    <Typography color="secondary">
                      Compliance Review  
                    </Typography>
                  </li>
                  <li>
                    <Typography color="secondary">
                      Account Manager
                    </Typography>
                  </li>
                  <li>
                    <Typography color="secondary">
                      Sistem Pembayaran Dividen ke Investor
                    </Typography>
                  </li>
                  <li>
                    <Typography color="secondary">
                      Pemeriksaan Anti Money Laundering (AML) dan Know Your Customer
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={{ alignSelf:`center`, marginTop:`2rem` }}>
              <Box style={{ display:`flex`, justifyContent:`center`, alignItems:`center` }}>
                <Button>HUBUNGI KAMI</Button>
              </Box>
            </Grid>
          </Grid>  
        </Box>
        
        
      </Container>
  </Layout>
)

export default CompanyRegistration
