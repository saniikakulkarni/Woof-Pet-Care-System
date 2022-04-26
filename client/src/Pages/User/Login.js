import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

// components
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Notification from "../../components/Notification"

const Login = () => {
    
    // If user alredaye logged in, navigate to home
    const navigate  = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate("/")
        }
    }, [])
  

  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8080/users/login',{
        method: "POST",
        headers:{
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json()
    if(data.user && data.token){
        console.log(data)
        Notification("Success", "Login Successful!", "success")  
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.id)
        navigate("/")
        setUser({ email: '', password: '' })
    }else{
        Notification("Warning", "Could not login.", "danger")
        setUser({ email: '', password: '' })
    }
    //console.log(data)
    
    };

  return (
    <>
    <Navbar/>
    <div className="container-fluid bg-light pt-3">
        <div className="container py-5">
        </div>
    </div>
    <div className="container-fluid">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="bg-primary py-5 px-4 px-sm-5">
                        <form className="py-5">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Email" required="required" id='email' name='email' value={user.email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control border-0 p-4" placeholder="Password" required="required" id='password' name='password' value={user.password} onChange={handleChange}/>
                            </div>
                            
                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3" type="submit" onClick={handleSubmit} >Login</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h1 className="display-4 mb-4">Login</h1>
                    <p>Find a pet lover in your preferred location</p>
                    <div className="row py-2">
                        <div className="col-sm-6">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <h1 className="flaticon-house font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 className="text-truncate m-0">Pet Boarding</h5>
                                </div>
                                <p>Choose a place and a pet lover for ypur pet from the verified profiles.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <h1 className="flaticon-food font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 className="text-truncate m-0">Pet Feeding</h5>
                                </div>
                                <p>Get the best quality pet food.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <h1 className="flaticon-grooming font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 className="text-truncate m-0">Pet Grooming</h5>
                                </div>
                                <p className="m-0">Get your pet a spa.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <h1 className="flaticon-toy font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 className="text-truncate m-0">Pet Tracking</h5>
                                </div>
                                <p className="m-0">Track your pet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-light pt-3">
        <div className="container py-5">
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login