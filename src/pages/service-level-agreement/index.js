import * as React from "react"
import { Container, Grid, Typography, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const ServiceLevelAgreement = () => (
  <Layout>
    	<Seo title="Service Level Agreement" />

			<Container style={{ marginTop:`10rem` }}>
        <Grid xs={12} md={8} className="menu-description" style={{ marginTop:`3rem`}}>
          <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight:`600`, marginTop:`3rem` }}>
            PEMANGKU KEPENTINGAN
          </Typography>
          <Typography color="primary" style={{ fontWeight:`600` }}>
            Internal
          </Typography>
          <Typography color="secondary" paragraph={true}>
            LandX (“Platform” atau “Kami”) dan LandX.id dikelola oleh PT Numex Teknologi Indonesia.
          </Typography>
          
          <Typography color="primary" style={{ fontWeight:`600` }}>
            Eksternal
          </Typography>
          <Typography color="secondary" paragraph={true}>
            “Pengguna” atau “Anda” mengacu kepada pengguna atau pengunjung platform LandX.
          </Typography>

          <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight:`600`, marginTop:`3rem` }}>
            PENDAHULUAN
          </Typography>
          <Typography color="secondary" paragraph={true}>
            Dokumen ini adalah Service Level Agreement (“SLA”) yang menjadi acuan PT Numex Teknologi Indonesia dalam memberikan layanan kepada seluruh pengguna. Harap membaca SLA ini beserta Syarat dan Ketentuan serta Kebijakan Privasi yang memuat hak-hak Anda sebagai pengguna.
          </Typography>
          <Typography color="secondary" paragraph={true}>
            PT Numex Teknologi Indonesia (“Kami”) berhak untuk mengubah ketentuan SLA ini apabila dibutuhkan. Salinan SLA kami dapat diperoleh dengan mengirim email permintaan ke: hello@landx.id
          </Typography>

          <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight:`600`, marginTop:`3rem` }}>
            DESKRIPSI LAYANAN
          </Typography>
          <Typography color="secondary" paragraph={true}>
            Kami merupakan penyedia layanan urun dana melalui penawaran saham berbasis teknologi informasi (equity crowdfunding) untuk mempertemukan Anda dengan penerbit yang akan menerbitkan sahamnya melalui layanan yang Kami miliki. Layanan kami terdiri dari layanan yang dapat digunakan melalui media berikut:
          </Typography>
          <Typography color="secondary" variant="h6" paragraph={true} style={{ fontWeight:`600`, marginTop:`3rem` }}>
            A. Layanan Utama
          </Typography>

          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="sla">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Media</TableCell>
                  <TableCell>Deskripsi</TableCell>
                  <TableCell>Keterangan</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Situs LandX</TableCell>
                    <TableCell>https://landx.id</TableCell>
                    <TableCell>Beroperasi secara terus menerus (24 jam)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Aplikasi Android</TableCell>
                    <TableCell>Aplikasi equity crowdfunding</TableCell>
                    <TableCell>Jam beroperasi 09.00 WIB – 17.00 WIB (Waktu untuk melakukan trading)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Aplikasi Ios</TableCell>
                    <TableCell>Aplikasi equity crowdfunding</TableCell>
                    <TableCell>Jam beroperasi 09.00 WIB – 17.00 WIB (Waktu untuk melakukan trading)</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          
          <Grid sx={{ marginLeft:`2rem` }}>
            <ul style={{ listStyleType:`disc`, color:`#5e798d` }}>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Untuk pelaporan dan pihak yang bertugas pada Layanan Utama No. 1 adalah divisi Customer Service pada LandX.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Untuk pelaporan dan pihak yang bertugas pada Layanan Utama No. 2 adalah divisi Customer Service pada LandX.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Untuk pelaporan dan pihak yang bertugas pada Layanan Utama No. 3 adalah divisi Customer Service pada LandX.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
  </Layout>
)

export default ServiceLevelAgreement
