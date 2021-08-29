import React from 'react'
import { useHistory } from 'react-router-dom'
import './intruksi-penerima.scss'
const InstruksiPenerima = () => {
  const history = useHistory()
  return (
    <div className="intruksi">
      <p>Instruksi pendaftaran penerima dana:</p>
      <ol style={{ paddingLeft: "15px" }} className="text-justify">
        <li><span>Baca Syarat & Ketentuan</span> Penerima Dana Peduli Covid secara seksama agar kamu mengerti cara kerja dan tujuan dari platform ini.</li>
        <li>
          <span> Isi Form Penerima Dana</span> dengan teliti sesuai dengan instruksi yang disediakan. Selain mengisi data diri, profesi dan latar belakang pekerjaan, pastikan kamu memiliki salah satu dari e-wallet yang bisa digunakan di Peduli Covid: Gopay, yang didaftarkan sesuai dengan identitas asli. Selain itu kamu juga wajib menyertakan akun media sosial yang aktif dan terbuka secara publik.
        </li>
        <li>
          <span>Tunggu status verifikasi</span> pendaftaranmu dengan sabar. Karena kami harus memverifikasi secara manual satu per satu. Tunggulah 2-3 hari setelah kamu mengisi form untuk melihat hasil verifikasinya.
        </li>
        <li>
          <span>Cek status pendaftaranmu</span> melalui tombol “Cek Status Verifikasi” yang ada di bagian bawah halaman ini.
          <ul>
            <li>Jika berstatus <span>DALAM PROSES</span>: Harap tunggu proses verifikasi dan cek lagi setelah 3-4 hari dari kamu mengisi form.</li>
            <li>Jika berstatus <span>LOLOS</span>: Informasi kamu berhasil ditampilkan di Peduli Covid. Kamu tidak perlu melakukan apa-apa. Jika ada dana bantuan masuk akan diberitahu dari notifikasi aplikasi e-wallet.</li>
            <li>Jika berstatus <span>TIDAK LOLOS</span>:Kamu tidak diperbolehkan lagi untuk mendaftar ulang. Baca Syarat & Ketentuan dan instruksi pengisian dengan teliti.</li>
          </ul>
        </li>
        <li><span>jika kamu lolos bukan berarti kamu langsung menerima bantuan.</span> Melainkan informasi dan identitasmu hanya akan ditampilkan di situs Peduli Covid, sebagai penerima dana. Ada ratusan pengguna yang masuk ke situs Peduli Covid setiap harinya. Mereka memiliki niat yang besar untuk memberikan dana bantuan dengan jumlah yang beragam. Maka, seluruh keputusan atas siapa, berapa dan kapan dana bantuan akan kamu dapatkan ada di tangan para pengirim dana, dan diluar kuasa Peduli Covid.</li>
      </ol>
      <button className="btn btn-primary" onClick={() => history.push('/help/create-post')}>Daftar</button>
    </div>
  )
}

export default InstruksiPenerima
