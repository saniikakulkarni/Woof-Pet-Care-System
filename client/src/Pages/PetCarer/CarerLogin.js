import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from '../../axios'

// components
import Notification from "../../components/Notification"
import Navbar from '../../components/Navbar';

const CarerLogin = () => {
    
    // If petcarer alredaye logged in, navigate to home
    const navigate  = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate("/")
        }
    }, [])
  

  const [petcarer, setPetCarer] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPetCarer({ ...petcarer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/petcarers/login', petcarer);
    const data = response.data
    if(data.petcarer && data.token){
        Notification("Success", "Login Successful!", "success")  
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.id)
        localStorage.setItem('type', 'carer')
        navigate("/")
    }else{
        Notification("Warning", data.error.message, "danger")
        setPetCarer({ email: '', password: '' })
    }
    //console.log(data)
    
    };

  return (
    <>
    <Navbar/>
    <div className="container-fluid mt-5 mb-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="bg-primary py-5 px-4 px-sm-5">
                        <form className="py-5">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Email" required="required" id='email' name='email' value={petcarer.email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control border-0 p-4" placeholder="Password" required="required" id='password' name='password' value={petcarer.password} onChange={handleChange}/>
                            </div>
                            
                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3" type="submit" onClick={handleSubmit} >Login</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h1 className="display-4 mb-4">Pet Carer Login</h1>
                    <h4 className="text-secondary mb-3">Have experience in taking care of Pets? Or you love pets but do not have one?</h4>
                    <h1 className="display-4 mb-4">List yourself as a <span className="text-primary">Pet Carer</span></h1>
                    <p>Pet owners will choose you to take care of their pets</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CarerLogin