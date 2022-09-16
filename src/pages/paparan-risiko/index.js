import * as React from "react"
import { Container, Grid, Typography } from '@mui/material';

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const PaparanRisiko = () => (
  <Layout>
    <Seo title="Paparan Risiko" />

    <Container className="menu-mt">
      <Grid item xs={12} md={12}>
        <Typography color="primary" className="menu-title">
          Paparan Risiko
        </Typography>
      </Grid>

      <Grid item xs={12} md={8} className="menu-description" style={{ marginTop: `3rem` }}>
        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          Paparan Risiko
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Paparan risiko ini diharapkan untuk menjadi acuan bagi Pemodal yang akan berinvestasi di platform LandX yang dioperasikan oleh PT ICX Bangun Indonesia (LandX) tentang beberapa risiko yang dapat terjadi saat berinvestasi di proyek yang diterbitkan oleh Penerbit pada platform LandX.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Anda harus mempertimbangkan setiap keputusan investasi yang akan Anda lakukan. Anda harus memilih investasi yang cocok dan terbaik untuk Anda berdasarkan pengetahuan dan pengalaman Anda dalam bidang keuangan, bisnis, laporan keuangan, tujuan investasi, keuangan, dan kemampuan analisis risiko yang akan Anda ambil.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Beberapa risiko yang dapat terjadi saat Anda berinvestasi di platform LandX, tetapi tidak terbatas pada yang berikut ini:
        </Typography>

        <Typography color="secondary" style={{ fontWeight: `600`, marginTop: `2rem` }}>
          Risiko Usaha
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Risiko adalah sesuatu yang tidak dapat dihindari dalam suatu usaha/bisnis. Beberapa risiko yang dapat terjadi di LandX yaitu usaha properti yang tidak atau belum dapat menghasilkan penghasilan sewa, kenaikan harga properti di bawah perkiraan, dan/atau kinerja perusahaan di bawah perkiraan.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Untuk meminimalisir risiko ini, LandX hanya bekerja sama dengan perusahaan pengelola properti yang memiliki track record yang baik menurut standar LandX, dan LandX hanya menerima properti yang sudah memiliki penghasilan sewa (menghasilkan cashflow).
        </Typography>

        <Typography color="secondary" style={{ fontWeight: `600`, marginTop: `2rem` }}>
          Risiko Kerugian
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Setiap keputusan investasi yang diambil Pemodal dapat mengakibatkan risiko kehilangan sebagian atau seluruh modal investasi, seperti namun tidak terbatas pada: penurunan harga properti atau timbulnya biaya-biaya seperti pajak, perawatan, dan lain-lain selama properti tidak atau belum tersewa.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          LandX menyeleksi properti yang menghasilkan keuntungan sewa sehingga Pemodal dapat tetap berpotensi menghasilkan keuntungan di saat penurunan harga pada pasar properti.
        </Typography>

        <Typography color="secondary" style={{ fontWeight: `600`, marginTop: `2rem` }}>
          Risiko Likuiditas
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Pemodal mungkin tidak dapat dengan mudah menjual saham pada secondary market (pasar sekunder) untuk saham dari Penerbit tertentu atau Pemodal mungkin tidak dapat menemukan pembeli sebelum properti dijual kembali setelah pemungutan suara.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          LandX akan memfasilitasi penjualan dan pembelian saham Pemodal setelah secondary market (pasar sekunder) diluncurkan. LandX juga akan menyediakan harga properti dari hasil appraisal  sebagai patokan untuk transaksi jual-beli di secondary market (pasar sekunder).
        </Typography>

        <Typography color="secondary" style={{ fontWeight: `600`, marginTop: `2rem` }}>
          Risiko Tidak Adanya Dividen
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Setiap Pemodal berhak mendapatkan dividen atas penghasilan sewa properti sesuai dengan jumlah kepemilikan saham. Dividen akan dibagikan sesuai dengan kinerja properti dari perusahaan Penerbit. Tidak adanya pembagian dividen dapat terjadi karena kinerja properti dari perusahaan Penerbit sedang kurang baik.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          LandX menyeleksi perusahaan Penerbit dengan track record yang baik sebagai upaya agar proses pembagian dividen selalu lancar dan tepat waktu. LandX juga akan terus berkomunikasi dengan Penerbit untuk menyediakan laporan keuangan hasil audit yang transparan dan akuntabel.
        </Typography>

        <Typography color="secondary" style={{ fontWeight: `600`, marginTop: `2rem` }}>
          Risiko Dilusi
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Dilusi adalah penurunan persentase kepemilikan saham Pemodal yang terjadi karena bertambahnya jumlah saham total, sedangkan Pemodal yang bersangkutan tidak ikut membeli penerbitan saham baru tersebut. Efek dilusi bisa terjadi bila investor tidak menebus penerbitan saham baru dari aksi rights issue, atau private placement.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Jika Penerbit merasa perlu untuk melakukan penerbitan saham baru maka LandX akan melakukan penawaran rights issue, yaitu menawarkan terlebih dahulu kepada Pemodal saham tersebut sebelumnya supaya jumlah dan persentase kepemilikan saham tetap sama.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Sisa saham yang tidak diambil Pemodal akan kemudian ditawarkan melalui crowdsale di platform LandX.
        </Typography>

        <Typography color="secondary" style={{ fontWeight: `600`, marginTop: `2rem` }}>
          Risiko Kegagalan Sistem Elektronik
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Sistem elektronik dapat mengalami gangguan koneksi sewaktu-waktu, oleh sebab itu LandX menggunakan beberapa server, baik utama maupun backup untuk meminimalisir risiko gangguan sistem elektronik.
        </Typography>
      </Grid>
    </Container>
  </Layout>
)

export default PaparanRisiko
