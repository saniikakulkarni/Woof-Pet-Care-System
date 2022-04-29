import React, {useEffect, useState} from 'react'
import Navbar from "../../components/Navbar"

import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import useGeoLocation from '../../hooks/useGeoLocation'
import defaultProfile from "../../images/user_profile.png"

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
                    carers.length!==0 ? (carers.map((carer) => {
                        return (
                        <div className="col-md-6 col-lg-4 mb-4" key={carer._id}>
                            <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5 m-auto">
                                <div className="col-md-4 col-sm-4 col-lg-12">
                                    <div className="text-center mb-2 center mx-auto">
                                        <img alt="Pet carer" src={ carer.avatar ? (
                                        `data:image/jpeg;base64,${carer.avatar}` ) : ( defaultProfile
                                        )} className="rounded-circle img-responsive center-block d-block mx-auto" width="150" height="150"/>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="display-5 font-weight-normal text-secondary mt-2">{carer.name}</h3>
                                       <span className='text-primary'>{carer.email}</span>  <br/>
                                        {carer.mobileNumber} <br/>
                                </div>
                                <p>COST: ₹{carer.cost} per day</p>
                                <Link to={`/owner/${carer._id}`} className="btn btn-lg btn-primary px-3 d-none d-lg-block" >Book</Link>
                            </div>
                        </div>
                        )
                    })) : (
                       <h1>"No pet carer available"</h1>    
                    )
                }
                
            </div>
        </div>
    </div>
    </>
  )
}

export default DisplayCarer