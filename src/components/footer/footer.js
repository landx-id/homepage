import * as React from 'react';
import { Link } from "gatsby"
import { Box, Typography, Container, Grid, MenuList, MenuItem, Stack } from '@mui/material';
import { AnchorLink } from "gatsby-plugin-anchor-links"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./footer.scss";


const Footer = () => {

  return (
    <Box className="footer-background">
      <Box style={{ position: `relative` }}>
        <Container maxWidth="lg" className="footer-CTA-move">
          <Box className="footer-CTA-background" sx={{ background: '#222F39', position: 'relative', overflow: 'clip' }}>
            {/* <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0}
              padding={'16px'}
              width='100%'
              bgcolor={'#222F39'}
              flexWrap='nowrap'
              position={'relative'}
              minHeight={'288px'}
            >
              <img src='/images/decoration_v3.png' style={{ width:'100px', position: 'absolute', bottom: 0, left: 0, zIndex: '0', opacity: '0.8' }}></img>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                margin='0px auto'
                zIndex={'1'}
              >
                <Typography color={'white'} fontWeight={'bold'} fontSize='1.3rem' textAlign={'center'}>
                  Kini memiliki bisnis dan properti jadi jauh lebih mudah.
                </Typography>

                <Typography color={'white'} fontWeight={'bold'} fontSize='1.3rem' textAlign={'center'}>
                  Unduh aplikasi LandX sekarang!
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  marginTop='16px'
                >
                  <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp">
                    <img
                      src="/images/logo_playstore.webp"
                      alt="Play Store"
                      title="Play Store"
                      style={{ height: `60px`, width: `203px` }}
                    />
                  </a>
                  <a href="https://apps.apple.com/id/app/landx/id1453823676">
                    <img
                      src="/images/logo_appstore.webp"
                      alt="App Store"
                      title="App Store"
                      style={{ height: `60px`, width: `180px` }}
                    />
                  </a>
                </Stack>

              </Stack>
              <img src='/images/decoration_v3.png' style={{ width: '100px', position: 'absolute', top: 0, right: 0, transform: 'rotate(180deg)', zIndex: '0' }}></img>

            </Stack> */}

            <Typography style={{ fontSize: '1.5rem', fontWeight: '800', padding: '8px 4px', margin: '12px 0px', zIndex: '99' }}>
              Kini memiliki bisnis dan properti jadi jauh lebih mudah.
              <br />
              Unduh aplikasi LandX sekarang!
            </Typography>
            <Grid container spacing={2} style={{ paddingBottom: 25 }}>
              <Grid item xs={12} sm={6} className='display-f-center display-fj-end'>
                <a href="https://play.google.com/store/apps/details?id=store.numoney.landxapp">
                  <img
                    src="/images/logo_playstore.webp"
                    alt="Play Store"
                    title="Play Store"
                    style={{ height: `60px`, width: `203px` }}
                  />
                </a>
              </Grid>
              <Grid item xs={12} sm={6} className='display-f-center display-fj-start'>
                <a href="https://apps.apple.com/id/app/landx/id1453823676">
                  <img
                    src="/images/logo_appstore.webp"
                    alt="App Store"
                    title="App Store"
                    className="app-store"
                    style={{ height: `60px`, width: `180px` }}
                  />
                </a>
              </Grid>
            </Grid>
            {/* <img src='/images/decoration_v3.png' style={{ position: 'absolute', bottom: 0, left: 0, zIndex: '0', opacity: '0.8' }}></img>
            <img src='/images/decoration_v3.png' style={{ position: 'absolute', top: 0, right: 0, transform: 'rotate(180deg)', zIndex: '0' }}></img> */}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" style={{ textAlignLast: `center`, paddingTop: `11rem`, paddingBottom: `3rem` }} >
        <Typography className="footer-fcolor mt-4" display="block">
          BERIZIN & DIAWASI OLEH
        </Typography>
        <Box style={{ display: `block` }}>
          <img
            src="/images/logo_ojk_01.webp"
            alt="LandX merupakan platform equity crowdfunding terpercaya di Indonesia yang telah terdaftar dan diawasi OJK"
            title="LandX merupakan platform equity crowdfunding terpercaya di Indonesia yang telah terdaftar dan diawasi OJK"
            style={{ marginBottom: `3rem`, height: `130px`, width: `330px` }}
          />
        </Box>

        <hr />

        <Grid container spacing={2} style={{ marginTop: `5rem`, marginBottom: `4rem`, textAlign: `center` }}>
          <Grid item xs={12} md={4}>
            <Typography className="footer-fcolor" display="block">
              TELAH TERDAFTAR OLEH KEMENTRIAN KOMUNIKASI DAN INFORMATIKA
            </Typography>
            <img
              src="/images/logo_kemkominfo.webp"
              alt="LandX TELAH TERDAFTAR OLEH KEMENTRIAN KOMUNIKASI DAN INFORMATIKA sehingga informasi dan investasi anda menjadi lebih aman"
              title="LandX TELAH TERDAFTAR OLEH KEMENTRIAN KOMUNIKASI DAN INFORMATIKA sehingga informasi dan investasi anda menjadi lebih aman"
              style={{ marginBottom: `3rem`, height: `130px`, width: `144px` }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className="footer-fcolor" display="block">
              DIDUKUNG OLEH
            </Typography>
            <img
              src="/images/logo_iso.webp"
              alt="LandX telah memilki sertifikasi ISO 27001 sehingga investasi anda melalui equity crowdfunding menjadi lebih mudah"
              title="LandX telah memilki sertifikasi ISO 27001 sehingga investasi anda melalui equity crowdfunding menjadi lebih mudah"
              style={{ marginBottom: `3rem`, height: `130px`, width: `279px` }}
              className="footer-images-size"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className="footer-fcolor" display="block">
              MEMBER OF
            </Typography>
            <img
              src="/images/Logo_ALUDI.webp"
              alt="LandX merupakan salah satu board member dari Asosiasi Layanan Urun Dana Indonesia (ALUDI) yang ditujunjuk OJK untuk bertugas menjaga kestabilan ekosistem layanan urun dana atau equity crowdfunding di Indonesia"
              title="LandX merupakan salah satu board member dari Asosiasi Layanan Urun Dana Indonesia (ALUDI) yang ditujunjuk OJK untuk bertugas menjaga kestabilan ekosistem layanan urun dana atau equity crowdfunding di Indonesia"
              style={{ marginBottom: `3rem`, height: `130px`, width: `95px` }}
              className="footer-images-size"
            />
          </Grid>
        </Grid>
        <hr />

        <Grid container spacing={2} style={{ textAlignLast: `left`, marginBottom: `3rem` }}>
          <Grid item xs={12} md={6} style={{ paddingLeft: `1rem`, paddingRight: `1rem` }}>
            <Typography className="footer-fcolor" display="block" style={{ marginTop: `3rem`, marginBottom: `2rem` }}>
              Disclaimer
            </Typography>
            <Typography style={{ color: `#5e798d` }} fontSize={'0.8rem'} display="block">
              PT ICX Bangun Indonesia (“LandX” atau “Penyelenggara”) hadir dalam rangka mendukung program pemerintah di bidang perumahan dengan mengembangkan bisnis layanan urun dana bersama, dengan mempertemukan Pemodal dan pihak pengembang properti (“Penerbit”) (selanjutnya Pemodal dan Penerbit disebut bersama-sama sebagai “Pengguna”). Pada layanan urun dana ini, timbulnya hubungan perdata terjadi apabila Pemodal sepakat untuk membeli saham yang ditawarkan oleh Penerbit, sehingga segala risiko yang timbul dari hubungan tersebut akan menjadi tanggung jawab masing-masing pihak. Risiko yang timbul dari hak sebagai Pemodal untuk menerima dividen dari Penerbit merupakan risiko yang wajib ditanggung oleh Pemodal sesuai kebijakan dividen Penerbit. LandX hanya bertindak sebagai layanan urun dana yang mempertemukan antara Pemodal dengan Penerbit, dan tidak bertindak sebagai pelaku usaha yang menjalankan usaha untuk mengumpulkan dana terkait atau pengelola investasi (Penerbit). Sesuai dengan Pasal 23 Peraturan Otoritas Jasa Keuangan No. 37 Tahun 2018 tentang Layanan Urun Dana melalui Penawaran Saham Berbasis Teknologi Informasi atau Equity Crowdfunding (“POJK 37/2018”), kami menyatakan bahwa:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="rule-landx">
            <Typography style={{ color: `#5e798d` }} fontSize={'0.8rem'} display="block">
              a.  OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.
              <br /> <br />
              b.  INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.
              <br /> <br />
              c.  PENERBIT SAHAM DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI.
            </Typography>
          </Grid>
        </Grid>
        <hr />

        <Grid container spacing={2} style={{ marginTop: `3rem` }}>
          <Grid item xs={12} md={3} className="footer-menu-one mb-3">
            <MenuList className="sections">
              <MenuItem>
                <AnchorLink to='/#why-landx'>Mengapa LandX</AnchorLink>
              </MenuItem>
              <MenuItem>
                <AnchorLink to='/#ongoing-projects'>Proyek</AnchorLink>
              </MenuItem>
              <MenuItem>
                <AnchorLink to='/#how-it-works'>Cara Kerja</AnchorLink>
              </MenuItem>
              <MenuItem>
                <Link to='/contact'>Kontak</Link>
              </MenuItem>
              <MenuItem>
                <a href="https://landx.id/blog/">Blog</a>
              </MenuItem>
            </MenuList>
          </Grid>

          <Grid item xs={12} md={3} className="footer-menu-two">
            <Typography color="secondary" className="footer-menu-title">Perusahaan</Typography>
            <MenuList className="sections">
              <MenuItem>
                <a href='https://landx.id/blog/jobs-at-landx/'>Karir</a>
              </MenuItem>
              <MenuItem>
                <Link to='/syarat-dan-ketentuan'>Syarat & Ketentuan</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/privacy-policy'>Kebijakan Privasi</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/service-level-agreement'>Service Level Agreement</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/kebijakan-isms'>Kebijakan ISMS</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/mitigasi-risiko'>Mitigasi Risiko</Link>
              </MenuItem>
              <MenuItem>
                <a href="https://landx.id/blog/faq-landx/">FAQ</a>
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid item xs={12} md={6} className="ml-1 container-icon-copyright">
            <Grid item xs={12}>
              <a href="https://id.linkedin.com/company/landx-id?trk=public_profile_topcard_current_company" className="footer-icon-link">
                <LinkedInIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
              </a>
              <a href="https://www.facebook.com/landx.id" className="footer-icon-link">
                <FacebookIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
              </a>
              <a href="https://www.instagram.com/landx.id/" className="footer-icon-link">
                <InstagramIcon sx={{ width: '32px', height: '32px', color: '#5e798d' }} />
              </a>
            </Grid>

            <Grid item xs={12}>
              <Typography className="text-copyright">
                © 2020 LandX Indonesia. All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer;