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
<<<<<<< HEAD
          <Typography className="text-question">
            Kenapa Pengguna Wajib Melakukan Verifikasi KYC?
          </Typography>
=======
          <Typography className="text-question">Pertanyaan 1</Typography>
>>>>>>> 91726dd (custom style accordion)
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ listStyle: "disc", paddingLeft: "17px" }}>
              <li>
                Sebagai syarat agar saham yang dibeli bisa di daftarkan ke
                Kustodian Sentral Efek Indonesia (KSEI)
              </li>
              <li>
                Agar bisa mempunyai Sub Rekening Efek (SRE) di Bank Kustodian
              </li>
              <li>
                Agar bisa melakukan pembelian saham project yang sedang listing
                di LandX
              </li>
              <li>
                Agar bisa melakukan withdraw sejumlah uang dari hasil dividen
                atau capital gain
              </li>
              <li>
                Agar saham yang sudah dibeli Investor bisa diwariskan kepada
                ahli waris yang sudah investor daftarkan
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
<<<<<<< HEAD
          <Typography className="text-question">
            Apa Penyebab Verifikasi KYC Ditolak?
          </Typography>
=======
          <Typography className="text-question">Pertanyaan 2</Typography>
>>>>>>> 91726dd (custom style accordion)
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ listStyle: "disc", paddingLeft: "17px" }}>
              <li>Foto Identitas KTP tidak sesuai dengan Foto Selfie+KTP</li>
              <li>
                Identitas KTP yang diupload tidak asli (hanya foto copyan,
                memfoto bukan dari KTP langsung melainkan dari hp atau laptop)
              </li>
              <li>Identitas KTP rusak, tidak jelas dan tidak bisa dibaca</li>
              <li>
                Identitas KTP belum update atau belum terekam di Disdukcapil
              </li>
              <li>Identitas KTP pernah didaftarkan di akun LandX yang lain</li>
              <li>
                Salah posisi upload foto Identitas KTP atau tertukar dengan
                posisi upload KTP dan Foto Selfie+KTP
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-question">
            Penjelasan Ketentuan Investasi POJK 57 Tahun 2020 Pasal 56 Ayat 3
            dan 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul style={{ listStyle: "disc", paddingLeft: "17px" }}>
              <li>
                Setiap Investor dengan penghasilan lebih dari Rp500.000.000,00
                (lima ratus juta rupiah) per tahun, dapat membeli Efek melalui
                Layanan Urun Dana paling banyak sebesar 10% (sepuluh persen)
                dari penghasilan per tahun.
                <br />
                <br />
                Misal: Penghasilan Rudi per tahun Rp 750.000.000 maka 10% dari
                750 juta adalah Rp 75.000.000
                <br />
                <br />
                Artinya Rudi hanya bisa membeli saham maksimal per project Rp
                75.500.000
              </li>
              <li style={{ marginTop: "2rem" }}>
                Setiap Investor dengan penghasilan kurang dari Rp500.000.000,00
                (lima ratus juta rupiah) per tahun, dapat membeli Efek melalui
                Layanan Urun Dana paling banyak sebesar 5% (sepuluh persen) dari
                penghasilan per tahun.
                <br />
                <br />
                Misal: Penghasilan Rudi per tahun Rp 500.000.000 maka 5% dari
                500 juta adalah Rp 25.000.000
                <br />
                <br />
                Artinya Rudi hanya bisa membeli saham maksimal per project Rp
                25.000.000
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-question">
            Apakah Bisa Limit Investasi Unlimited/Tidak Terbatas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bisa asalkan mereka sudah pernah memiliki rekening efek minimal 2
            Tahun sebelum penawaran project yang ditawarkan. Rekening Efek
            adalah Rekening yang digunakan untuk menampung saham elektronik agar
            bisa tercatat di KSEI
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-question">
            Yang Dilakukan Ketika Verifikasi KYC Berhasil
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jika investor sudah berhasil melakukan verifikasi dengan mendapatkan
            notifikasi via email maka selanjutnya investor dapat membeli saham
            langsung di fitur <strong>“Home”</strong> pilih{" "}
            <strong>“Proyek”</strong> dan
            <strong>“Pendanaan Dibuka”</strong>
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
