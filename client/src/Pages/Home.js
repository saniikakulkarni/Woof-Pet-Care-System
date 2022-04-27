import { useState, useEffect } from 'react'
import "../styles/style.css" 
import { Link, useNavigate } from 'react-router-dom';

import homebg from "../static/home.jpg"
import Navbar from '../components/Navbar';
const Home = () => {

    const [token,setToken] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setToken(token)
            
        }
    },[])

  return (
    <>
    <Navbar/>
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={homebg} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{"maxWidth": "900px"}}>
                            <h1 className="display-3 text-white mb-3">Keep Your Pet Happy</h1>
                            <h5 className="text-white mb-3 d-none d-sm-block">Take a hassle free journey without worrying about your pets.</h5>
                            {
                                
                                    token ?  ( 
                                        ( localStorage.getItem('type')==='owner' ) ? (
                                            <Link to='/service' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4 m-4">Premium Services</Link>
                                        ) : (
                                            <Link to='/carer/bookingdetails' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4 m-4">View Booking Details</Link>
                                        )
                                    ) : (
                                        <>
                                            <Link to='/owner/signup' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4 m-4">Pet Owner Signup</Link>
                                            <Link to='/carer/signup' className="btn btn-lg btn-primary mt-3 mt-md-4 px-4 m-4">Pet Carer Signup</Link>
                                        </>
                                    )
                                 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home