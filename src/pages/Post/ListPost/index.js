import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { loading } from '../../../assets'
import { SearchBar } from '../../../components'


const ListPost = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [helpPost, setHelpPost] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const history = useHistory()


  const getPost = async () => {
    try {
      await axios.get('https://peduli-covid-api.herokuapp.com/help/posts')
        .then(result => {
          const data = result.data.data
          setHelpPost(data)
          console.log(data);
        })

      setIsLoading(true)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  const items = helpPost.filter((data) => {
    if (searchKeyword == null)
      return data
    else if (data.provinsi.toLowerCase().includes(searchKeyword.toLowerCase())) {
      return data
    }
    return false
  }).filter(data => data.status === true).map(data => {
    return (
      <div className="card col-md-12 my-3" style={{ width: "18rem" }} key={data._id}>
        <div className="card-body">
          <h5 className="card-title">{data.name} , {data.pekerjaan} , {data.alamat} - {data.provinsi} </h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.deskripsi}</h6>
          <p className="card-text">kebutuhan Minimum : {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.kebutuhan)}</p>
          <p className="card-text">Dana Terkumpul : {((data.terkumpul / data.kebutuhan) * 100).toFixed(1)}%</p>
        </div>
        <button className="btn btn-primary mx-3 mb-3 " style={{ width: "200px" }} onClick={() => history.push(`/help/post/${data._id}`)}>Beri Bantuan</button>
      </div >
    )
  })

  return (
    <div className="list-post">
      <p style={{ fontWeight: "bold" }} >Berikut daftar warga yang butuh dukungan finansialmu</p>
      <SearchBar keyword="seacrh by province" value={searchKeyword} onChange={(e) => { setSearchKeyword(e.target.value) }} />
      <div className="row m-0">
        {isLoading ? items : <img src={loading} alt="loading" />}
      </div>
    </div>
  )
}

export default ListPost
