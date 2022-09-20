import * as React from "react"
import { Container, Grid, Typography } from '@mui/material';
import { Link } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const PrivacyPolicy = () => (
  <Layout>
    <Seo title="Kebijakan Privasi dalam Berinvestasi melalui Sistem Urun Dana" description="INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL" />

    <Container className="menu-mt">
      <Grid item xs={12} md={12}>
        <Typography color="primary" component="h1" className="menu-title">
          Kebijakan Privasi
        </Typography>
        <Typography color="secondary" className="menu-subtitle">
          Revisi terakhir per tanggal 19 September 2022
        </Typography>
      </Grid>

      <Grid item xs={12} md={8} className="menu-description">
        <Typography color="secondary" style={{ fontWeight: `700` }}>
          INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA TERLEBIH DAHULU.
        </Typography>
      </Grid>

      <Grid item xs={12} md={8} className="menu-description" style={{ marginTop: `3rem` }}>
        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          DEFINISI
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Definisi-definisi dalam Kebijakan Privasi ini memiliki arti yang sama dengan definisi-definisi yang ditetapkan pada Syarat dan Ketentuan, kecuali didefinisikan lain pada Kebijakan Privasi ini atau sebagai berikut:
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Data Pribadi" adalah informasi milik Pengguna, yang mengidentifikasi keterangan terkait Pengguna yang bersangkutan, termasuk daripadanya data transaksi dan data keuangan yang tersedia pada saat penggunaan Layanan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Syarat dan Ketentuan" adalah ketentuan dan prasyarat yang dibuat oleh LandX, yang telah dibaca dan disetujui oleh Pengguna.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Layanan" adalah layanan urun dana berbasis teknologi informasi untuk melakukan Penawaran Efek melalui Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary">
                "Konten" adalah apapun yang ada pada Layanan Penyelenggara, termasuk namun tidak terbatas pada rancangan, desain, teks, gambar grafis, foto, gambar, citra, video, perangkat lunak, musik, suara dan file lain, peringkat kredit, tarif, biaya, kuotasi, data historis, grafik, statistik, artikel, informasi kontak Penyelenggara, setiap informasi lain, beserta pemilihan dan pengaturannya.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Anggota" adalah individu yang atas dirinya mendaftar Akun dengan LandX, dimana terdapat kepentingan keanggotaan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                “Pengguna” adalah Pengunjung Platform dan/atau Pengguna Platform sebagaimana didefinisikan pada Syarat dan Ketentuan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Akun" adalah identitas unik untuk mencatat kegiatan Anda dalam menggunakan Layanan yang pembuatannya dilakukan dengan cara pendaftaran pada Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Penyelenggara" adalah PT ICX BANGUN INDONESIA (dh. PT Numex Teknologi Indonesia) atau “LandX” beserta para perwakilan dan/atau kuasanya yang sah dapat bertindak untuk PT ICX BANGUN INDONESIA yang yang dalam hal ini merupakan badan hukum Indonesia yang menyediakan, mengelola, dan mengoperasikan Layanan Urun Dana yang telah memperoleh izin dari OJK.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                “Platform” adalah platform LandX baik yang tersedia melalui situs https://landx.id/ maupun berbentuk aplikasi pada setiap sistem telepon seluler.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna wajib untuk memberikan Data Pribadi yang akurat serta tidak menyesatkan, serta diperlukan untuk selalu memperbaharui Data Pribadi tersebut pada Layanan apabila terjadi perubahan daripadanya. Penyelenggara memiliki hak untuk melakukan proses autentikasi, verifikasi, dan validasi atas setiap Data Pribadi yang diberikan oleh Pengguna demi kepentingan penggunaan dan implementasi dari Layanan Penyelenggara, dan Penyelenggara memiliki hak untuk melakukan pembatalan penggunaan Layanan apabila dikemudian hari ditemukan bahwa Data Pribadi yang diberikan adalah tidak benar, palsu, atau hasil dari tindakan yang melanggar ketentuan peraturan perundang-undangan serta apabila Pengguna melakukan atau terafiliasi dengan hal-hal yang melanggar ketentuan peraturan perundang-undangan yang berlaku, termasuk namun tidak terbatas  pada tindak pidana pencucian uang dan pendanaan terorisme (APU PPT).
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PEROLEHAN DAN VERIFIKASI INFORMASI
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Sehubungan dengan penggunaan Layanan Penyelenggara oleh Pengguna, dari waktu ke waktu Penyelenggara dapat mengumpulkan informasi Pengguna, terkait dengan hal-hal berikut:
              </Typography>
              <ul style={{ listStyleType: `circle` }}>
                <li>
                  <Typography color="secondary">
                    Pengguna ataupun pihak lain yang memiliki persetujuan yang sah dari Pengguna untuk memberikan Data Pribadi dalam rangka mengakses Layanan Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Setiap kunjungan Pengguna ke Platform Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Percakapan melalui telepon antara Pengguna dengan Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Penggunaan perangkat komputer maupun perangkat lainnya yang memfasilitasi hubungan ke internet untuk mengakses Layanan Penyelenggara oleh Pengguna, termasuk informasi mengenai alamat IP, sistem operasi dan <em>browser</em> yang Pengguna gunakan dalam mengakses Layanan Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Penggunaan "<em>cookies</em>" saat browser Pengguna mengakses dan Pengguna masuk (log-in) untuk menggunakan Layanan Penyelenggara. Jika statusnya diaktifkan (<em>enabled</em>), <em>cookies</em> akan menyimpan sejumlah kecil data pada komputer Pengguna tentang aktivitas Pengguna dalam menggunakan Layanan Penyelenggara; dan/atau
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Data Pribadi selama Pengguna menggunakan Layanan Penyelenggara, yang dalam hal ini termasuk namun tidak terbatas pada nama lengkap, pekerjaan, Pendidikan terakhir, jenis kelamin, nomor <em>handphone</em>, tempat lahir, tanggal lahir, foto KTP, dan foto <em>selfie</em> dengan KTP.
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam memperoleh, menggunakan, memanfaatkan, dan mengelola Data Pribadi, Penyelenggara tunduk pada ketentuan peraturan perundang-undangan yang berlaku di Indonesia, termasuk pada Undang-Undang Nomor 11 Tahun 2008 sebagaimana telah diubah dengan Undang-Undang Nomor 19 Tahun 2016 tentang Informasi dan Transaksi Elektronik beserta peraturan pelaksananya dan peraturan perundang-undangan terkait lainnya, antara lain Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik dan Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik, termasuk dengan setiap perubahannya dari waktu ke waktu.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                LandX tidak memperdagangkan Data Pribadi yang Penyelenggara peroleh dari Pengguna melalui aktivitas penggunaan Layanan Penyelenggara.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna wajib untuk memberikan Data Pribadi yang akurat serta tidak menyesatkan, serta diperlukan untuk selalu memperbaharui Data Pribadi tersebut pada Layanan apabila terjadi perubahan daripadanya. Penyelenggara memilik hak untuk melakukan proses autentikasi, verifikasi, dan validasi atas setiap Data Pribadi yang diberikan oleh Pengguna demi kepentingan penggunaan dan implementasi dari Layanan Penyelenggara, dan Penyelenggara memiliki hak untuk melakukan pembatalan penggunaan Layanan apabila dikemudian hari ditemukan bahwa Data Pribadi yang diberikan adalah tidak benar, palsu, atau hasil dari tindakan yang melanggar ketentuan peraturan perundang-undangan serta apabila Pengguna melakukan atau terafiliasi dengan hal-hal yang melanggar ketentuan peraturan perundang-undangan yang berlaku, termasuk namun tidak terbatas  pada tindak pidana pencucian uang dan pendanaan terorisme (APU PPT).
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam hal Pengguna memberikan Data Pribadi pihak ketiga dalam penggunaan Layanan kepada Penyelenggara, maka Penyelenggara menganggap, dan dengan ini Pengguna menerimanya, bahwa Pengguna telah mendapatkan persetujuan dari pihak ketiga terkait untuk pemberian Data Pribadi tersebut kepada Penyelenggara.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna dengan ini setuju bahwa kegagalan Pengguna untuk memberikan Data Pribadi yang benar dan akurat akan membuat Pengguna bertanggung jawab atas segala kerugian yang timbul, termasuk atas kerugian Penyelenggara dan pihak ketiga lainnya. Selain itu, atas kelalaian Pengguna, Penyelenggara berwenang untuk menutup akses Pengguna pada Layanan Penyelenggara.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PENGGUNAAN DATA PRIBADI
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna dengan ini setuju bahwa Data Pribadi yang diberikan kepada Penyelenggara, akan dapat Penyelenggara gunakan untuk kepentingan-kepentingan berikut:
              </Typography>
              <ul style={{ listStyleType: `circle` }}>
                <li>
                  <Typography color="secondary">
                    memberikan akses bagi Pengguna ke Layanan Penyelenggara dan memastikan bahwa Konten dan Layanan ditampilkan dengan cara yang paling efektif untuk Pengguna;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    memberikan kepada Pengguna informasi terkait konten situs, produk, layanan dan layanan interaktif Pengguna milik Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    untuk memproses keanggotaan Pengguna;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    melaksanakan kewajiban Penyelenggara yang timbul dari setiap perjanjian yang diadakan antara Pengguna dan Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    pengembangan Layanan Penyelenggara, termasuk namun tidak terbatas pada pemecahan masalah, analisis data, pengujian, penelitian, tujuan statistik serta survei;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    untuk membuat analisa statistik dalam rangka pengembangan produk Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    membuat keputusan terkait dengan pembukaan atau kelanjutan terhadap aktifnya Akun Pengguna serta pembuatan, penyediaan atau kelanjutan dari Layanan dan juga untuk menjaga akurasi Data Pribadi;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    menyediakan informasi dan Data Pribadi yang relevan tentang Pengguna kepada pihak ketiga untuk tujuan memproses keanggotaan;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    untuk menyampaikan iklan yang relevan kepada Pengguna;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    memberitahu Pengguna tentang perubahan-perubahan terhadap Layanan Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    memenuhi persyaratan-persyaratan hukum yang berlaku pada LandX berdasarkan peraturan perundang-undangan yang berlaku;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    memeriksa identitas dan/atau kewenangan dari para wakil atau kuasa Pengguna yang menghubungi Penyelenggara dan untuk menanggapi permintaan, pertanyaan atau instruksi dari para kuasa yang telah diperiksa tersebut atau para pihak lain;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    untuk memberikan otorisasi kepada bank, badan keuangan atau pihak ketiga yang berwenang untuk mengadakan pengecekan terbatas pada status Pengguna dalam <em>database</em> Penyelenggara atau Layanan Penyelenggara;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    mencegah dan mendeteksi aktivitas kejahatan dan penipuan termasuk membantu dalam setiap penyidikan kejahatan oleh otoritas yang relevan terhadap Pengguna;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    mengelola hubungan antara LandX dengan Pengguna, termasuk menyediakan informasi kepada Pengguna tentang Layanan, sepanjang diizinkan berdasarkan peraturan perundang-undangan yang berlaku;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    untuk memasarkan produk yang terkait dengan Layanan melalui berbagai metode komunikasi termasuk surat, telepon, SMS, faksimili, email, internet, riset pasar, dan merancang atau menyaring produk atau layanan yang serupa termasuk dengan melakukan riset pasar, analisis data, dan survei; dan
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    melakukan manajemen internal untuk mengoperasikan kontrol terhadap sistem informasi dan manajemen serta melaksanakan audit internal atau mengizinkan pelaksanaan audit eksternal.
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna dengan ini setuju dan memberikan izin bahwa Penyelenggara dapat menggunakan Data Pribadi untuk tujuan lain yang berkaitan dengan hal-hal sebagaimana disebutkan dalam poin 1 di atas, dengan tetap memperhatikan ketentuan-ketentuan pada peraturan perundang-undangan yang berlaku.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna dengan ini setuju dan memberikan izin untuk Penyelenggara untuk dapat mengungkapkan Data Pribadi dengan pihak ketiga lainnya sepanjang tidak bertentangan dengan ketentuan-ketentuan pada peraturan perundang-undangan yang berlaku, termasuk namun tidak terbatas pada para konsultan, akuntan publik atau pejabat negara.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          KERAHASIAAN KATA SANDI
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Kata sandi atau <em>password</em>, termasuk kata sandi Akun merupakan tanggung jawab pribadi masing-masing Pengguna yang seharusnya hanya diketahui oleh Pengguna.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          TAUTAN TERHADAP APLIKASI ATAU SITUS LAINNYA
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Jika Pengguna mengikuti salah satu tautan situs yang terdapat pada aplikasi atau situs LandX, harap diingat bahwa aplikasi tersebut memiliki kebijakan privasi tersendiri dan Penyelenggara tidak memberikan tanggung jawab dalam bentuk apapun atas ketentuan-ketentuan maupun jaminan-jaminan yang terdapat dalam kebijakan privasi pada aplikasi dan/atau situs tersebut.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          COOKIES
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Cookies adalah file berukuran kecil yang secara otomatis akan mengambil tempat di dalam perangkat komputer Pengguna, yang berguna untuk mengidentifikasi dan memantau koneksi jaringan Pengguna sehingga Pengguna akan dapat mengakses Layanan Penyelenggara secara lebih optimal. Cookies akan membantu Penyelenggara untuk menelusuri fitur yang paling menarik untuk Pengguna dan jenis konten yang pernah Pengguna kunjungi di waktu lalu. Saat Pengguna mengunjungi aplikasi dan/atau situs ini kembali, cookies akan mempermudah untuk menyesuaikan konten sesuai dengan kebutuhan Pengguna. Cookies tidak melakukan pelacakan terhadap informasi Pengguna secara individual, dan semua data cookies Penyelenggara telah terenkripsi dan tidak dapat dibaca oleh aplikasi dan/atau situs lain.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Walaupun secara setelan semula (<em>default</em>) perangkat komputer dan/atau ponsel pintar (<em>smartphone</em>) Pengguna menerima cookies, Pengguna bebas untuk melakukan perubahan terhadap setelan tersebut melalui pengaturan/<em>setting browser</em> Pengguna, dengan memilih untuk menolak mengaktifkan cookies.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          AKSES MEDIA SOSIAL
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam rangka pengembangan Layanan, Penyelenggara dapat meminta Pengguna untuk memberikan Penyelenggara izin dalam mengakses akun media sosial milik Pengguna.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Apabila Pengguna memberikan Penyelenggara akses ke data akun media sosial Pengguna, Pengguna setuju bahwa Penyelenggara hanya menggunakan data tersebut untuk keperluan pelaksanaan Layanan.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          KEAMANAN DAN KERAHASIAAN DATA PRIBADI
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Setiap Data Pribadi yang Penyelenggara peroleh sesuai dengan ketentuan Kebijakan Privasi ini akan dilindungi dengan upaya terbaik Penyelenggara melalui perangkat keamanan teruji. Penyelenggara akan berupaya sebaik mungkin untuk menghalangi akses ke dalam Data Pribadi oleh pihak yang tidak berwenang. Setiap pengungkapan Data Pribadi kepada pihak ketiga lainnya wajib untuk mendapatkan persetujuan dari para pemilik Data Pribadi tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Penyelenggara akan selalu memberikan upaya terbaik Penyelenggara untuk menjaga kerahasiaan, keutuhan, dan ketersediaan Data Pribadi yang Penyelenggara peroleh dalam pelaksanaan Layanan sejak diperoleh hingga Data Pribadi tersebut dimusnahkan. Terkhusus untuk kerahasiaan Data Pribadi, Data Pribadi tersebut tidak lagi menjadi rahasia apabila telah diketahui oleh publik sebelum diberikan oleh Pengguna kepada Penyelenggara, dan oleh karenanya dengan ini Pengguna tidak dapat melakukan klaim atau tuntutan apapun terhadap Penyelenggara apabila ditemukan bahwa Data Pribadi tersebut telah menjadi milik publik atau diketahui oleh publik sebelum Pengguna menggunakan Layanan.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          KEWAJIBAN PEMBUKAAN DATA PRIBADI
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Penyelenggara dapat diwajibkan oleh peraturan-perundang-undangan yang berlaku untuk membuka Data Pribadi dan informasi terkait Pengguna lainnya kepada pihak ketiga yang berwenang seperti lembaga pemerintah, lembaga kepolisian dan lembaga peradilan hanya jika ada surat perintah yang sah dari lembaga-lembaga tersebut. Penyelenggara akan dengan segera memberitahu Pengguna setidaknya satu hari kalender sebelumnya, sehingga Pengguna dapat mengusahakan suatu tindakan yang dianggap perlu untuk pembukaan Data Pribadi ini.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Penyelenggara dengan ini menyatakan dan menjamin tidak memiliki hak akses ke penyimpanan apapun milik Pengguna, kecuali disepakati lain secara bersama-sama oleh kedua pihak.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          TIDAK ADA PEMINDAHAN HAK
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Tidak terdapat pemindahan/pengalihan hak ataupun tanggung jawab serta kewajiban Penyelenggara sebagai penyelenggara Layanan kepada Pengguna. Setiap hak (termasuk namun tidak terbatas pada hak kekayaan intelektual) baik yang Penyelenggara miliki atau yang dimiliki oleh Pengguna yang digunakan dalam Layanan milik Penyelenggara akan seterusnya menjadi milik masing-masing pihak.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Kebijakan Privasi ini tidak dapat dialihkan tanpa persetujuan tertulis dari pihak lainnya. Apabila pengalihan yang dimaksud disetujui, maka Kebijakan Privasi ini akan mengikat penerus hak dan penggantinya yang dimaksudkan.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PERNYATAAN DAN JAMINAN
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Dalam menjaga kerahasiaan Data Pribadi Pengguna, Penyelenggara menyatakan dan menjamin untuk:
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Menjaga kerahasiaan, keutuhan, dan ketersediaan Data Pribadi yang diperoleh oleh Penyelenggara dalam melaksanakan Layanan sejak diperolehnya Data Pribadi tersebut hingga perlu dimusnahkan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Tersedianya proses autentikasi, verifikasi, dan validasi yang mendukung kenirsangkalan dalam mengakses, memproses, dan mengeksekusi Data Pribadi  yang Penyelenggara peroleh dalam melaksanakan Layanan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Akan memberitahukan secara tertulis kepada Pengguna selaku pemilik Data Pribadi, jika terjadi kegagalan dalam perlindungan kerahasiaan terhadap Data Pribadi yang Penyelenggara Peroleh untuk melaksanakan Layanan, seperti adanya akses yang tidak sah terhadap Data Pribadi Pengguna.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PERNYATAAN PUBLIK
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Pengguna sepakat bahwa setiap pembicaraan dengan Penyelenggara akan dilakukan secara rahasia. Pengguna setuju tidak akan memberikan keterangan ataupun pernyataan kepada pers ataupun publik mengenai pembicaraan yang dimaksudkan sehubungan dengan Layanan yang Penyelenggara sediakan, kecuali apabila telah disepakati dan disetujui oleh Penyelenggara terlebih dahulu.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PENOLAKAN UNTUK TUJUAN PEMASARAN
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Pengguna berhak untuk meminta Penyelenggara agar tidak memanfaatkan Data Pribadi Pengguna untuk tujuan pemasaran. Penyelenggara akan memberitahu Pengguna dan meminta persetujuan dari Pengguna sebelum Penyelenggara menggunakan Data Pribadi Pengguna untuk tujuan tersebut atau jika Penyelenggara bermaksud mengungkapkan Data Pribadi Pengguna kepada pihak ketiga manapun untuk tujuan tersebut. Pengguna dapat menggunakan hak Pengguna untuk menolak pengolahan tersebut dengan cara memberikan tanda pada formulir yang terkait yang Penyelenggara gunakan untuk mengumpulkan data Pengguna. Bahkan setelah Pengguna memberikan persetujuan Pengguna atas Data Pribadi yang akan digunakan untuk tujuan pemasaran, Pengguna dapat, setiap saat setelah itu, menarik persetujuan Pengguna dengan menghubungi Penyelenggara di <Link href="mailto:hello@landx.id"> hello@landx.id</Link>.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          JANGKA WAKTU KEBIJAKAN PRIVASI
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Kebijakan Privasi ini akan berlaku secara terus menerus selama Layanan Penyelenggara berlangsung, terhitung sejak disetujuinya Kebijakan Privasi ini kecuali diakhiri dengan persetujuan tertulis oleh para pihak.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          KEBERLAKUAN KETENTUAN
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Apabila salah satu atau beberapa ketentuan dalam Kebijakan Privasi ini menjadi tidak berlaku atau tidak dapat dilaksanakan karena melawan ketentuan peraturan perundang-undangan yang berlaku, hal tersebut tidak akan mempengaruhi ketentuan lainnya pada Kebijakan Privasi ini. Penyelenggara setuju untuk mengubah ketentuan-ketentuan yang berlawanan tersebut sehingga dapat dilaksanakan sesuai dengan peraturan perundang-undangan yang berlaku.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Penyelenggara memiliki hak serta kewajiban untuk mengubah ketentuan-ketentuan pada Kebijakan Privasi ini untuk alasan tertentu.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          GANTI RUGI
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Para pihak setuju untuk memberikan ganti rugi dalam bentuk finansial apabila terjadi pelanggaran dalam Kebijakan Privasi ini, sepanjang hal tersebut dapat dibuktikan oleh pihak yang dirugikan dengan putusan hukum yang berkekuatan tetap dan secara nyata melanggar Kebijakan Privasi ini.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PERUBAHAN KEBIJAKAN PRIVASI DARI WAKTU KE WAKTU
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Kebijakan Privasi ini mungkin diubah dan/atau diperbaharui dari waktu ke waktu dengan memberikan pemberitahuan terlebih dahulu. LandX menghimbau agar Pengguna membaca secara seksama dan memeriksa halaman Kebijakan Privasi ini dari waktu ke waktu untuk mengetahui perubahan apapun yang dapat terjadi. Dengan tetap mengakses dan menggunakan aplikasi atau situs dan Layanan LandX, maka pengguna menyetujui perubahan-perubahan dalam Kebijakan Privasi ini dari waktu ke waktu.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          RISIKO
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Mohon diperhatikan bahwa berbagai jenis investasi yang terdapat dalam situs dan/atau aplikasi ini melibatkan berbagai tingkatan risiko dan tidak terdapat jaminan bahwa investasi tertentu cocok, sesuai atau menguntungkan bagi Pengguna. Setiap produk investasi mengandung risiko dan Pengguna wajib mencari informasi sebelum memutuskan keputusan investasi.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          HUKUM YANG BERLAKU
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Kebijakan Privasi ini berlaku berdasarkan peraturan perundang-undangan dan hukum di Negara Kesatuan Republik Indonesia.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PENYELESAIAN SENGKETA
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
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          HUBUNGI KAMI
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Apabila Pengguna memiliki pertanyaan terkait Kebijakan Privasi ini, Pengguna dapat menghubungi Penyelenggara di <Link href="mailto:hello@landx.id">hello@landx.id</Link>.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          LAIN-LAIN
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Setiap hak dan kewajiban yang ada pada Kebijakan Privasi ini mengikat setiap pihak yang menggunakan Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Setiap perubahan atau modifikasi atas Kebijakan Privasi ini akan diberitahukan kepada Pengguna dari Platform sesuai dengan ketentuan pada Syarat dan Ketentuan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna dengan ini sepakat untuk menggunakan Platform dengan penuh tanggung jawab dan dengan secara itikad baik.
              </Typography>
            </li>
          </ol>
        </Grid>
      </Grid>
      <Grid xs={12} md={8} className="menu-description">
        <Typography color="secondary" paragraph={true} style={{ fontWeight: `700`, marginTop: `3rem` }}>
          KEBIJAKAN PRIVASI INI DIBUAT DAN DISETUJUI SECARA ELEKTRONIK SESUAI DENGAN UNDANG-UNDANG NOMOR 11 TAHUN 2008 TENTANG INFORMASI DAN TRANSAKSI ELEKTRONIK DAN PERATURAN-PERATURAN PELAKSANAANNYA SERTA SETIAP PERUBAHANNYA DARI WAKTU KE WAKTU, DALAM KEADAAN SADAR TANPA ADANYA PAKSAAN ATAU TEKANAN DARI PIHAK MANAPUN.
        </Typography>
        <Typography color="secondary" style={{ fontWeight: `700` }}>
          DENGAN MEMBACA KETENTUAN KEBIJAKAN PRIVASI INI DAN MENJADI PENGGUNA PADA PLATFORM LANDX, DAN DENGAN INI ANDA SETUJU UNTUK TUNDUK PADA KEBIJAKAN PRIVASI INI DAN IMPLEMENTASINYA SERTA PERATURAN OTORITAS JASA KEUANGAN NOMOR 57/POJK.04/2020 MENGENAI PENAWARAN EFEK MELALUI LAYANAN URUN DANA BERBASIS TEKNOLOGI INFORMASI BESERTA SETIAP PERUBAHANNYA DARI WAKTU KE WAKTU DAN PERATURAN-PERATURAN LAINNYA YANG BERLAKU.
        </Typography>
      </Grid>
    </Container>
  </Layout>
)

export default PrivacyPolicy
