import * as React from "react"
import { Container, Grid, Typography } from '@mui/material';

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const PrivacyPolicy = () => (
  <Layout>
    <Seo title="Privacy Policy" />

    <Container className="menu-mt">
      <Grid item xs={12} md={12}>
        <Typography color="primary" className="menu-title">
          Kebijakan Privasi
        </Typography>
        <Typography color="secondary" className="menu-subtitle">
          Revisi terakhir per tanggal 28 Agustus 2020.
        </Typography>
      </Grid>

      <Grid item xs={12} md={8} className="menu-description">
        <Typography color="secondary" style={{ fontWeight: `700` }}>
          INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA
        </Typography>
      </Grid>

      <Grid item xs={12} md={8} className="menu-description" style={{ marginTop: `3rem` }}>
        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          DEFINISI
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Data Pribadi" adalah informasi milik Pengguna, yang mengidentifikasi keterangan terkait Pengguna yang bersangkutan;
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Syarat Dan Ketentuan" merupakan ketentuan dan prasyarat dari penggunaan Layanan oleh Pengguna;
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Layanan" memiliki arti sebagaimana ditetapkan dalam Syarat Dan Ketentuan;
              </Typography>
            </li>
            <li>
              <Typography color="secondary">
                "Konten" berarti apapun yang ada pada Layanan kami, termasuk namun tidak terbatas pada rancangan, desain, teks, gambar grafis, foto, gambar, citra, video, perangkat lunak, musik, suara dan file lain, peringkat kredit, tarif, biaya, kuotasi, data historis, grafik, statistik, artikel, informasi kontak kami, setiap informasi lain, beserta pemilihan dan pengaturannya;
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Anggota" adalah individu yang atas dirinya mendaftar akun dengan LandX, dimana terdapat kepentingan keanggotaan;
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna "Akun" merupakan identitas unik untuk mencatat kegiatan Pengguna dalam menggunakan Layanan yang pembuatannya dilakukan dengan cara pendaftaran pada platform LandX;
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Akun" merupakan identitas unik untuk mencatat kegiatan Anda dalam menggunakan Layanan yang pembuatannya dilakukan dengan cara pendaftaran pada platform LandX;
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                "Kami" merujuk pada PT Numex Teknologi Indonesia (LandX) beserta para perwakilan dan/atau kuasanya yang sah dapat bertindak untuk PT Numex Teknologi Indonesia.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PEROLEHAN INFORMASI
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Sehubungan dengan penggunaan Layanan Kami oleh Pengguna, dari waktu ke waktu Kami dapat mengumpulkan informasi Pengguna, terkait dengan hal-hal berikut:
              </Typography>
              <ul style={{ listStyleType: `circle` }}>
                <li>
                  <Typography color="secondary">
                    Pengguna ataupun pihak lain yang memiliki persetujuan yang sah dari Pengguna untuk memberikan Data Pribadi dalam rangka mengakses Layanan Kami;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Setiap kunjungan Pengguna ke situs dan aplikasi Kami;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Percakapan melalui telepon antara Pengguna dengan Kami;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Penggunaan perangkat komputer maupun perangkat lainnya yang memfasilitasi hubungan ke internet untuk mengakses Layanan Kami oleh Pengguna, termasuk informasi mengenai alamat IP, sistem operasi dan browser yang Pengguna gunakan dalam mengakses Layanan Kami; dan/atau
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    Penggunaan "cookies" saat browser Pengguna mengakses dan Pengguna masuk (log-in) untuk menggunakan Layanan Kami. Jika statusnya diaktifkan (enabled), cookies akan menyimpan sejumlah kecil data pada komputer Pengguna tentang aktifitas Pengguna dalam menggunakan Layanan Kami.
                  </Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam mengelola Data Pribadi, kami tunduk pada ketentuan peraturan perundang- undangan yang berlaku di Indonesia, termasuk namun tidak terbatas pada Undang-Undang Nomor 11 Tahun 2008 sebagaimana telah diubah dengan Undang-Undang Nomor 19 Tahun 2016 tentang Informasi dan Transaksi Elektronik beserta peraturan pelaksananya dan peraturan perundang-undangan terkait lainnya, antara lain Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik dan Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                LandX tidak memperdagangkan Data Pribadi yang Kami peroleh dari Pengguna melalui aktivitas penggunaan Layanan Kami.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna dengan ini setuju bahwa kegagalan Pengguna untuk memberikan Data Pribadi yang benar dan akurat akan membuat Pengguna bertanggung jawab atas segala kerugian yang timbul, termasuk atas kerugian Kami dan pihak ketiga lainnya. Selain itu, atas kelalaian Pengguna, Kami berwenang untuk menutup akses Pengguna pada Layanan Kami.
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
                Pengguna dengan ini setuju bahwa Data Pribadi yang diberikan kepada Kami, akan Kami olah untuk kepentingan-kepentingan berikut:
              </Typography>
              <ul style={{ listStyleType: `circle` }}>
                <li>
                  <Typography color="secondary">
                    memberikan akses bagi Pengguna ke Layanan Kami dan memastikan bahwa Konten dan Layanan ditampilkan dengan cara yang paling efektif untuk Pengguna;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    memberikan kepada Pengguna informasi terkait konten situs, produk, layanan dan layanan interaktif Pengguna milik Kami;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    untuk memproses keanggotaan Pengguna;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    melaksanakan kewajiban Kami yang timbul dari setiap perjanjian yang diadakan antara Pengguna dan Kami;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    pengembangan Layanan Kami, termasuk namun tidak terbatas pada pemecahan masalah, analisis data, pengujian, penelitian, tujuan statistik serta survei;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    untuk membuat analisa statistik dalam rangka pengembangan produk Kami;
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
                    memberitahu Pengguna tentang perubahan-perubahan terhadap layanan kami;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    memenuhi persyaratan-persyaratan hukum yang berlaku pada LandX berdasarkan peraturan perundang-undangan yang berlaku;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    memeriksa identitas dan/atau kewenangan dari para wakil atau kuasa Pengguna yang menghubungi Kami dan untuk menanggapi permintaan, pertanyaan atau instruksi dari para kuasa yang telah diperiksa tersebut atau para pihak lain;
                  </Typography>
                </li>
                <li>
                  <Typography color="secondary">
                    untuk memberikan otorisasi kepada bank, badan keuangan atau pihak ketiga yang berwenang untuk mengadakan pengecekan terbatas pada status Pengguna dalam database Kami atau Layanan Kami;
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
                Pengguna dengan ini setuju dan memberikan izin bahwa Kami dapat menggunakan Data Pribadi untuk tujuan lain yang berkaitan dengan hal-hal sebagaimana disebutkan dalam poin 1 di atas, dengan tetap memperhatikan peraturan perundang-undangan yang berlaku.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" paragraph={true}>
          Pengguna dengan ini setuju dan memberikan izin untuk Kami untuk dapat mengungkapkan Data Pribadi dengan pihak ketiga lainnya sepanjang tidak bertentangan dengan peraturan perundang-undangan yang berlaku, termasuk namun tidak terbatas pada para konsultan, akuntan publik atau pejabat negara.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          KERAHASIAAN KATA SANDI
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Kata sandi atau password, termasuk kata sandi Akun merupakan tanggung jawab personal masing-masing Pengguna yang seharusnya hanya diketahui oleh Pengguna.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          TAUTAN TERHADAP APLIKASI LAINNYA
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Jika Pengguna mengikuti salah satu tautan web yang terdapat pada Aplikasi ini, harap diingat bahwa Aplikasi tersebut memiliki kebijakan privasi tersendiri dan kami tidak memberikan tanggung jawab dalam bentuk apapun atas ketentuan-ketentuan maupun jaminan-jaminan yang terdapat dalam kebijakan privasi pada Aplikasi tersebut.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          COOKIES
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Cookies adalah file berukuran kecil yang secara otomatis akan mengambil tempat di dalam perangkat komputer Pengguna, yang berguna untuk mengidentifikasi dan memantau koneksi jaringan Pengguna sehingga Pengguna akan dapat mengakses Layanan Kami secara lebih optimal. Cookies akan membantu kami untuk menelusuri fitur yang paling menarik untuk Pengguna dan jenis konten yang pernah Pengguna kunjungi di waktu lalu. Saat Pengguna mengunjungi Aplikasi ini kembali, cookies akan mempermudah untuk menyesuaikan konten sesuai dengan kebutuhan Pengguna. Cookies tidak melakukan pelacakan terhadap informasi pengguna secara individual, dan semua data cookies kami telah terenkripsi dan tidak dapat dibaca oleh Aplikasi lain.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Walaupun secara setelan semula (default) perangkat komputer dan atau ponsel pintar (smartphone) Pengguna menerima cookies, Pengguna bebas untuk melakukan perubahan terhadap setelan tersebut melalui pengaturan/setting browser Pengguna, dengan memilih untuk menolak mengaktifkan cookies.
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
                Dalam rangka pengembangan Layanan, Kami dapat meminta Pengguna untuk memberikan kami izin dalam mengakses akun media sosial milik Pengguna.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Apabila Pengguna memberikan Kami akses ke data akun media sosial Pengguna, Pengguna setuju bahwa Kami hanya menggunakan data tersebut untuk keperluan pelaksanaan Layanan.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          KEAMANAN DATA PRIBADI
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Setiap Data Pribadi yang Kami peroleh sesuai dengan ketentuan Kebijakan Privasi ini akan dilindungi dengan upaya terbaik Kami melalui perangkat keamanan teruji. Kami akan berupaya sebaik mungkin untuk menghalangi akses ke dalam Data Pribadi oleh pihak yang tidak berwenang. Setiap pengungkapan Data Pribadi kepada pihak ketiga lainnya wajib untuk mendapatkan persetujuan dari para pemilik Data Pribadi tersebut.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          KEWAJIBAN PEMBUKAAN DATA PRIBADI
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Kami dapat diwajibkan oleh peraturan-perundang-undangan yang berlaku untuk membuka Data Pribadi dan informasi terkait Pengguna lainnya kepada pihak ketiga yang berwenang seperti lembaga pemerintah, lembaga kepolisian dan lembaga pengadilan hanya jika ada surat perintah yang sah dari lembaga-lembaga tersebut. Kami akan dengan segera memberitahu Pengguna setidaknya satu hari kalender sebelumnya, sehingga Pengguna dapat mengusahakan suatu tindakan yang dianggap perlu untuk pembukaan data pribadi ini.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Kami PT Numex Teknologi Indonesia dengan ini menyatakan dan menjamin tidak memiliki hak akses ke penyimpanan apapun milik Pengguna, kecuali disepakati lain oleh kedua pihak.
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
                Tidak terdapat pemindahan/pengalihan hak ataupun tanggung jawab serta kewajiban Kami sebagai penyelenggara layanan urunan dana kepada Pengguna. Setiap hak (termasuk namun tidak terbatas pada hak kekayaan intelektual) baik yang Kami miliki atau yang dimiliki oleh Pengguna yang digunakan dalam layanan urun dana milik Kami akan seterusnya menjadi milik masing-masing pihak.
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
          PERNYATAAN PUBLIK
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Pengguna sepakat bahwa setiap pembicaraan dengan Kami akan dilakukan secara rahasia. Pengguna setuju tidak akan memberikan keterangan ataupun pernyataan kepada pers ataupun publik mengenai pembicaraan yang dimaksudkan sehubungan dengan layanan yang Kami sediakan, kecuali apabila telah disepakati dan disetujui oleh Kami terlebih dahulu.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PENOLAKAN UNTUK TUJUAN PEMASARAN
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Pengguna berhak untuk meminta kami agar tidak memanfaatkan Data Pribadi Pengguna untuk tujuan pemasaran. Kami akan memberitahu Pengguna dan meminta persetujuan dari Pengguna sebelum Kami menggunakan Data Pribadi Pengguna untuk tujuan tersebut atau jika kami bermaksud mengungkapkan Data Pribadi Pengguna kepada pihak ketiga manapun untuk tujuan tersebut. Pengguna dapat menggunakan hak Pengguna untuk menolak pengolahan tersebut dengan cara memberikan tanda pada formulir yang terkait yang kami gunakan untuk mengumpulkan data Pengguna. Bahkan setelah Pengguna memberikan persetujuan Pengguna atas Data Pribadi yang akan digunakan untuk tujuan pemasaran, Pengguna dapat, setiap saat setelah itu, menarik persetujuan Pengguna dengan menghubungi kami di hello@landx.id.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          JANGKA WAKTU KEBIJAKAN PRIVASI
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Kebijakan Privasi ini akan berlaku secara terus menerus selama layanan urun dana ini berlangsung, terhitung sejak disetujuinya Kebijakan Privasi ini kecuali diakhiri dengan persetujuan tertulis oleh para pihak.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          KEBERLAKUAN KETENTUAN
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Apabila salah satu atau beberapa ketentuan dalam Kebijakan Privasi ini menjadi tidak berlaku atau tidak dapat dilaksanakan karena melawan ketentuan peraturan perundang-undangan yang berlaku, hal tersebut tidak akan mempengaruhi ketentuan lainnya pada Kebijakan Privasi ini. Kami setuju untuk merubah ketentuan-ketentuan yang berlawanan tersebut sehingga dapat dilaksanakan sesuai dengan peraturan perundang-undangan yang berlaku.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Kami memiliki hak serta kewajiban untuk merubah ketentuan-ketentuan pada Kebijakan Privasi ini untuk alasan tertentu.
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
          Kebijakan Privasi ini mungkin diubah dan/atau diperbaharui dari waktu ke waktu dengan memberikan pemberitahuan terlebih dahulu. LandX menghimbau agar Pengguna membaca secara seksama dan memeriksa halaman Kebijakan Privasi ini dari waktu ke waktu untuk mengetahui perubahan apapun yang dapat terjadi. Dengan tetap mengakses dan menggunakan Aplikasi dan Layanan LandX, maka pengguna menyetujui perubahan-perubahan dalam Kebijakan Privasi ini.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          RISIKO
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Mohon diperhatikan bahwa berbagai jenis investasi yang terdapat dalam situs/aplikasi ini melibatkan berbagai tingkatan risiko dan tidak terdapat jaminan bahwa investasi tertentu cocok, sesuai atau menguntungkan bagi Pengguna. Setiap produk investasi mengandung risiko dan Pengguna wajib mencari informasi sebelum memutuskan keputusan investasi.
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
          Apabila Pengguna memiliki pertanyaan terkait Kebijakan Privasi ini, Pengguna dapat menghubungi Kami di hello@landx.id
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          LAIN-LAIN
        </Typography>
        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Setiap hak dan kewajiban yang ada pada Kebijakan Privasi ini mengikat setiap pihak yang menggunakan Platform LandX.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Setiap perubahan atau modifikasi atas Kebijakan Privasi ini akan diberitahukan kepada pengguna dari Platform LandX sesuai dengan ketentuan pada syarat dan ketentuan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengguna dengan ini sepakat untuk menggunakan Platform LandX dengan penuh tanggung jawab dan dengan secara itikad baik.
              </Typography>
            </li>
          </ol>
        </Grid>
      </Grid>
      <Grid xs={12} md={8} className="menu-description">
        <Typography color="secondary" paragraph={true} style={{ fontWeight: `700`, marginTop: `3rem` }}>
          KEBIJAKAN PRIVASI INI DIBUAT DAN DISETUJUI SECARA ELEKTRONIK SESUAI DENGAN UNDANG-UNDANG NOMOR 11 TAHUN 2008 TENTANG INFORMASI DAN TRANSAKSI ELEKTRONIK DAN PERATURAN-PERATURAN PELAKSANAANNYA DALAM KEADAAN SADAR TANPA ADANYA PAKSAAN/TEKANAN DARI PIHAK MANAPUN.
        </Typography>
        <Typography color="secondary" style={{ fontWeight: `700` }}>
          DENGAN MEMBACA KETENTUAN KEBIJAKAN PRIVASI INI DAN MENJADI PENGGUNA PADA PLATFORM LANDX, DENGAN INI ANDA SETUJU UNTUK TUNDUK PADA KEBIJAKAN PRIVASI INI SERTA PERATURAN OTORTIAS JASA KEUANGAN NOMOR 37/POJK.04/2018 MENGENAI LAYANAN URUN DANA MELALUI PENAWARAN SAHAM BERBASIS TEKNOLOGI INFORMASI (EQUITY CROWDFUNDING) BESERTA SETIAP PERUBAHANNYA DARI WAKTU KE WAKTU DAN PERATURAN-PERATURAN LAINNYA YANG BERLAKU.
        </Typography>
      </Grid>
    </Container>
  </Layout>
)

export default PrivacyPolicy
