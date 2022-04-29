import React, {useState,useEffect} from 'react'

import Notification from "../../components/Notification"
import Navbar from "../../components/Navbar"
import axios from '../../axios';
import defaultProfile from "../../images/user_profile.png"
import { Link, useNavigate } from 'react-router-dom';

const CarerProfileEdit = () => {

    const navigate = useNavigate()

    const [carerDetails, setcarerDetails] = useState({})
    const [profileImage, setProfileImage] = useState(null)

    useEffect(() => {
        async function fetchcarerDetails(){
            const response = await axios.get('/petcarer/me',{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            setcarerDetails(response.data)
        }
        try {
            fetchcarerDetails()
        } catch(e) {
            Notification("Warning", "Could not fetch carer Details.", "danger")
        }
    }, [])
    console.log(carerDetails)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setcarerDetails({ ...carerDetails, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const locRes = await axios.post('/petcarers/location', { address:carerDetails.address })
        if(locRes.data.error){
            Notification("Warning", locRes.data.error, "danger")
            return
        }
        const location = { type: 'Point', coordinates: [locRes.data.longitude, locRes.data.latitude]}
        const { name, email, password, age, address, mobileNumber, experience, availability } = carerDetails
        try{
            await axios.patch('/petcarers/me', { name, email, password, age, address, mobileNumber, experience, availability, location }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            Notification("Success", "Details Updated Successfully!!", "success")
            navigate("/carer/profile")
        } catch(e) {
            Notification("Warning", "Could not update.", "danger")
        }
    }

    const handleProfileSubmit = async (event) => {
        event.preventDefault()
        if(!profileImage){
            Notification("Warning", "Please upload image" , "danger")
            return
        }
        const formData = new FormData();
        formData.append("avatar", profileImage);
        
        const {data} = await axios.post("/petcarers/me/avatar", formData, {
            headers: { 
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        });
        if(data.error){
            Notification("Warning", data.error , "danger")
        } else {
            Notification("Success", "Profile image updated", "success")
        }
      }
    
      const handleImageSelect = (event) => {
        setProfileImage(event.target.files[0])
      }
    
console.log(carerDetails.availability)
  return (
    <>
    <Navbar/>
    <div className="container p-0 mt-5 ">
    <div className="row">
        <div className="col-md-7 col-xl-8 m-auto">
            <div className="tab-content">
                <div className="tab-pane fade show active" id="account" role="tabpanel">
                    <div className="card top-border-radius">
                        <div className="card-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <img alt="" src={ carerDetails.avatar ? (
                                            `data:image/jpeg;base64,${carerDetails.avatar}` ) : ( defaultProfile
                                            )} className="rounded-circle img-responsive mt-2" width="128" height="128"/>                                                                            
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="avatar">Profile Image</label>
                                        <div className="input-group">                                       
                                            <input type="file" onChange={handleImageSelect} className="form-control"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" onClick={handleProfileSubmit} type="button">Update Profile</button>
                                            </div>
                                        </div>                                     
                                    </div>      
                                </div>
                            </form>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={carerDetails.name} onChange={handleChange} placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobileNumber">Phone Number</label>
                                    <input type="phonenumber" className="form-control" id="mobileNumber" name="mobileNumber" value={carerDetails.mobileNumber} onChange={handleChange} placeholder="Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={carerDetails.email} onChange={handleChange} placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Apartment, Floor or House No" name="address" value={carerDetails.address} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input type="number" className="form-control" id="age" name="age" value={carerDetails.age} onChange={handleChange} placeholder="Age"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Experience">Experience</label>
                                    <input type="number" className="form-control" id="Experience" name="Experience" value={carerDetails.experience} onChange={handleChange} placeholder="Experience"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="availability">Availability</label>
                                    <br />
                                    <select className="form-control" name="availability" id="availability" value={carerDetails.availability} onChange={handleChange}>
                                        <option value="Not Available">Not available</option>
                                        <option value="Available">Available</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="tab-pane fade show active" id="password" role="tabpanel">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Password</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputPasswordCurrent">Current password</label>
                                    <input type="password" className="form-control" id="inputPasswordCurrent"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPasswordNew">New password</label>
                                    <input type="password" className="form-control" id="inputPasswordNew"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPasswordNew2">Verify password</label>
                                    <input type="password" className="form-control" id="inputPasswordNew2"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </form>

                        </div>
                    </div>
                </div>

                <Link to='/carer/profile' className="btn btn-lg btn-primary mb-5">Back</Link>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default CarerProfileEdit