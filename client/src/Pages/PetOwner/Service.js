import React, {useEffect} from 'react'
import Navbar from "../../components/Navbar"

import { Link, useNavigate } from 'react-router-dom';

const Service = () => {

    const navigate = useNavigate()
    useEffect(() => {
        const tok = localStorage.getItem('token')
        if(!tok){
            navigate("/")
        }
    },[])

  return (
    <>
    <Navbar/>
    <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
            <div className="d-flex flex-column text-center mb-5">
                <h1 className="display-4 m-0"><span className="text-primary">Premium</span> Pet Services</h1>
            </div>
            <div className="row pb-3">
                <Link to="/owner/displaycarer" className="col-md-6 mb-4 nav-link"> 
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <span className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></span>
                        <h3 className="mb-3">Pet Boarding</h3>
                        <p>Find a perfect care taker for your pet</p>
                    </div>
                </Link>
                <Link to="/" className="col-md-6 mb-4 nav-link">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <span className="flaticon-cat display-3 font-weight-normal text-secondary mb-3"></span>
                        <h3 className="mb-3">Per Tracker</h3>
                        <p>Track your pet whenever you want.</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service