import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './create-post.scss'

const CreatePost = () => {

  const history = useHistory()
  const [image, setImage] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [name, setName] = useState('')
  const [pekerjaan, setPekerjaan] = useState('')
  const [alamat, setAlamat] = useState('')
  const [provinsi, setProvinsi] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [kebutuhan, setKebutuhan] = useState('')
  const [norek, setNorek] = useState('')
  const [fb, setfb] = useState('')
  const [ig, setIg] = useState('')

  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "ftdg3u2e")
    data.append("cloud_name", "dnxzsco1h")
    fetch("https://api.cloudinary.com/v1_1/dnxzsco1h/image/upload", {
      method: "post",
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data.url)
        setUrlImage(data.url)
      })
      .catch(err => console.log(err))
  }

  const handleSubmit = async (event) => {
    await uploadImage()
    const data = {
      name: name,
      userId: sessionStorage.userId,
      pekerjaan: pekerjaan,
      alamat: alamat,
      provinsi: provinsi,
      deskripsi: deskripsi,
      kebutuhan: kebutuhan,
      norek: norek,
      image: urlImage,
      sosmed: {
        fb: fb,
        ig: ig
      }
    }
    event.preventDefault()
    await axios.post('https://peduli-covid-api.herokuapp.com/help/create-post', data)
      .then(result => {
        if (result) {
          if (result.data) {
            setTimeout(() => {
              history.push('/help/post')
            }, 1000)
          }
        }
      })
      .catch(e => {
        console.log("eror");
      })
  }

  return (
    <div className="create-post">
      <p>Minta bantuan</p>
      <form style={{ marginBottom: "50px" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nama</label>
          <input type="text" className="form-control" id="name" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="pekerjaan" className="form-label">Perkerjaan</label>
          <input type="text" className="form-control" id="pekerjaan" placeholder="pekerjaan" required value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="alamat" className="form-label">Alamat</label>
          <input type="text" className="form-control" id="alamat" placeholder="alamat" required value={alamat} onChange={(e) => setAlamat(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="provinsi" className="form-label">Provinsi</label>
          <input type="text" className="form-control" id="provinsi" placeholder="provinsi" required value={provinsi} onChange={(e) => setProvinsi(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="deskripsi" className="form-label">Deskripsi</label>
          <textarea className="form-control" id="deskripsi" placeholder="deskripsi" required value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="kebutuhan" className="form-label">kebutuhan</label>
          <textarea className="form-control" id="kebutuhan" placeholder="kebutuhan" required value={kebutuhan} onChange={(e) => setKebutuhan(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="norek" className="form-label">Nomor E-Wallet Dana</label>
          <input type="number" className="form-control" id="provinsi" placeholder="exp : 082278238912" required min="12" value={norek} onChange={(e) => setNorek(e.target.value)} />
        </div>
        <div className="mb-3 ">
          <label className="form-label">Social Media</label>
          <div className='social-media '>
            <input type="text" className="form-control" placeholder="link profile facebook" required value={fb} onChange={(e) => setfb(e.target.value)} />&nbsp; <br />
            <input type="text" className="form-control" placeholder="link profile instagram" required value={ig} onChange={(e) => setIg(e.target.value)} />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Bukti Surat Positif Covid</label><br />
          <input type="file" id="formFile" onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form >
    </div >
  )
}

export default CreatePost

// const { name, pekerjaan, alamat, provinsi, deskripsi, kebutuhan, norek, image, fb, ig, userId 