import axios from 'axios';
import React, { useState, useEffect } from 'react'

const RsRujukan = () => {
  const [hospitals, setHospitals] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/info-penting/hospital')
      .then(result => {
        const data = result.data.data
        setHospitals(data)
      })
      .catch(e => {
        console.log("data tidak berhasil diambil");
      })
  }, [])

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>Daftar Rumah Sakit Rujukan COVID 19 di Indonesia</p>
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
            {hospitals.map(item => {
              return (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.provinsi}</td>
                  <td>{item.telp}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default RsRujukan
