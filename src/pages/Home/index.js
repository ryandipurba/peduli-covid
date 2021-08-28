import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './home.scss'

const Home = () => {
  const [coronaIndo, setCoronaIndo] = useState()
  useEffect(() => {
    axios.get('https://dekontaminasi.com/api/id/covid19/stats')
      .then(result => {
        console.log(result)
      })
      .catch(e => {
        console.log("data tidak berhasil diambil");
      })
  }, [])

  return (
    <div className="home">
      <h3 className='mb-5'>Situasi Virus Corona (COVID-19) di Indonesia</h3>
      <div className="row">
        <div className="col-md-4 col-xs-12 mb-2">
          <div className="card bg-danger " style={{ width: "18rem", backgroundColor: "#F93C5B" }}>
            <div className="card-body">
              <h5 className="card-title">Total Positif</h5>
              <h2>214,962,872</h2>
              <p className="card-text">Orang</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 mb-2">
          <div className="card " style={{ width: "18rem", backgroundColor: "#21B5A0" }}>
            <div className="card-body">
              <h5 className="card-title">Total Sembuh</h5>
              <h2>214,962,872</h2>
              <p className="card-text">Orang</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 mb-2">
          <div className="card" style={{ width: "18rem", backgroundColor: '#D43F8D' }}>
            <div className="card-body">
              <h5 className="card-title">Total Meninggal</h5>
              <h2>214,962,872</h2>
              <p className="card-text">Orang</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 my-5">
          <p>Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</p>
        </div>
      </div>
    </div>
  )
}

export default Home
