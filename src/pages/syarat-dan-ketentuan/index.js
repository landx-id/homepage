import * as React from "react"
import { Container, Grid, Typography, Link } from '@mui/material';

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const TermAndCondition = () => (
  <Layout>
    <Seo title="Syarat dan Ketentuan" />

    <Container className="menu-mt">
      <Grid item xs={12} md={12}>
        <Typography color="primary" className="menu-title">
          Syarat & Ketentuan
        </Typography>
        <Typography color="secondary" className="menu-subtitle">
          <i>Revisi terakhir per tanggal 23 November 2021.</i>
        </Typography>
      </Grid>

      <Grid item xs={12} md={8} className="menu-description">
        <Typography color="secondary">
          Aplikasi LandX  dan situs LandX.id (<b>“Platform”</b>) dikelola oleh PT NUMEX TEKNOLOGI INDONESIA (<b>“Kami”</b>).
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Dengan mengunjungi dan/atau menggunakan Platform, maka baik pengunjung maupun pengguna (<b>“Anda”</b>) dinyatakan telah memahami dan menyepakati semua isi dalam Syarat dan Ketentuan di bawah ini
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Kami menyediakan penawaran efek bersifat Utang dan Saham (<b>”Efek”</b>) melalui layanan urun dana berbasis teknologi informasi (<i>online securities crowdfunding</i>) (<b>“Penawaran Efek melalui Layanan Urun Dana Berbasis Teknologi Informasi”</b>) kepada Anda melalui Platform Kami berdasarkan Peraturan Otoritas Jasa Keuangan (OJK) No. 57/POJK.04/2020 tentang Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi Informasi (<i>Securities Crowdfunding</i>).
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Kami berhak dengan kebijakan Kami sendiri, untuk mengubah atau memodifikasi sebagian atau keseluruhan dari isi Syarat dan Ketentuan ini setiap saat, yang mana pada saat perubahan tersebut dilakukan, aturan yang berlaku pada halaman ini akan berubah sewaktu-waktu berdasarkan perubahan yang Kami lakukan, dan atas perubahan tersebut kami akan melakukan pemberitahuan kepada seluruh pengguna Platform antara lain melalui  email, sosial media, maupun melalui Platform ini secara langsung untuk diketahui oleh para pengguna terkait.
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Aturan yang baru akan mulai berlaku setelah pemberitahuan sudah terpublikasikan atau terkirim ke seluruh pengguna Platform. Kesepakatan di atas tidak berlaku apabila terdapat perubahan karena alasan berdasarkan hukum yang berlaku di negara Republik Indonesia, yang mana Syarat dan Ketentuan pada Platform ini akan berubah untuk menyesuaikan dengan peraturan yang berlaku di negara Republik Indonesia tersebut.
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Anda sangat dianjurkan untuk membaca dengan seksama segala ketentuan pada Syarat dan Ketentuan ini karena akan berdampak kepada hak dan kewajiban Anda sebagai pengguna Platform ini. Apabila terdapat pertanyaan lebih lanjut mengenai Platform dan/atau hal-hal lainnya yang berkaitan dengan Platform, Anda dapat menghubungi Kami langsung di <Link href="mailto:hello@landx.id"> hello@landx.id</Link>.
        </Typography>
      </Grid>

      <Grid item xs={12} md={8} className="menu-description" style={{ marginTop: `3rem` }}>
        <Typography color="secondary" className="menu-title">
          Ketentuan Umum
        </Typography>
        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          A. Definisi
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Dalam Ketentuan Umum, Ketentuan Untuk Penerbit, dan Ketentuan Untuk Pemodal (<strong>“Ketentuan-Ketentuan”</strong>) yang ada pada halaman ini, definisi-definisi yang akan digunakan serta tertulis pada Ketentuan-Ketentuan tersebut adalah sebagai berikut:
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Akun</strong> adalah suatu pengaturan (<em>arrangement</em>) antara LandX dengan Pengunjung Platform atau Pengguna Platform berdasarkan akses yang diberikan oleh LandX kepada Pengunjung Platform atau Pengguna Platform setelah melakukan pendaftaran data pribadi, yaitu seperti nama pengguna (<em>username</em>) dan kata sandi (<em>password</em>) sehingga Pengunjung Platform atau Pengguna Platform dapat menikmati fitur-fitur yang disediakan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Dana</strong> adalah modal untuk membeli Efek dari Penerbit yang dinyatakan dalam mata uang Rupiah, yang selanjutnya dialokasikan oleh Penerbit untuk menjalankan usahanya.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Rekening Escrow</strong> adalah rekening <em>escrow</em> pada Platform yang disediakan oleh LandX dari penyedia terkait atas pendaftaran yang dilakukan oleh Penggunaa Platform sebagai layanan keuangan elektronik dalam jaringan untuk melakukan penampungan dan/atau penyaluran Dana.
              </Typography>
            </li>
            <li>
              <Typography color="secondary">
                <strong>Konten</strong> adalah segala jenis materi dan/atau muatan yang berkaitan dengan Akun, penawaran Efek, transaksi, dan pengaduan.
              </Typography>
              <Typography color="secondary" paragraph={true}>
                <strong>Konten Yang Dilarang</strong> adalah segala jenis materi dan/atau muatan yang melanggar ketentuan peraturan perundang-undangan di wilayah Republik Indonesia.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>LandX</strong> dalah Platform yang digunakan untuk melakukan Penawaran Efek melalui Layanan Urun Dana Berbasis Teknologi Informasi.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Laporan</strong> adalah pemberitahuan yang disampaikan oleh Pengunjung Platform dan/atau Pengguna Platform kepada LandX tentang telah atau sedang atau diduga akan terjadinya peristiwa pelanggaran terhadap Syarat dan Ketentuan ini.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Saham</strong> adalah efek berupa lembar saham sebagai bukti kepemilikan pada Penerbit dengan setiap hak dan kewajibannya, yang memiliki nominal harga tertentu.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Lot</strong> adalah satuan jumlah saham yang dibeli atau dijual dalam satu transaksi yang merupakan kelipatan minimum pembelian Saham.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Bank</strong> adalah bank yang bekerja sama dengan LandX dalam rangka memfasilitasi Pencairan Dana yang menyediakan Escrow kepada Pengguna Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penawaran Saham</strong> adalah suatu usaha Penggalangan Dana baik secara perdana atau setelahnya untuk maksud dan tujuan tertentu yang dilakukan oleh Penerbit untuk menjual saham secara langsung kepada Pemodal melalui jaringan sistem elektronik yang bersifat terbuka. Atas Dana yang didapat dari penjualan saham yang dilakukan Penerbit, akan dialokasikan pada tujuan, termasuk namun tidak terbatas pada pengoperasian atas suatu Proyek, dengan imbalan (<em>reward</em>) kepemilikan atas saham Penerbit yang mengoperasikan Proyek, beserta setiap keuntungan maupun kerugian atas Proyek tersebut. Penawaran saham tersebut merupakan penawaran dengan ketentuan, termasuk namun tidak terbatas pada:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. penawaran saham dilakukan melalui LandX yang telah memperoleh izin dari Otoritas Jasa Keuangan;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. penawaran saham dilakukan dalam jangka waktu paling lama 12 (dua belas) bulan; dan
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. total dana yang dihimpun melalui penawaran saham paling banyak Rp10.000.000.000,00 (sepuluh miliar rupiah);
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penawaran Utang</strong> adalah suatu usaha Penggalangan Dana baik secara perdana atau setelahnya untuk maksud dan tujuan tertentu yang dilakukan oleh Penerbit untuk menawarkan efek bersifat Utang secara langsung kepada Pemodal melalui jaringan sistem elektronik yang bersifat terbuka. Atas Dana yang didapat dari penawaran efek bersifat Utang yang dilakukan Penerbit, akan dialokasikan pada tujuan, termasuk namun tidak terbatas pada pengoperasian atas suatu Proyek, dengan imbalan (<em>reward</em>) berupa bunga yang akan dikembalikan beserta dengan bunga pada jangka waktu tertentu, beserta dengan setiap keuntungan dan kerugian dari waktu ke waktu. Penawaran efek bersifat Utang tersebut merupakan penawaran dengan ketentuan, termasuk namun tidak terbatas pada:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. penawaran efek bersifat Utang dilakukan melalui LandX yang telah memperoleh izin dari Otoritas Jasa Keuangan;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. penawaran efek bersifat Utang dilakukan dalam jangka waktu paling lama 12 (dua belas) bulan;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. total dana yang dihimpun melalui penawaran efek bersifat Utang paling banyak Rp10.000.000.000,00 (sepuluh miliar rupiah);
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iv. Penerbit memiliki Proyek sebagai dasar penerbitan efek bersifat Utang;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                v. memiliki jatuh tempo tidak lebih dari 2 (dua) tahun;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                vi. dapat dilunasi lebih awal sebelum jatuh tempo, sepanjang mendapat persetujuan dari mayoritas pemegang efek bersifat Utang yang hadir dalam rapat umum pemegang efek bersifat Utang;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                vii. pembayaran pokok, bunga, atau biaya-biaya lainnya yang perlu dibayarkan dapat dilakukan secara berkala atau pada saat jatuh tempo.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penerbit</strong> adalah badan usaha berbentuk badan hukum dan badan usaha lainnya yang didirikan berdasarkan hukum yang berlaku di Indonesia yang menawarkan Efek melalui LandX.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pemodal</strong>  adalah pihak yang melakukan pembelian Efek dari Penerbit melalui LandX.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pencairan Dana</strong> adalah tindakan LandX mengalihkan untuk melakukan (<em>transfer</em>) Dana yang terkumpul dalam:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. Escrow atas nama Pemodal, kepada rekening asal Pemodal; atau
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. Escrow atas nama Penerbit, ke rekening tujuan yang telah ditunjuk Penerbit pada saat pendaftaran yang dilakukan atas permohonannya.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penggalangan Dana</strong> adalah proses pengumpulan Dana dari Pemodal oleh Penerbit dengan menawarkan Efek.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pengunjung Platform</strong> adalah pihak yang mengakses dan memperoleh informasi dari Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Platform</strong> adalah wadah berupa aplikasi dan situs yang digunakan untuk transaksi dan/atau memfasilitasi penyelenggaraan layanan penawaran Efek yang dilakukan oleh Penerbit untuk menawarkan Efek secara langsung kepada Pemodal melalui sistem elektronik dengan sifat terbuka, yang dikelola dan disediakan oleh LandX, yaitu pada Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pengguna Platform</strong> adalah Pengunjung Platform yang terdiri dari Penerbit dan Pemodal yang telah terdaftar sebagai pengguna dan memiliki Akun pada Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pengaduan</strong> adalah Laporan yang disertai permintaan kepada LandX untuk memeriksa Pengguna Platform yang telah atau sedang atau diduga melakukan pelanggaran Syarat dan Ketentuan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penyelenggara Platform</strong> adalah badan hukum Indonesia yang menyediakan, mengelola, dan mengoperasikan Layanan Urun Dana.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>POJK 57/2020</strong> adalah Peraturan Otoritas Jasa Keuangan No. 57/POJK.04/2020 tentang Penawaran Efek Melalui Layanan Urun Dana Berbasis Teknologi Informasi, berikut setiap perubahannya dari waktu ke waktu dan Surat Edaran yang dikeluarkan oleh Otoritas Jasa Keuangan sehubungan dengan aturan tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Proyek</strong> adalah proyek dari Penerbit yang akan dibiayai dengan Dana yang didapat dari Penggalangan Dana, melalui Penawaran Efek.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Syarat dan Ketentuan</strong> adalah syarat dan ketentuan penggunaan Platform yang ditetapkan dan dapat diubah sewaktu-waktu oleh LandX serta mengikat bagi Pengunjung Platform dan/atau Pengguna Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Update</strong> adalah fitur yang terdapat pada halaman Penawaran Efek yang difungsikan untuk setiap Penerbit agar dapat memberikan pemberitahuan kepada seluruh Pemodal melalui <em>email</em> secara otomatis mengenai keadaan terbaru Penawaran Efek, penggunaan dana, serta hal-hal lainnya berkaitan dengan Penawaran Efek tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Utang</strong> adalah efek bersifat utang yang ditawarkan oleh Penerbit kepada Pemodal melalui LandX dengan melakukan Penggalangan Dana dengan nominal harga tertentu.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Verifikasi</strong> adalah tindakan pemeriksaan kebenaran dan kelengkapan yang dilakukan oleh LandX terhadap Akun, Konten dan/atau Pencairan Dana yang didaftarkan, diunggah dan/atau dimohonkan oleh Pengguna Platform, atau untuk keperluan lainnya berdasarkan diskresi penuh Penyelenggara Platform.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          B. Biaya Operasional dan Biaya Tambahan
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dana yang diperoleh dari Penawaran Efek melalui Platform akan dikenakan biaya administrasi dengan besaran 5% (lima persen). Mohon untuk diingat bahwa:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. LandX tidak mengenakan biaya administrasi ketika pada saat Anda membuat halaman untuk melakukan Penawaran Efek melalui Penggalangan Dana.
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. LandX hanya mengenakan biaya administrasi dari Dana yang terkumpul.
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. Perolehan Dana yang ditampilkan pada halaman Penggalangan Dana merupakan total Dana terkumpul sebelum dikenakan biaya administrasi.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam hal terdapat pajak, retribusi dan/atau pungutan lainnya yang dikenakan oleh peraturan perundang-undangan yang berlaku terhadap Dana yang diperoleh dari Penawaran Efek, maka Penyelenggara Platform akan menetapkan biaya tambahan sesuai dengan besaran sebagaimana ditentukan peraturan perundang-undangan yang bersangkutan.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          C. Pengungkapan Secara Sukarela
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Segala pengungkapan (<em>disclosure</em>) oleh Pengunjung Platform atau Pengguna Platform dalam bentuk pertanyaan, pernyataan, komentar, ide, kritik, saran atau informasi pada Platform, yang bukan merupakan pengungkapan yang disyaratkan atau diminta oleh LandX adalah pengungkapan yang dibuat secara sukarela (<em>voluntary disclosure</em>) dan sepenuhnya merupakan tanggung jawab dari Pengunjung Platform atau Pengguna Platform yang bersangkutan.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          D. Posisi LandX
        </Typography>
        <Typography color="secondary" paragraph={true} style={{ fontStyle: `italic`, fontWeight: `600` }}>
          <em><b>LandX Bukanlah Broker/Lembaga Penyalur Amal/Lembaga Keuangan/Kreditor.</b></em>
        </Typography>
        <Typography color="secondary" paragraph={true}>
          LandX merupakan platform untuk memfasilitasi transaksi Penggalangan Dana antara Penerbit dan Pemodal. LandX tidak bertanggung jawab atas pelaksanaan, atau informasi yang disediakan oleh Penerbit dan Pemodal. LandX dengan ini melepaskan semua tanggung jawab dalam hal tersebut selama diizinkan oleh hukum yang berlaku di Indonesia.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Semua informasi di dalam konten Penawaran Efek yang disediakan oleh LandX merupakan bagian dari pemberitahuan, Kami tidak menjamin keakuratan, kelengkapan, ketepatan waktu atau kebenaran dari konten yang dibuat oleh Penerbit. Oleh karenanya, Anda mengetahui bahwa informasi dan konten yang ada pada halaman Penawaran Efek dalam situs Kami merupakan risiko yang Anda tanggung secara pribadi.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          LandX tidak menjamin bahwa setiap Penawaran Efek yang terdapat pada situs Kami akan mendapatkan sejumlah dana tertentu atau akan terpenuhi. LandX secara tersirat maupun tersurat tidak selalu mendukung penyelenggaraan sebuah Penawaran Efek. Kami dengan tegas menolak kewajiban atau tanggung jawab atas kegagalan setiap Penawaran Efek atau total dana yang Penerbit tetapkan apabila Penawaran Efek tersebut tidak terpenuhi.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          E. Laporan dan Pengaduan
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengunjung Platform dan Pengguna Platform berhak untuk mengajukan Laporan dan/atau Pengaduan kepada LandX mengenai dugaan dan/atau peristiwa pelanggaran Syarat dan Ketentuan ini, termasuk, namun tidak terbatas pada:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. Pengunjung Platform atau Pengguna Platform yang memasukkan data dan informasi yang tidak lengkap, tidak benar, menyesatkan dan/atau merupakan pemalsuan;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. Pengunjung Platform atau Pengguna Platform yang memasukkan dan mengunggah Konten Yang Dilarang;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. Penerbit yang menyalahgunakan Dana yang berasal dari Penawaran Efek; dan/atau
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iv. Penerbit yang tidak memenuhi atau hanya memenuhi sebagian dari pelaksanaan Penawaran Efek, atau memenuhi pelaksanaan Penawaran Efek tetapi tidak sesuai dengan yang dijanjikan oleh Penerbit melalui Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Konten Yang Dilarang sebagaimana disebut dalam nomor 1 butir ii di atas termasuk, namun tidak terbatas pada:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. konten negatif (pornografi, perjudian, kekerasan);
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. konten dengan materi kebencian;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. konten gambar grafis yang menimbulkan kengerian;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iv. konten yang melanggar hak kekayaan intelektual;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                v. konten jasa peretasan (<em>hacking</em> dan/atau <em>cracking</em>) dan/atau menyediakan akses tanpa hak atau melawan hukum atas sistem elektronik
              </Typography>
              <Typography color="secondary" paragraph={true}>
                vi. konten penyediaan dan/atau akses terhadap narkoba, zat adiktif, dan psikotropika
              </Typography>
              <Typography color="secondary" paragraph={true}>
                vii. konten dengan materi ketidakjujuran, kecurangan atau menyesatkan;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                viii. konten yang mendukung perdagangan manusia (<em>human trafficking</em>);
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ix. konten penyediaan dan/atau akses terhadap rokok; dan/atau
              </Typography>
              <Typography color="secondary" paragraph={true}>
                x. konten dengan muatan politik praktis, yaitu konten pada setiap Penawaran Efek yang mengandung muatan ajakan untuk memilih individu atau partai politik tertentu, baik yang dilakukan oleh individu maupun badan hukum lainnya.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Laporan dan Pengaduan diajukan oleh Pengunjung Platform atau Pengguna Platform kepada LandX dapat dilakukan dengan cara mengisi formulir laporan pada halaman penawaran efek dari Penerbit yang bersangkutan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dengan mengajukan Laporan dan Pengaduan, Pengunjung Platform atau Pengguna Platform menyatakan sepakat dan bersedia untuk dipanggil sebagai saksi untuk dimintakan keterangannya dalam rangka pemeriksaan, termasuk, namun tidak terbatas pada, menghadap ke LandX, instansi terkait, aparat penegak hukum, dan/atau pengadilan.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          F. Penonaktifan, Pemutusan dan Penghapusan Akun
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna Platform berhak untuk mengajukan permohonan penonaktifan dan/atau pemutusan dan penghapusan Akun yang terdaftar atas namanya pada Platform kepada LandX dengan mengirim email ke <Link href="mailto:hello@landx.id"> hello@landx.id</Link> disertai alasan-alasannya.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Penonaktifan dan/atau pemutusan dan penghapusan Akun dari Pengguna Platform dilakukan dengan memperhatikan kewajiban LandX untuk melakukan penyimpanan data pribadi sesuai batas waktu yang ditentukan dalam peraturan perundang-undangan yang berlaku sejak tanggal penonaktifan dan/atau pemutusan dan penghapusan Akun tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                LandX berhak untuk melakukan penonaktifan dan/atau pemutusan dan penghapusan Akun dari Pengguna Platform apabila terbukti melanggar Syarat dan Ketentuan ini.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam hal terjadi Penonaktifan, Pemutusan, dan/atau Penghapusan Akun  Pengguna Platform, LandX akan mengembalikan hak dan kewajiban Pengguna.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          G. Batasan Penyimpanan Data
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Anda mengetahui bahwa situs milik LandX memiliki batasan dalam penyediaan layanan kepada seluruh Pengguna Platform, termasuk batasan jangka waktu data atau konten lainnya yang disimpan oleh server LandX atas nama Anda. Karena server Kami memiliki kapasitas maksimal untuk menyimpan data seluruh Pengguna Platform. Maka atas alasan tersebut, Anda setuju dan memahami bahwa Kami berhak untuk menghapus Akun atau mengakhiri Penawaran Efek atas nama Anda yang sudah tidak aktif dalam jangka waktu tertentu, dan sebelum melakukan hal tersebut Kami akan berusaha memberikan pemberitahuan terlebih dahulu kepada Anda via <em>email</em>.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          H. Syarat Umum Pengguna Platform
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Berusia minimum 18 tahun atau wajib dengan pengawasan dan persetujuan dari orang tua/wali yang sah apabila berusia 13 sampai 17 tahun.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengunjung Platform serta Pengguna Platform situs ini wajib menyatakan diri sebagai seseorang yang cakap di mata hukum sehingga dapat bertanggung jawab atas segala tindakan ataupun kelalaian apabila melanggar Syarat dan Ketentuan ini.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Tidak diperkenankan bagi Pengunjung Platform serta Pengguna Platform situs untuk melakukan tindakan yang dapat melanggar ketentuan privasi seperti yang diatur dalam Kebijakan Privasi pada Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Untuk ketentuan lainnya sehubungan dengan syarat penggunaan Platform khusus Pemodal adalah sesuai dengan ketentuan Pemodal sebagaimana ditetapkan pada POJK 57/2020.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          I. Notifikasi
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Dengan menjadi Pengguna Platform, Anda memberikan izin kepada LandX untuk memberikan segala notifikasi melalui media elektronik, termasuk, namun tidak terbatas pada <em>email</em>, layanan pesan singkat (<em>short messaging service</em> atau SMS) dan/atau pesan instan (<em>instant messaging</em>) berdasarkan data-data yang Anda daftarkan pada Platform melalui media tersebut.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          J. Konten Publik
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Anda mengetahui bahwa setiap informasi yang Anda tampilkan pada konten atau layanan kami, dapat diakses oleh publik, seperti nama, nomor telepon, <em>email</em>, dan media sosial. Hal tersebut kami lakukan agar terdapat keterbukaan informasi bagi Pengguna Platform lainnya agar tidak dapat menimbulkan kecurigaan ataupun prasangka lainnya yang tidak dapat dipertanggungjawabkan.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          K. Hukum Kekayaan Intelektual
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Semua Hak Kekayaan Intelektual dalam situs ini dimiliki oleh LandX. Semua informasi dan bahan yang tertera pada situs Kami seperti: logo, ikon, kode html, dan kode lainnya dalam situs web ini dilarang untuk dimodifikasi, direproduksi atau diubah dengan cara apapun di luar wilayah situs ini tanpa izin yang dinyatakan oleh LandX. Apabila Anda melanggar hak-hak ini, Kami berhak untuk membuat gugatan perdata untuk jumlah keseluruhan kerusakan atau kerugian yang diderita, ataupun mengambil langkah lainnya sebagaimana diatur dalam peraturan perundang-undangan yang berlaku, termasuk menempuh jalur hukum serta membuat pelaporan atas terjadinya tindak pidana dan melakukan tindakan-tindakan berikutnya sehubungan dengan tindak pidana tersebut.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Semua fitur yang terdapat di dalam situs ini adalah milik <b>PT NUMEX TEKNOLOGI INDONESIA</b> dan dilindungi oleh ketentuan hukum Indonesia yang terdapat dalam Undang-undang HKI (Hak Kekayaan Intelektual), termasuk setiap peraturan pelaksananya dan perubahannya dari waktu ke waktu. Oleh karena itu, pengguna situs tidak diperkenankan untuk menyalahgunakan fitur yang terdapat dalam situs ini untuk kepentingan pribadi, kolektif maupun komersil.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          L. Pengecualian dan Pelepasan Tanggung jawab
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                LandX akan memberikan upaya terbaiknya untuk setiap penyelesaian masalah terhadap segala sengketa yang timbul karena janji-janji Penerbit terhadap Pemodal sesuai peraturan perundang-undangan yang berlaku.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Apabila Dana telah diberikan oleh Pemodal kepada Penerbit lalu terjadi peristiwa seperti pencurian, penggelapan, atau tindakan apapun yang menyebabkan kehilangan Dana dari Pemodal pada Platform, maka LandX akan memberikan upaya terbaiknya untuk membantu Pemodal dalam menyelesaikan permasalahan tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam keadaan apapun, Pengguna Platform akan membayar kerugian kepada LandX dan/atau menghindarkan LandX (termasuk petugas, direktur, karyawan, agen, dan lainnya) dari setiap biaya kerugian apapun, kehilangan, pengeluaran atau kerusakan yang berasal dari tuntutan atau klaim pihak ketiga yang timbul dari pelanggaran Pengguna Platform terhadap Syarat dan Ketentuan, dan/atau pelanggaran terhadap hak dari pihak ketiga.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Apabila di kemudian hari Anda sebagai Pengguna Platform menemukan atau mendapati bahwa terdapat Penawaran Efek yang mencurigakan atau berindikasi penipuan, Anda setuju untuk membantu dan bekerjasama dengan Kami untuk melaporkan kepada Kami dan ikut serta membantu menyelesaikan perkara tersebut.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          LANDX TIDAK MEMBERIKAN JAMINAN DAN/ATAU GANTI RUGI DALAM BENTUK APAPUN ATAS PENGGALANGAN DANA YANG DILAKUKAN PADA SITUS KAMI.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          M. Hukum yang Mengatur dan Yurisdiksi
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Syarat dan Ketentuan ini diatur, ditafsirkan dan dilaksanakan berdasarkan hukum Negara Kesatuan Republik Indonesia.
        </Typography>
        <Typography color="secondary" paragraph={true} style={{ fontWeight: `600` }}>
          <strong>Setiap orang dengan sengaja, dan tanpa hak menyebarkan berita bohong dan menyesatkan yang mengakibatkan kerugian konsumen dalam Transaksi Elektronik akan terjerat ketentuan pidana berdasarkan ketentuan peraturan perundang-undangan yang berlaku di negara Republik Indonesia , termasuk namun tidak terbatas pada tertulis pada Pasal 28 Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE) berikut dengan setiap perubahan dan peraturan pelaksananya.</strong>
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          N. Sanksi
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Apabila pengguna situs terbukti melanggar Syarat dan Ketentuan yang telah dibuat baik secara sengaja maupun tidak dilakukan secara sebagian maupun secara keseluruhan, maka:
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Kami akan memberitahu/melakukan notifikasi melalui pesan/<em>email</em> maupun telpon kepada Pengguna Platform mengenai ketentuan apa yang dilanggar
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Kami akan memberikan sanksi sesuai dengan pelanggaran yang dilakukan oleh pengguna situs.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          O. Penyelesaian Sengketa dan Keadaan Terpaksa
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam hal terdapat suatu perselisihan atau sengketa yang timbul dari atau sehubungan dengan penafsiran atau pelaksanaan dari Syarat dan Ketentuan ini, Pengunjung Platform maupun Pengguna Platform sepakat untuk menggunakan segala upaya untuk menyelesaikan perselisihan atau sengketa tersebut melalui musyawarah untuk mufakat.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Semua sengketa yang timbul dari dan/atau sehubungan dengan Syarat dan Ketentuan ini dan/atau pelaksanaan Syarat dan Ketentuan ini, yang tidak dapat diselesaikan secara musyawarah, baik mengenai cidera janji maupun perbuatan melawan hukum, termasuk mengenai pengakhiran dan/atau keabsahan Syarat dan Ketentuan ini, akan diselesaikan dan diputus melalui Badan Arbitrase Nasional Indonesia yang saat ini beralamat di Wahana Graha lantai 1&2, Jalan Mampang Prapatan No. 2, Duren Tiga, Pancoran, Indonesia. Meskipun terdapat suatu perselisihan atau sengketa, Pengunjung Platform atau Pengguna Platform harus tetap memenuhi kewajibannya berdasarkan Syarat dan Ketentuan ini, tanpa mengurangi keberlakuan keputusan arbitrase final.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Anda memahami dan mengerti bahwa Platform Kami dapat berhenti beroperasi dikarenakan kejadian di luar kemampuan manusia dan atau tidak dapat dihindarkan seperti terjadi peperangan, kerusuhan, kebakaran, bencana alam, permogokan dan bencana lainnya yang dinyatakan oleh instansi berwenang. Dalam hal tersebut, Kami tidak dapat dimintakan pertanggungjawaban atas penghentian operasi dikarenakan adanya keadaan terpaksa tersebut.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} align="center" style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PENUTUP
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Syarat dan Ketentuan dibuat berdasarkan peraturan perundang-undangan yang berlaku, termasuk POJK 57/2020, dan telah dibaca serta disetujui secara elektronik oleh para pihak sesuai ketentuan dalam Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik berikut dengan setiap perubahannya dan peraturan-peraturan pelaksanaannya, dalam keadaan sehat dan sadar serta tanpa adanya paksaan dari pihak manapun juga.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Dengan menggunakan Platform ini maka Pengunjung Platform dan Pengguna Platform dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam Syarat dan Ketentuan ini. Atas perhatian dan kesepakatan Anda, Kami sampaikan terima kasih.
        </Typography>
      </Grid>
    </Container>
  </Layout>
)

export default TermAndCondition
