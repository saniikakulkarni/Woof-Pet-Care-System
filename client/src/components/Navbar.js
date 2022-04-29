import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios'
import { Nav, Container } from 'react-bootstrap';
import {Navbar as NavBar} from 'react-bootstrap';


const Navbar = () => {

    const navigate = useNavigate()

    const [token,setToken] = useState('')
    const [type,setType] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setToken(token)
            setType(localStorage['type'])
        }
    },[])

    const handleLogout = async () => {
        try{
            const type = localStorage.getItem('type')
            if(type==='owner') {
                await axios.post("/users/logout", {},{ headers: { Authorization: `Bearer ${token}` } })
            } else if( type==='carer') {
                await axios.post("/petcarers/logout", {},{ headers: { Authorization: `Bearer ${token}` } })
            }
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            localStorage.removeItem('type')
            if(type==='owner')
                navigate("/owner/login")
            else if(type==='carer')
                navigate("/carer/login")
        } catch (error) {
            console.log(error)
        } 
    }

    

    return (
        <>
        {/* <!-- Navbar Start --> */}
        <NavBar className="bg-dark navbar-dark py-3 py-lg-0 px-lg-5" expand="lg">
            <Container fluid>
                <NavBar.Brand href="/" ><h1 className="m-0 display-5 text-capitalize font-italic text-white"><span className="text-primary">Woof</span></h1></NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="d-flex justify-content-between">
                <Nav className="me-auto">
                    
                        {
                            (token && type==='owner') && 
                            <>
                                <Nav.Link><Link to="/service" className="nav-item nav-link">Services</Link></Nav.Link>
                                <Nav.Link><Link to="/owner/history" className="nav-item nav-link">Bookings</Link></Nav.Link>
                            </>
                        }
                        <Nav.Link><Link to="/about" className="nav-item nav-link">About</Link></Nav.Link>
                        {
                            (token && type==='owner') && <Nav.Link><Link to="/owner/profile" className="nav-item nav-link">Profile</Link></Nav.Link>
                        }
                        {
                            (token && type==='carer') && 
                            <>
                                <Nav.Link><Link to="/carer/profile" className="nav-item nav-link">Profile</Link></Nav.Link>
                                <Nav.Link><Link to="/carer/bookingdetails" className="nav-item nav-link">Bookings</Link></Nav.Link>
                            </>
                        }                   
                </Nav>
                <Nav style={{"display": 'flex', 'justify-content': 'flex-end'}}>
                    {
                        token ? (
                            <button onClick={handleLogout} className="btn btn-lg btn-primary px-3 d-none d-lg-block mx-2">Logout </button>
                        ) : ( 
                            <>
                                <Link to='/owner/login' className="btn btn-lg btn-primary d-none d-lg-block mx-2">Pet Owner Login</Link>
                                <Link to='/carer/login' className="btn btn-lg btn-primary d-none d-lg-block mx-2">Pet Carer Login</Link>
                            </>
                        )
                    }
                </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
        {/* <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                <Link to="/" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-5 text-capitalize font-italic text-white"><span className="text-primary">Woof</span></h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3 navbarCollapse">
                    <div className="collapse navbar-collapse justify-content-between px-3 navbarCollapse">
                        <Link to="/" className="navbar-brand d-none d-lg-block">
                            <h1 className="m-0 display-5 text-capitalize"><span className="text-primary">Woof</span></h1>
                        </Link>
                        <div className="navbar-nav mr-auto py-0">
                            {
                                (token && type==='owner') && 
                                <>
                                    <Link to="/service" className="nav-item nav-link">Services</Link>
                                    <Link to="/owner/history" className="nav-item nav-link">Bookings</Link>
                                </>
                            }
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            {
                                (token && type==='owner') && <Link to="/owner/profile" className="nav-item nav-link">Profile</Link>
                            }
                            {
                                (token && type==='carer') && 
                                <>
                                    <Link to="/carer/profile" className="nav-item nav-link">Profile</Link>
                                    <Link to="/carer/bookingdetails" className="nav-item nav-link">Bookings</Link>
                                </>
                            }
                        </div>
                    </div>
                    {
                        token ? (
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
    </div> */}
    {/* <!-- Navbar End --> */}
    </>
  )}

export default Navbar