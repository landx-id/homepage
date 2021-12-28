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
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-sla">
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
                    <TableCell align="center" style={{ fontWeight:`700` }}>1</TableCell>
                    <TableCell>Situs LandX</TableCell>
                    <TableCell>https://landx.id</TableCell>
                    <TableCell>Beroperasi secara terus menerus (24 jam)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight:`700` }}>2</TableCell>
                    <TableCell>Aplikasi Android</TableCell>
                    <TableCell>Aplikasi equity crowdfunding</TableCell>
                    <TableCell>Jam beroperasi 09.00 WIB – 17.00 WIB (Waktu untuk melakukan trading)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight:`700` }}>3</TableCell>
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

          <Typography color="secondary" variant="h6" paragraph={true} style={{ fontWeight:`600`, marginTop:`3rem` }}>
            B. Layanan Pendukung
          </Typography>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-sla">
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
                    <TableCell align="center" style={{ fontWeight:`700` }}>1</TableCell>
                    <TableCell>Customer Service Melalui Telepon</TableCell>
                    <TableCell>Telepon: (021) 2245-5061</TableCell>
                    <TableCell>Jam beroperasi 09.00 WIB – 17.00 WIB (Waktu untuk melakukan trading)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight:`700` }}>2</TableCell>
                    <TableCell>Customer Service Melalui Email</TableCell>
                    <TableCell>Email: hello@landx.id</TableCell>
                    <TableCell>Email akan dibalas dalam waktu minimal 2 x 24 jam kerja bergantung dari tingkat permasalahan.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight:`700` }}>3</TableCell>
                    <TableCell>Customer Service Melalui Whatsapp</TableCell>
                    <TableCell>WA: +62 813-8186-2878</TableCell>
                    <TableCell>Jam beroperasi 09.00 WIB – 17.00 WIB (Waktu untuk melakukan trading)</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          
          <Grid sx={{ marginLeft:`2rem` }}>
            <ul style={{ listStyleType:`disc`, color:`#5e798d` }}>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Untuk pelaporan dan pihak yang bertugas pada Layanan Pendukung No. 1 adalah divisi Customer Service pada LandX.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Untuk pelaporan dan pihak yang bertugas pada Layanan Pendukung No. 2 adalah divisi Customer Service pada LandX.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Untuk pelaporan dan pihak yang bertugas pada Layanan Pendukung No. 3 adalah divisi Customer Service pada LandX.
                </Typography>
              </li>
            </ul>
          </Grid>

          <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight:`600`, marginTop:`3rem` }}>
            BATASAN dan RUANG LINGKUP
          </Typography>
          <Typography color="secondary" paragraph={true}>
            Service Level pada dokumen ini tidak berlaku dalam kondisi force majeure sebagaimana didefinisikan di bawah, sesuai pada Rencana Keberlangsungan Keamanan Informasi Sistem LandX Tahun 2020 No. 002/104.1/BOD/DP/2019 Rev. 2.
          </Typography>
          <Typography color="secondary" paragraph={true}>
            Pemenuhan SLA pada kondisi darurat (force majeure) mengikuti standar service level seperti yang ditetapkan dalam Disaster Recovery Plan (DRP) dan Rencana Keberlangsungan Keamanan Informasi Sistem LandX Tahun 2020 No. 002/104.1/BOD/DP/2019 Rev. 2.
          </Typography>
          <Typography color="secondary" paragraph={true}>
            Yang dimaksud dengan “keadaan kahar”” atau “force majeure” adalah segala keadaan atau peristiwa yang terjadi di luar kendali dan/atau kekuasaan dari para pihak pada Service Level Agreement ini, termasuk akan tetapi tidak terbatas pada huru-hara, epidemi, kebakaran, banjir, gempa bumi, pemogokan, perang, keputusan pemerintah atau instansi berwenang, tidak berfungsinya sistem di luar kekuasaan masing-masing pihak yang menghalangi secara langsung atau tidak langsung untuk terlaksananya Service Level Agreement ini.
          </Typography>

          <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight:`600`, marginTop:`3rem` }}>
            PERSENTASE UPTIME TAHUNAN
          </Typography>
          <Typography color="secondary" paragraph={true}>
            Batas minimal uptime LandX yang berlaku adalah 99.9% dengan maksimal downtime 8 jam setiap tahun.
          </Typography>

          <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight:`600`, marginTop:`3rem` }}>
            LAIN-LAIN
          </Typography>
          <Grid sx={{ marginLeft:`2rem` }}>
            <ul style={{ listStyleType:`disc`, color:`#5e798d` }}>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Kami akan berusaha semaksimal mungkin untuk mengimpelementasikan setiap ketentuan pada Service Level Agreement ini.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Anda dengan ini menjamin untuk melepaskan setiap tuntutan, klaim atau hal serupa lainnya atas ketidakmaksimalan Kami untuk melakukan hal-hal yang diatur pada Service Level Agreement ini.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Dalam hal terdapat perubahan pada Service Level Agreement ini oleh karena sebab apapun, kami akan segera menginformasikan Anda atas perubahan yang terjadi tersebut.
                </Typography>
              </li>
              <li>
                <Typography color="secondary" paragraph={true}>
                  Apabila salah satu ketentuan dalam Service Level Agreement ini menjadi atau dianggap tidak berlaku, tidak sah atau tidak mengikat lagi menurut hukum, maka ketentuan-ketentuan lainnya tidak akan terpengaruh dan tetap berlaku bagi para pihak. Kami sepakat untuk mengganti ketentuan yang tidak berlaku tersebut dengan ketentuan baru yang sesuai dengan peraturan perundang-undangan yang berlaku.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
  </Layout>
)

export default ServiceLevelAgreement
