import React,{ useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../../axios'

import Navbar from "../../components/Navbar"
import Notification from "../../components/Notification"

const Booking = () => {
    const { id } = useParams()
    const navigate  = useNavigate()
    const [ bookingDetails, setBookingDetails ] = useState({ startDate:'', endDate:'' });
    const [ carerDetails, setCarerDetails] = useState({})

    useEffect(()=>{
        async function fetchCarerDetails(){
            try{
                const res = await axios.get('/petcarers/'+id,{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
                if(res.status === 200){
                    setCarerDetails(res.data)
                } 
            }
            catch (e) {
                Notification("Warning", "Invalid User", "danger")
                navigate('/owner/displaycarer')
            }
                
        }
        fetchCarerDetails()
    },[])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBookingDetails({ ...bookingDetails, [name]: value });
    };

    const handleBooking = async(e) => {
        e.preventDefault();
        const totalCost = 100
        const response = await axios.post('/booking/'+ id, {...bookingDetails,totalCost}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        if(response.status==201){
            Notification("Success", "Booking Successful!", "success") 
            navigate('/owner/displaycarer')
        } else {
            Notification("Warning", "Could not Book", "danger")
            setBookingDetails({ startDate:'', endDate:'' })
        }
    }

    return (
        <>
            <Navbar/>
            <h1 className="text-center">Book Pet Carer</h1>
                <div class="card border-radius col-md-10 col-xl-5 m-auto mt-5">
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <p>First Name : {carerDetails.name}</p>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <p>Last Name</p>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <p>Email : {carerDetails.email}</p>
                                    </div>
                                    <div class="form-group">
                                        <p>Phone Number : {carerDetails.mobileNumber} </p>
                                        </div>
                                        <div class="form-group">
                                        <p>Age : {carerDetails.age}</p>
                                        </div>
                                        <div class="form-group">
                                        <p>Address : {carerDetails.address}</p>
                                        </div>
                                        <div class="form-group">
                                        <p>Experience : {carerDetails.experience}</p>
                                        </div>
                                        <div class="form-group">
                                        <p>Cost : {carerDetails.cost}</p>
                                        </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="text-center">
                                        <img alt="" src="" class="rounded-circle img-responsive mt-2" width="128" height="128"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 container mb-5 mt-3">
                    <div className="bg-primary py-2 px-4 px-sm-5">
                        <form className="py-5">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Start Date" required="required"  id='startName' name='startDate' value={bookingDetails.startDate} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="End Date" required="required"  id='endDate' name='endDate' value={bookingDetails.endDate} onChange={handleChange}/>
                            </div>
                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3" type="submit" onClick={handleBooking} >Confirm Booking</button>
                            </div>
                    
                        </form>
                    </div>
            </div>  
        </>
        
    )
}

export default Booking