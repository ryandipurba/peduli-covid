import React from 'react'
import { useHistory } from 'react-router-dom'
const InstruksiDonatur = () => {
  const history = useHistory()
  return (
    <div className="intruksi">
      <p>4 catatan penting sebelum memulai berdonasi:</p>
      <ol style={{ paddingLeft: "15px" }} className="text-justify">
        <li><span>Saat memulai, kamu akan mendapatkan daftar penerima dana yang bisa kamu pilih.</span> kamu dapat memfilter daftar tersebut berdasarkan provinsi.</li>
        <li>
          <span> Peduli Covid adalah community-driven platform. Kami mengajak kalian untuk turut melakukan verifikasi</span> penerima dana yang disediakan di setiap laman profil penerima dana.
        </li>
        <li>
          <span>Kamu bebas menentukan jumlah dana bantuan.</span> Tidak ada jumlah minimum dalam pemberian dana karena Bagirata bersifat patungan. Kami menyarankan untuk membagi rata bantuanmu secara egaliter ke beberapa orang.
        </li>
        <li>
          <span>Ketika hendak mengirim dana,</span> buka aplikasi w-wallet kamu sesuai yang direkomendasikan kami untuk melakukan proses pengiriman dana secara manual disana. semua transaksi keuangan dilakukan diluar platform Peduli Covid
        </li>
      </ol>
      <button className="btn btn-primary" onClick={() => history.push('/help/post')}>Mulai berdonasi</button>
    </div>
  )
}

export default InstruksiDonatur
