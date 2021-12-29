import * as React from "react"
import { Link } from "gatsby"
import { Container, Grid, Typography } from '@mui/material';

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo/seo"
import "../../assets/styling/style.scss"

const TermAndCondition = () => (
  <Layout>
    	<Seo title="Syarat dan Ketentuan" />

    <Container style={{ marginTop: `10rem` }}>
      <Grid xs={12} md={12}>
        <Typography color="primary" className="menu-title">
          Syarat & Ketentuan
        </Typography>
        <Typography color="secondary" className="menu-subtitle">
          Revisi terakhir per tanggal 28 Agustus 2020.
        </Typography>
      </Grid>

      <Grid xs={12} md={8} className="menu-description">
        <Typography color="secondary">
          LandX <b>(“Platform”)</b> dan LandX.id dikelola oleh PT NUMEX TEKNOLOGI INDONESIA <b>("kami")</b>.
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Dengan mengunjungi dan/atau menggunakan Platform LandX, maka baik pengunjung maupun pengguna <b>(“Anda”)</b> dinyatakan telah memahami dan menyepakati semua isi dalam syarat dan ketentuan di bawah ini.
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Kami menyediakan layanan Penggalangan Dana Melalui Penawaran Saham dalam jaringan <i>(online equity crowdfunding)</i> kepada Anda baik melalui Platform maupun aplikasi mobile <b>(“Platform”)</b> berdasarkan Peraturan Otoritas Jasa Keuangan (OJK) No. 37/POJK.04/2018 tentang Layanan Urun Dana Melalui Penawaran Saham Berbasis Teknologi Informasi <i>(Equity Crowdfunding)</i>.
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Kami berhak atas kebijakan untuk mengubah atau memodifikasi sebagian atau keseluruhan dari isi syarat dan ketentuan ini setiap saat, artinya aturan yang berlaku pada halaman ini dapat berubah sewaktu-waktu atas perubahan yang terjadi pada halaman ini, kami akan melakukan pemberitahuan kepada seluruh pengguna Platform antara lain melalui  email, sosial media, maupun melalui Platform ini secara langsung untuk Anda ketahui.
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Aturan yang baru akan mulai berlaku setelah pemberitahuan sudah terpublikasikan atau terkirim ke seluruh pengguna Platform. Kesepakatan di atas tidak berlaku apabila terdapat perubahan karena alasan berdasarkan hukum negara Republik Indonesia, syarat dan ketentuan pada Platform ini akan berubah menyesuaikan dengan peraturan pemerintah yang berlaku.
        </Typography>
        <Typography color="secondary" style={{ marginTop: `2rem` }}>
          Pengguna Platform sangat dianjurkan untuk membaca dengan seksama segala ketentuan di bawah ini karena akan berdampak kepada hak dan kewajiban sebagai pengguna Platform ini. Pertanyaan lainnya seputar LandX dapat Anda tanyakan langsung kepada kami di
          <Link href="mailto:hello@landx.id"> hello@landx.id</Link>
        </Typography>
      </Grid>

      <Grid xs={12} md={8} className="menu-description" style={{ marginTop: `3rem` }}>
        <Typography color="secondary" className="menu-title">
          KETENTUAN UMUM
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
                <strong>Akun</strong> adalah suatu pengaturan (<em>arrangement</em>) antara Penyelenggara Platform dengan Pengunjung Platform atau Pengguna Platform berdasarkan akses yang diberikan oleh Penyelenggara Platform kepada Pengunjung Platform atau Pengguna Platform setelah melakukan pendaftaran data pribadi, yaitu seperti nama pengguna (<em>username</em>) dan kata sandi (<em>password</em>) sehingga Pengunjung Platform atau Pengguna Platform dapat menikmati fitur-fitur yang disediakan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Dana</strong> adalah modal untuk membeli saham Penerbit yang dinyatakan dalam mata uang Rupiah, yang selanjutnya dialokasikan oleh Penerbit untuk menjalankan usahanya.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Rekening Escrow</strong> adalah rekening <em>escrow</em> pada Platform yang disediakan oleh Penyelenggara Platform atas pendaftaran yang dilakukan oleh Pengguna Platform sebagai layanan keuangan elektronik dalam jaringan untuk melakukan penampungan dan/atau penyaluran Dana.
              </Typography>
            </li>
            <li>
              <Typography color="secondary">
                <strong>Konten</strong> adalah segala jenis materi dan/atau muatan yang berkaitan dengan Akun, penawaran saham, transaksi, dan pengaduan.
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. Konten Yang Dilarang adalah segala jenis materi dan/atau muatan yang melanggar ketentuan peraturan perundang-undangan di wilayah Republik Indonesia.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>LandX</strong> adalah Platform yang digunakan untuk melakukan layanan urun dana.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Laporan</strong> adalah pemberitahuan yang disampaikan oleh Pengunjung Platform dan/atau Pengguna Platform kepada Penyelenggara Platform tentang telah atau sedang atau diduga akan terjadinya peristiwa pelanggaran Syarat dan Ketentuan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Lembar Saham</strong> adalah lembar saham sebagai bukti kepemilikan Penerbit dengan setiap hak dan kewajibannya, yang memiliki nominal harga tertentu.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Lot</strong> adalah satuan jumlah saham yang dibeli atau dijual dalam satu transaksi yang merupakan kelipatan minimum pembelian Lembar Saham.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Bank</strong> adalah bank yang bekerjasama dengan Penyelenggara Platform dalam rangka memfasilitasi Pencairan Dana yang menyediakan Escrow kepada Pengguna Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penawaran Saham</strong> adalah suatu usaha Penggalangan Dana baik secara perdana atau setelahnya untuk maksud dan tujuan tertentu yang dilakukan oleh Penerbit untuk menjual saham secara langsung kepada Pemodal melalui jaringan sistem elektronik yang bersifat terbuka. Atas Dana yang didapat dari penjualan saham yang dilakukan Penerbit, akan dialokasikan pada tujuan,termasuk, namun tidak terbatas pada pembelian properti, dengan imbalan (<em>reward</em>) kepemilikan atas saham Penerbit yang memiliki properti beserta keuntungan maupun kerugian atas hasil sewa dan fluktuasi harga properti. Penawaran saham tersebut merupakan penawaran dengan ketentuan:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. penawaran saham dilakukan melalui Penyelenggara Platform yang telah memperoleh izin dari Otoritas Jasa Keuangan;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. penawaran saham dilakukan dalam jangka waktu paling lama 12 (dua belas) bulan; dan
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. total dana yang dihimpun melalui penawaran saham paling banyak Rp 10.000.000.000,00 (sepuluh miliar rupiah);
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penerbit</strong> adalah badan hukum Indonesia berbentuk perseroan terbatas yang menawarkan saham melalui Penyelenggara Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pemodal</strong> adalah pihak yang melakukan pembelian saham Penerbit melalui Penyelenggara Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pencairan Dana</strong> adalah tindakan Penyelenggara Platform mengalihkan (<em>transfer</em>) Dana yang terkumpul dalam:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. Escrow atas nama Pemodal, kepada rekening asal Pemodal; atau
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. Escrow atas nama Penerbit, ke rekening tujuan yang telah ditunjuk penerbit pada saat pendaftaran yang dilakukan atas permohonannya.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penggalangan Dana</strong> adalah proses pengumpulan Dana dari Pemodal oleh penerbit dengan menawarkan saham.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pengunjung Platform</strong> adalah pihak yang mengakses dan memperoleh informasi dari Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Platform</strong> adalah wadah berupa aplikasi dan situs yang digunakan untuk transaksi dan/atau memfasilitasi penyelenggaraan layanan penawaran saham yang dilakukan oleh Penerbit untuk menjual saham secara langsung kepada Pemodal melalui sistem elektronik dengan sifat terbuka, yang dikelola dan disediakan oleh PT NUMEX TEKNOLOGI INDONESIA, yaitu pada aplikasi LandX.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pengguna Platform</strong> adalah Pengunjung Platform yang terdiri dari Penerbit dan Pemodal yang telah terdaftar sebagai pengguna dan memiliki Akun pada Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Pengaduan</strong> adalah Laporan yang disertai permintaan kepada Penyelenggara Platform untuk memeriksa Pengguna Platform yang telah atau sedang atau diduga melakukan pelanggaran Syarat dan Ketentuan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Penyelenggara Platform</strong> adalah badan hukum Indonesia yang menyediakan, mengelola, dan mengoperasikan Layanan Urun Dana.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>POJK Layanan Urun Dana</strong> adalah Peraturan Otoritas Jasa Keuangan No. 37/POJK.04/2018 tanggal 31 Desember 2018 mengenai Layanan Urun Dana melalui Penawaran Saham Berbasis Teknologi Informasi, berikut setiap perubahannya dari waktu ke waktu dan Surat Edaran yang dikeluarkan oleh Otoritas Jasa Keuangan sehubungan dengan aturan tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Syarat dan Ketentuan</strong> adalah syarat dan ketentuan penggunaan Platform yang ditetapkan dan dapat diubah sewaktu-waktu oleh Penyelenggara Platform serta mengikat bagi Pengunjung Platform dan/atau Pengguna Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Update</strong> adalah fitur yang terdapat pada halaman Penawaran Saham yang difungsikan untuk setiap Penerbit agar dapat memberikan pemberitahuan kepada seluruh pemodal melalui <em>email</em> secara otomatis mengenai keadaan terbaru Penawaran Saham, penggunaan dana, serta hal-hal lainnya berkaitan dengan Penawaran Saham tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                <strong>Verifikasi</strong> adalah tindakan pemeriksaan kebenaran dan kelengkapan yang dilakukan oleh Penyelenggara Platform terhadap Akun, Konten dan/atau Pencairan Dana yang didaftarkan, diunggah dan/atau dimohonkan oleh Pengguna Platform, atau untuk keperluan lainnya berdasarkan diskresi penuh Penyelenggara Platform.
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
                Dana yang diperoleh dari Penawaran Saham melalui Platform akan dikenakan biaya administrasi dengan besaran 5% (lima persen). Mohon untuk diingat bahwa:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. LandX tidak mengenakan biaya administrasi ketika pada saat anda membuat halaman untuk melakukan Penawaran Saham Penggalangan Dana.
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. LandX hanya mengenakan biaya administrasi dari Dana yang terkumpul.
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. Perolehan Dana yang ditampilkan pada halaman Penggalangan Dana merupakan total Dana terkumpul sebelum dikenakan biaya administrasi
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam hal terdapat pajak, retribusi dan/atau pungutan lainnya yang dikenakan oleh peraturan perundang-undangan yang berlaku terhadap Dana yang diperoleh dari Penawaran Saham, maka Penyelenggara Platform akan menetapkan biaya tambahan sesuai dengan besaran sebagaimana ditentukan peraturan perundang-undangan yang bersangkutan.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          C. Pengungkapan Secara Sukarela
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Segala pengungkapan (<em>disclosure</em>) oleh Pengunjung Platform atau Pengguna Platform dalam bentuk pertanyaan, pernyataan, komentar, ide, kritik, saran atau informasi pada Platform, yang bukan merupakan pengungkapan yang disyaratkan atau diminta oleh Penyelenggara Platform adalah pengungkapan yang dibuat secara sukarela (<em>voluntary disclosure</em>) dan sepenuhnya merupakan tanggung jawab dari Pengunjung Platform atau Pengguna Platform yang bersangkutan.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          D. Posisi LandX
        </Typography>
        <Typography color="secondary" paragraph={true} style={{ fontStyle: `italic`, fontWeight: `600` }}>
          *LandX Bukanlah Broker/Lembaga Penyalur Amal/Lembaga Keuangan/Kreditor.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          LandX merupakan Platform untuk memfasilitasi transaksi dana antara Penerbit dan Pemodal. LandX tidak bertanggung jawab atas pelaksanaan, atau informasi yang disediakan oleh Penerbit dan Pemodal. LandX dengan ini melepaskan semua tanggung jawab dalam hal tersebut selama diizinkan oleh hukum yang berlaku di Indonesia. Semua informasi di dalam konten Penawaran Saham yang disediakan oleh LandX merupakan bagian dari pemberitahuan, kami tidak menjamin keakuratan, kelengkapan, ketepatan waktu atau kebenaran dari konten yang dibuat oleh penerbit. Oleh karenanya, Anda mengetahui bahwa informasi dan konten yang ada pada halaman Penawaran Saham dalam situs kami merupakan risiko yang Anda tanggung secara pribadi.
        </Typography>
        <Typography color="secondary" paragraph={true}>
          LandX tidak menjamin bahwa setiap Penawaran Saham yang terdapat pada situs kami akan mendapatkan sejumlah dana tertentu atau akan terpenuhi. LandX secara tersirat maupun tersurat tidak selalu mendukung penyelenggaraan sebuah Penawaran Saham. Kami dengan tegas menolak kewajiban atau tanggung jawab atas kegagalan setiap Penawaran Saham atau total dana yang Penerbit tetapkan apabila Penawaran Saham tersebut tidak terpenuhi.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          E. Laporan dan Pengaduan
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengunjung Platform dan Pengguna Platform berhak untuk mengajukan Laporan dan/atau Pengaduan kepada Penyelenggara Platform mengenai dugaan dan/atau peristiwa pelanggaran Syarat dan Ketentuan ini, termasuk, namun tidak terbatas pada:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. Pengunjung Platform atau Pengguna Platform yang memasukkan data dan informasi yang tidak lengkap, tidak benar, menyesatkan dan/atau merupakan pemalsuan;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. Pengunjung Platform atau Pengguna Platform yang memasukkan dan mengunggah Konten Yang Dilarang;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. Penerbit yang menyalahgunakan Dana yang berasal dari Penawaran Saham; dan /atau
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iv. Penerbit yang tidak memenuhi atau hanya memenuhi sebagian dari pelaksanaan Penawaran Saham, atau memenuhi pelaksanaan Penawaran Saham tetapi tidak sesuai dengan yang dijanjikan oleh Penerbit melalui Platform.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Konten Yang Dilarang sebagaimana disebut dalam nomor 1 butir ii di atas termasuk, namun tidak terbatas pada:
              </Typography>
              <Typography color="secondary" paragraph={true}>
                i. Konten negatif (pornografi, perjudian, kekerasan);
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ii. Konten dengan materi kebencian;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iii. Konten gambar grafis yang menimbulkan kengerian;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                iv. Konten yang melanggar hak kekayaan intelektual;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                v. Konten jasa peretasan (<em>hacking</em> dan/atau <em>cracking</em>) dan/atau menyediakan akses tanpa hak atau melawan hukum atas sistem elektronik
              </Typography>
              <Typography color="secondary" paragraph={true}>
                vi. Konten penyediaan dan/atau akses terhadap narkoba, zat adiktif, dan psikotropika
              </Typography>
              <Typography color="secondary" paragraph={true}>
                vii. Konten dengan materi ketidakjujuran, kecurangan atau menyesatkan;
              </Typography>
              <Typography color="secondary" paragraph={true}>
                viii. Konten yang mendukung perdagangan manusia (<em>human trafficking</em>); dan/atau
              </Typography>
              <Typography color="secondary" paragraph={true}>
                ix. Konten penyediaan dan/atau akses terhadap rokok
              </Typography>
              <Typography color="secondary" paragraph={true}>
                x. Konten dengan muatan Politik Praktis, yaitu konten pada setiap Penawaran Saham yang mengandung muatan ajakan untuk memilih individu atau partai politik tertentu, baik yang dilakukan oleh individu maupun badan hukum lainnya.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Laporan dan Pengaduan diajukan oleh Pengunjung Platform atau Pengguna Platform kepada Penyelenggara Platform dapat dilakukan dengan cara mengisi formulir laporan pada halaman penawaran saham dari Penerbit yang bersangkutan.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dengan mengajukan Laporan dan Pengaduan, Pengunjung Platform atau Pengguna Platform menyatakan sepakat dan bersedia untuk dipanggil sebagai saksi untuk dimintakan keterangannya dalam rangka pemeriksaan, termasuk, namun tidak terbatas pada, menghadap ke Penyelenggara Platform, instansi terkait, aparat penegak hukum, dan/atau pengadilan.
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
                Pengguna Platform berhak untuk mengajukan permohonan penonaktifan dan/atau pemutusan dan penghapusan Akun yang terdaftar atas namanya pada Platform kepada Penyedia Platform dengan mengirim email ke
                <Link href="mailto:hello@landx.id"> hello@landx.id</Link>
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Penonaktifan dan/atau pemutusan dan penghapusan Akun dari Pengguna Platform dilakukan dengan memperhatikan kewajiban Penyelenggara Platform untuk melakukan penyimpanan data pribadi sesuai batas waktu yang ditentukan dalam peraturan perundang-undangan yang berlaku sejak tanggal penonaktifan dan/atau pemutusan dan penghapusan Akun tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Penyelenggara Platform berhak untuk melakukan penonaktifan dan/atau pemutusan dan penghapusan Akun dari Pengguna Platform apabila terbukti melanggar Syarat dan Ketentuan ini.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          G. Batasan Penyimpanan Data
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Anda mengetahui bahwa situs milik Penyelenggara Platform memiliki batasan dalam penyediaan layanan kepada seluruh Pengguna Platform, termasuk batasan jangka waktu data atau konten lainnya yang disimpan oleh server LandX atas nama Anda. Karena server kami memiliki kapasitas maksimal untuk menyimpan data seluruh Pengguna Platform. Maka atas alasan tersebut, Anda setuju dan memahami bahwa kami berhak untuk menghapus Akun atau mengakhiri Penawaran Saham atas nama Anda yang sudah tidak aktif dalam jangka waktu tertentu, sebelum melakukan hal tersebut kami akan berusaha memberikan pemberitahuan terlebih dahulu kepada Anda via <em>email</em>.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          H. Syarat Pengguna Platform
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Berusia minimum 18 tahun atau wajib dengan pengawasan dan persetujuan dari orang tua/wali yang sah apabila berusia 13 sampai 17 tahun;
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Pengunjung Platform serta Pengguna Platform situs ini wajib menyatakan diri sebagai seseorang yang cakap di mata hukum sehingga dapat bertanggung jawab atas segala tindakan ataupun kelalaian apabila melanggar syarat dan ketentuan ini;
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Tidak diperkenankan bagi Pengunjung Platform serta Pengguna Platform situs untuk melakukan tindakan yang dapat melanggar ketentuan privasi seperti yang diatur dalam kebijakan privasi pada situs ini.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          I. Notifikasi
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Dengan menjadi Pengguna Platform, Anda memberikan izin kepada Penyeleggara Platform untuk memberikan segala notifikasi melalui media elektronik, termasuk, namun tidak terbatas pada <em>email</em>, layanan pesan singkat (<em>short messaging service</em> atau SMS) dan/atau pesan instan (<em>instant messaging</em>) berdasarkan data-data yang Anda daftarkan pada Platform melalui media tersebut.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          J. Konten Publik
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Anda mengetahui bahwa setiap informasi yang Anda tampilkan pada konten atau layanan kami, dapat diakses oleh publik, seperti nama, nomor telepon, <em>email</em>, dan media sosial. Hal tersebut kami lakukan agar terdapat keterbukaan informasi bagi pengguna situs agar tidak dapat menimbulkan kecurigaan ataupun prasangka lainnya yang tidak dapat dipertanggungjawabkan.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          K. Hukum Kekayaan Intelektual
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Semua Hak Kekayaan Intelektual dalam situs ini dimiliki oleh LandX. Semua informasi dan bahan yang tertera pada situs kami seperti: logo, ikon, kode html, dan kode lainnya dalam situs web ini dilarang untuk dimodifikasi, direproduksi atau diubah dengan cara apapun di luar wilayah situs ini tanpa izin yang dinyatakan oleh LandX. Apabila Anda melanggar hak-hak ini, kami berhak untuk membuat gugatan perdata untuk jumlah keseluruhan kerusakan atau kerugian yang diderita. Pelanggaran terhadap poin ini bisa termasuk dalam tindak pidana.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          L. Pengecualian dan Pelepasan Tanggung jawab
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Penyelenggara Platform akan memberikan upaya terbaiknya untuk setiap penyelesaian masalah terhadap segala sengketa yang timbul karena janji-janji Penerbit terhadap Pemodal sesuai peraturan perundang-undangan yang berlaku.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Apabila Dana telah diberikan oleh Pemodal kepada Penerbit dan/atau pemegang saham dari Penerbit lalu terjadi peristiwa seperti pencurian, penggelapan, atau tindakan apapun yang menyebabkan kehilangan Dana dari Pemodal pada Platform, maka Penyelenggara akan memberikan upaya terbaiknya untuk membantu Pemodal dalam menyelesaikan permasalahan tersebut.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Dalam keadaan apapun, Pengguna Platform akan membayar kerugian kepada Penyelenggara Platform dan/atau menghindarkan Penyelenggara Platform (termasuk petugas, direktur, karyawan, agen, dan lainnya) dari setiap biaya kerugian apapun, kehilangan, pengeluaran atau kerusakan yang berasal dari tuntutan atau klaim pihak ketiga yang timbul dari pelanggaran Pengguna Platform terhadap Syarat dan Ketentuan, dan/atau pelanggaran terhadap hak dari pihak ketiga.
              </Typography>
            </li>
            <li>
              <Typography color="secondary" paragraph={true}>
                Apabila di kemudian hari Anda sebagai pengguna Platform menemukan atau mendapati bahwa terdapat Penawaran Saham yang mencurigakan atau berindikasi penipuan, Anda setuju untuk membantu dan bekerjasama dengan Penyelenggara Platform untuk melaporkan kepada kami dan ikut serta membantu menyelesaikan perkara tersebut.
              </Typography>
            </li>
          </ol>
        </Grid>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          LANDX TIDAK MEMBERIKAN JAMINAN DAN/ATAU GANTI RUGI DALAM BENTUK APAPUN ATAS PENGGALANGAN DANA YANG DILAKUKAN PADA SITUS KAMI.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          M. Hak Cipta dan Merek Dagang
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Semua fitur yang terdapat di dalam situs ini adalah milik <strong>PT NUMEX TEKNOLOGI INDONESIA</strong> dan dilindungi oleh ketentuan hukum Indonesia yang terdapat dalam Undang-undang HKI (Hak Kekayaan Intelektual). Oleh karena itu, pengguna situs tidak diperkenankan untuk menyalahgunakan fitur yang terdapat dalam situs ini untuk kepentingan pribadi, kolektif maupun komersil.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          N. Hukum yang Mengatur dan Yurisdiksi
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Syarat dan Ketentuan ini diatur, ditafsirkan dan dilaksanakan berdasarkan hukum Negara Kesatuan Republik Indonesia.
        </Typography>
        <Typography color="secondary" paragraph={true} style={{ fontWeight: `600` }}>
          Setiap orang dengan sengaja, dan tanpa hak menyebarkan berita bohong dan menyesatkan yang mengakibatkan kerugian konsumen dalam Transaksi Elektronik akan terjerat ketentuan pidana yang tertulis pada Pasal 28 Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE).
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} style={{ fontWeight: `600`, marginTop: `3rem` }}>
          O. Sanksi
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Apabila pengguna situs terbukti melanggar Syarat dan Ketentuan yang telah dibuat baik secara sengaja maupun tidak dilakukan secara sebagian maupun secara keseluruhan, maka:
        </Typography>

        <Grid sx={{ marginLeft: `2rem` }}>
          <ol style={{ listStyleType: `number`, color: `#5e798d` }}>
            <li>
              <Typography color="secondary" paragraph={true}>
                Kami akan memberitahu/melakukan notifikasi melalui pesan/<em>email</em> maupun telpon kepada Pengguna Platform mengenai ketentuan apa yang dilanggar.
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
          P. Penyelesaian Sengketa dan Keadaan Terpaksa
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
                Semua sengketa yang timbul dari dan/atau sehubungan dengan Syarat dan Ketentuan ini dan/atau pelaksanaan Syarat dan Ketentuan ini, yang tidak dapat diselesaikan secara musyawarah, baik mengenai cidera janji maupun perbuatan melawan hukum, termasuk mengenai pengakhiran dan/atau keabsahan Syarat dan Ketentuan ini, akan diselesaikan dan diputus melalui Badan Arbitrase Nasional Indonesia yang saat ini beralamat di Wahana Graha lantai 1 & 2, Jalan Mampang Prapatan No. 2, Duren Tiga, Pancoran, Indonesia. Meskipun terdapat suatu perselisihan atau sengketa, Pengunjung Platform atau Pengguna Platform harus tetap memenuhi kewajibannya berdasarkan Syarat dan Ketentuan ini, tanpa mengurangi keberlakuan keputusan arbitrase final.
              </Typography>
            </li>
          </ol>
        </Grid>
        <Typography color="secondary" paragraph={true}>
          Anda memahami dan mengerti bahwa Platform kami dapat berhenti beroperasi dikarenakan kejadian di luar kemampuan manusia dan atau tidak dapat dihindarkan seperti terjadi peperangan, kerusuhan, kebakaran, bencana alam, permogokan dan bencana lainnya yang dinyatakan oleh instansi berwenang.
        </Typography>

        <Typography color="secondary" variant="h5" paragraph={true} align="center" style={{ fontWeight: `600`, marginTop: `3rem` }}>
          PENUTUP
        </Typography>
        <Typography color="secondary" paragraph={true}>
          Syarat dan Ketentuan ini dibuat dan diberikan persetujuan secara elektronik oleh para pihak sesuai ketentuan dalam Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik dan peraturan-peraturan pelaksanaannya dalam keadaan sehat dan sadar serta tanpa ada paksaan dari pihak manapun juga. Demikian syarat dan ketentuan penggunaan Platform, dengan menggunakan situs ini maka pengguna dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam syarat dan ketentuan ini. Atas perhatian dan kesepakatan Anda, kami sampaikan terimakasih.
        </Typography>
      </Grid>
    </Container>
  </Layout>
)

export default TermAndCondition
