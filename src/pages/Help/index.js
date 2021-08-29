import React from 'react'
import { useHistory } from 'react-router-dom'
import { logo } from '../../assets'

const Help = () => {
  const history = useHistory()
  const handlePenerima = () => {
    if (!sessionStorage.token) {
      alert("silahkan login terlebih dahulu")
      history.push('/login')
    } else {
      history.push('/help/intruksi-penerima')
    }
  }

  const handleDonatur = () => {
    if (!sessionStorage.token) {
      alert("silahkan login terlebih dahulu")
      history.push('/login')
    } else {
      history.push('/help/intruksi-donatur')
    }
  }


  return (
    <div>
      <div className='text-center'>
        <img src={logo} alt="logo" className="img-fluid" />
      </div>
      <div className="text-justify">
        <p style={{ fontWeight: "bold" }}>
          Peduli covid adalah platform berbagi rezeki / memberikan bantuan antar warga untuk membantu kondisi finansial para pekerja yang terkena dampak ekonomi di tengah ketidakpastian pandemi COVID-19. Upaya ini didedikasikan untuk mendukung kelompok kerja yang kehilangan pendapatan tetap akibat pandemi:
        </p>
        <ul style={{ padding: "0px" }}>
          <li>Pekerja di sektor jasa, transportasi, hospitality, pariwisata, kesehatan & farmasi, pendidikan, dan ritel yang harus tutup dan dipaksa mengambil unpaid leave atau PHK sepihak.</li>
          <li> Pekerja di sektor media, kreatif, seni pertunjukan, budaya, hiburan dan gig economy yang terkena penutupan usaha, pembatalan project, izin pembuatan acara dan hambatan lainnya.</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button className="btn btn-primary d-block w-100 my-2" onClick={handleDonatur}>mulai memberikan bantuan</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-secondary d-block w-100 my-2" onClick={handlePenerima}>daftar sebagai penerima bantuan</button>
        </div>
      </div>
    </div>
  )
}

export default Help
