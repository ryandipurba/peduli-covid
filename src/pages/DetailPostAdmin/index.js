import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { loading } from '../../assets' // Import css
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import('./detail.scss')
import('./detail.scss') // Import css

const DetailPostAdmin = () => {
  const history = useHistory()
  let { postid } = useParams()
  const [post, setPost] = useState([])
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

  const publish = async (id) => {
    const data = {
      admin: "admin"
    }
    confirmAlert({
      title: 'Confirm to publish',
      message: 'do you want to continue publish this post',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.put(`https://peduli-covid-api.herokuapp.com/help/post/${id}`, data)
              .then(result => {
                console.log(result);
                getPost()
                setIsLoading(true)
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
            {post.status ?
              <div className="alert alert-primary" role="alert">
                Post sudah di publish
              </div>
              :
              <button className="btn btn-primary mb-3 " style={{ width: "200px" }} onClick={() => publish(post._id)}>Publish</button>}

          </div>
        </div>
        : <img src={loading} alt="loading" />}
    </div >
  )
}

export default DetailPostAdmin