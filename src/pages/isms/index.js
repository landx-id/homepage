import * as React from "react"
import { Container, Grid, Typography } from '@mui/material';

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const Isms = () => (
  <Layout>
    	<Seo title="ISMS" />

			<Container style={{ marginTop:`10rem` }}>
				<Grid xs={12} md={12}>
					<Typography color="primary" className="menu-title">
            Kebijakan Information Security Management System (ISMS)
					</Typography>
				</Grid>

        <Grid xs={12} md={8} className="menu-description" style={{ marginTop:`3rem`}}>
          <Typography color="secondary" paragraph={true}>
            Komitmen Kebijakan ISMS diatur sesuai dengan karakteristik layanan khususnya Crowdfunding LandX dan operasional yang digunakan, bisnis perusahaan dengan mempertimbangkan regulasi bisnis dan undang-undang atau persyaratan yang mengatur kewajiban dan keamanan sesuai dengan kontrak yang dipersyaratkan, maupun bilamana terjadi insiden pada organisasi, dan perbaikan sistem kelangsungan bisnis perusahaan.
          </Typography>
          <Typography color="secondary" paragraph={true}>
            Komitmen kebijakan ISMS tersebut adalah sebagai berikut:
          </Typography>
          <Grid sx={{ marginLeft:`2rem` }}>
            <ul style={{ listStyleType:`disc`, color:`#5e798d` }}>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Memenuhi harapan Stakeholder dengan mewujudkan Confidentiality, Integrity dan Availlability informasi melalui implementasi ISO/IEC 27001:2013 ISMS.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Selalu mentaati segala ketentuan dan peraturan terkait keamanan informasi yang berlaku di wilayah Republik Indonesia serta wilayah tempat dilakukannya pekerjaan.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Berjalannya perbaikan yang berkesinambungan terhadap kinerja Sistem Manajemen Keamananan Informasi.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
  </Layout>
)

export default Isms
