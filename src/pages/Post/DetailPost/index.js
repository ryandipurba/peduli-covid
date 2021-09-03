import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loading } from '../../../assets'
import { useHistory } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import('./detail.scss') // Import css

const DetailPost = () => {
  const history = useHistory()
  let { postid } = useParams()
  const [post, setPost] = useState([])
  const [donasi, setDonasi] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const getPost = async () => {
    try {
      await axios.get(`https://peduli-covid-api.herokuapp.com/help/post/${postid}`)
        .then(result => {
          const data = result.data.data
          setPost(data)
          console.log(data);
        })
      setIsLoading(true)
    } catch (e) {
      console.log(e);
    }
  }

  const Submitdonasi = async (id) => {
    const data = {
      admin: "No",
      donasi: donasi
    }
    confirmAlert({
      title: 'Confirm to Donation',
      message: 'do you want to continue this donation',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.put(`https://peduli-covid-api.herokuapp.com/help/post/${id}`, data)
              .then(result => {
                console.log(result);
                history.push('/help/post')
              })
              .catch(err => {
                console.log("eror :", err);
              })
          }
        },
        {
          label: 'No',
          onClick: () => console.log("user tidak setuju")
        }
      ]
    });
  }
  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      {isLoading ?
        <div className="row text-justify">
          <div className="col-md-12">
            <p style={{ fontWeight: "bold" }}>{post.name}, {post.pekerjaan}</p>
            <i className="fab fa-facebook-square mr-3" style={{ fontSize: "25px" }}></i>
            <i className="fab fa-instagram-square" style={{ fontSize: "25px" }}></i>
            <p>{post.deskripsi}.</p>
          </div>
          <div className="col-md-6">
            <img src={post.image} alt="covid" className="img-fluid w-50" />
          </div>
          <div className="col-md-6">
            <p>Kebutuhan : {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(post.kebutuhan)}</p>
            <p>Dana Terkumpul : {((post.terkumpul / post.kebutuhan) * 100).toFixed(1)}%</p>
            <p>No E-Wallet : {post.norek}</p>
            <p style={{ fontWeight: 'bold' }}>Cara Mengirim Dana</p>
            <p className="text-justify">anda dapat melakukan pembayaran dengan mengirim melalui nomor e-wallet yang tertera. jika sudah melakukan pembayaran. <br /> <b>masukan jumlah dana yang dikirim</b></p>
            <div className="input-group mb-3 input-nominal">
              <span className="input-group-text">Rp</span>
              <input type="number" className="form-control" aria-label="Amount Rupiah" value={donasi} onChange={(e) => { setDonasi(e.target.value) }} />
              <span className="input-group-text">.00</span>
              <p className="text-danger form-text">*Pastikan jumlah yang kamu kirim sama dengan yang tertera disini, penting untuk keperluan tracking dana.</p>
            </div>
            <button className="btn btn-primary mb-3 " style={{ width: "200px" }} onClick={() => Submitdonasi(post._id, donasi)}>Donasi</button>
          </div>
        </div>
        : <img src={loading} alt="loading" />}
    </div >
  )
}

export default DetailPost