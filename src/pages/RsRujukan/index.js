
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { SearchBar } from '../../components';
import './rs-rujukan.scss'

const RsRujukan = () => {
  const [hospitals, setHospitals] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  useEffect(() => {
    axios.get('https://peduli-covid-api.herokuapp.com/info-penting/hospital')
      .then(result => {
        const data = result.data.data
        setHospitals(data)
        console.log(data);
      })
      .catch(e => {
        console.log("data tidak berhasil diambil");
      })
  }, [])

  const items = hospitals.filter((data) => {
    if (searchKeyword == null)
      return data
    else if (data.provinsi.toLowerCase().includes(searchKeyword.toLowerCase())) {
      return data
    }
    return false
  }).map(data => {
    return (
      <tr key={data._id}>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.provinsi}</td>
        <td>{data.telp}</td>
      </tr>
    )
  })


  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>Daftar Rumah Sakit Rujukan COVID 19 di Indonesia</p>
      <SearchBar keyword="seacrh by province" value={searchKeyword} onChange={(e) => { setSearchKeyword(e.target.value) }} />
      <div >
        <table className="table table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th>Rumah Sakit</th>
              <th>Alamat</th>
              <th>Provinsi</th>
              <th>Telepon</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default RsRujukan
