import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../axios'
// components

import Notification from "../../components/Notification"
import Navbar from '../../components/Navbar'

//styling
import "../../styles/style.css"

const CarerSignup = () => {

    // If petcarer alredaye logged in, navigate to home
    const navigate  = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate("/")
        }
    }, [])

    const [petcarer, setPetCarer] = useState({  name: '', email: '', age: '' , mobileNumber: '', password: '', cost: '',
                                                experience: '', address: '' });
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPetCarer({ ...petcarer, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const locRes = await axios.post('/petcarers/location', { address:petcarer.address })
        if(locRes.data.error){
            Notification("Warning", locRes.data.error, "danger")
        } else {
            const location = { type: 'Point', coordinates: [locRes.data.longitude, locRes.data.latitude]}
            const response = await axios.post('/petcarers/signup', {...petcarer,location});
            const data = response.data
            if(data.petcarer && data.token){
                Notification("Success", "Registered Successfully!!", "success")
                setPetCarer({ ...petcarer, name: '', email: '', age: '' , mobileNumber: '', password: '', cost: '', experience: '' , address: '' })
                localStorage.setItem('token', data.token)
                localStorage.setItem('id', data.id)
                localStorage.setItem('type', 'carer')
                navigate("/")
            } else {
                Notification("Warning", "Could not login.", "danger")
                setPetCarer({ ...petcarer, name: '', email: '', age: '' , mobileNumber: '', password: '', cost: '', experience: '', address: '' })
            }
        }
        
        
    };


  return (
    <>
    <Navbar/>
    <div className="container-fluid">
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="bg-primary py-5 px-4 px-sm-5">
                        <form className="py-5" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Name" required="required"  id='name' name='name' value={petcarer.name} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 p-4" placeholder="Email" required="required" id='email' name='email' value={petcarer.email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control border-0 p-4" placeholder="Password" required="required" id='password' name='password' value={petcarer.password} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="Number" className="form-control border-0 p-4" placeholder="Age" required="required" id='age' name='age' value={petcarer.age} min="18" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control border-0 p-4" placeholder="Mobile Number" required="required" type='Number' id='mobileNumber' name='mobileNumber' value={petcarer.mobileNumber} minLength="10" maxLength="10" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input  className="form-control border-0 p-4" type="text" placeholder="Years of Experience" required="required" id='experience' name='experience' value={petcarer.experience} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control border-0 p-4" placeholder="Per day Cost" required="required" type='Number' id='cost' name='cost' value={petcarer.cost} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control border-0 py-2" placeholder="Address" required="required" id='address' name='address' value={petcarer.address} onChange={handleChange}/>
                            </div>
                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3" type="submit" >Sign Up</button>
                            </div>
                    
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h1 className="display-4 mb-4">Sign Up</h1>
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

export default CarerSignup