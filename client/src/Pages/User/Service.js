import React from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Notification from "../../components/Notification"

import { Link} from 'react-router-dom';

const Service = () => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
            <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-secondary mb-3">Our Services</h4>
                <h1 className="display-4 m-0"><span className="text-primary">Premium</span> Pet Services</h1>
            </div>
            <div className="row pb-3">
                <Link to="/" className="col-md-6 mb-4"> 
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">Pet Boarding</h3>
                        <p>Find a perfect care taker for your pet</p>
                    </div>
                </Link>
                <Link to="/" className="col-md-6 mb-4">
                    <div className="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 className="flaticon-cat display-3 font-weight-normal text-secondary mb-3"></h3>
                        <h3 className="mb-3">Per Tracker</h3>
                        <p>Track your pet whenever you want.</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Service