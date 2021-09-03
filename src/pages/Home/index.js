// import axios from 'axios'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './home.scss'

const Home = () => {

  const [indoSembuh, setIndoSembuh] = useState()
  const [indoMeninggal, setIndoMeninggal] = useState()
  const [indoPositif, setIndoPositif] = useState()
  const [caseProvinsi, setCaseProvinsi] = useState([])

  const getCase = async () => {
    try {
      await axios.get('https://peduli-covid-api.herokuapp.com/covid/case/indonesia')
        .then(result => {
          setIndoSembuh(result.data.data[0].dirawat)
          setIndoMeninggal(result.data.data[0].meninggal)
          setIndoPositif(result.data.data[0].positif);
        })

      await axios.get('https://peduli-covid-api.herokuapp.com/covid/case/provinsi')
        .then(result => {
          setCaseProvinsi(result.data.data);
        })

    } catch (e) {
      console.log(e);
    }
  }
  const items = caseProvinsi.map(element => {
    return (
      <tr key={element.attributes.FID}>
        <td>{element.attributes.Provinsi}</td>
        <td>{element.attributes.Kasus_Posi}</td>
        <td>{element.attributes.Kasus_Semb}</td>
        <td>{element.attributes.Kasus_Meni}</td>
      </tr>

    )
  })

  useEffect(() => {
    getCase()
  }, [])

  return (
    <div className="home">
      <h3 className='mb-5'>Situasi Virus Corona (COVID-19) di Indonesia</h3>
      <div className="row">
        <div className="col-md-4 col-xs-12 mb-2">
          <div className="card bg-danger " style={{ width: "18rem", backgroundColor: "#F93C5B" }}>
            <div className="card-body">
              <h5 className="card-title">Total Positif</h5>
              <h2>{indoPositif}</h2>
              <p className="card-text">Orang</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 mb-2">
          <div className="card " style={{ width: "18rem", backgroundColor: "#21B5A0" }}>
            <div className="card-body">
              <h5 className="card-title">Total Sembuh</h5>
              <h2>{indoSembuh}</h2>
              <p className="card-text">Orang</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 mb-2">
          <div className="card" style={{ width: "18rem", backgroundColor: '#D43F8D' }}>
            <div className="card-body">
              <h5 className="card-title">Total Meninggal</h5>
              <h2>{indoMeninggal}</h2>
              <p className="card-text">Orang</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 my-5">
          <p>Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</p>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
