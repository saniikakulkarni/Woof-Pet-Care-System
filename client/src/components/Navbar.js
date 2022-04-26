import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios'
import Dropdown from 'react-bootstrap/Dropdown'
const Navbar = () => {

    const navigate = useNavigate()

    const [userToken,setUserToken] = useState('')
    const [userDetails,setUserDetails] = useState({})
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setUserToken(token)
        }
    },[])

    const handleLogout = async () => {
        try{
            await axios.post("/users/logout", {},{ headers: { Authorization: `Bearer ${userToken}` } })
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            navigate("/owner/login")
        } catch (error) {
            console.log(error)
        } 
    }

    return (
        <>
        {/* <!-- Navbar Start --> */}
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                <a href="" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-5 text-capitalize font-italic text-white"><span className="text-primary">Woof</span></h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <Link to="/" className="navbar-brand d-none d-lg-block">
                            <h1 className="m-0 display-5 text-capitalize"><span className="text-primary">Woof</span></h1>
                        </Link>
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/service" className="nav-item nav-link">Services</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                    {
                        userToken ? (
                            <button onClick={handleLogout} className="btn btn-lg btn-primary px-3 d-none d-lg-block mx-2">Logout </button>
                        ) : ( 
                            <>
                                <Link to='/owner/login' className="btn btn-lg btn-primary px-3 d-none d-lg-block mx-2">Pet Owner Login</Link>
                                <Link to='/carer/login' className="btn btn-lg btn-primary px-3 d-none d-lg-block mx-2">Pet Carer Login</Link>
                            </>
                        )
                    }
            </div>
        </nav>
    </div>
    {/* <!-- Navbar End --> */}
    </>
  )}

export default Navbar