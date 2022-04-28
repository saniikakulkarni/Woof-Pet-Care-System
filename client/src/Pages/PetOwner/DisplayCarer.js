import React, {useEffect, useState} from 'react'
import Navbar from "../../components/Navbar"

import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import useGeoLocation from '../../hooks/useGeoLocation'

const DisplayCarer = () => {
    // const location = useGeoLocation()

    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token'))
            navigate('/')
    })
    
    const [carers, setCarers] = useState([]);
    const location = useGeoLocation()

    useEffect(() => {
        async function fetchData() {
            const response = await axios.post('/petcarers',{...location.coordinates},
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            setCarers(response.data)
        }
        fetchData()
    },[location])


  return (
    <>
    <Navbar/>
        <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
            <div className="d-flex flex-column text-center mb-5">
                <h1 className="display-4 m-0">Available Pet Carers</h1>
            </div>
            <div className="row pb-3">
                {
                    carers.map((carer) => {
                        return (
                        <div className="col-md-6 col-lg-4 mb-4" key={carer._id}>
                            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5 m-auto">
                                <div class="col-md-4">
                                        <div class="text-center mb-2">
                                            <img alt={carer.image} src="" class="rounded-circle img-responsive mt-2" width="128" height="128"/>
                                        </div>
                                </div>
                                <h3 className="display-5 font-weight-normal text-secondary mb-3">{carer.name}</h3>
                                <p>{carer.email}</p>
                                <p>{carer.mobileNumber}</p>
                                <p>COST: ₹{carer.cost} per day</p>
                                <Link to={`/owner/${carer._id}`} className="btn btn-lg btn-primary px-3 d-none d-lg-block" >Book</Link>
                            </div>
                        </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
    </>
  )
}

export default DisplayCarer