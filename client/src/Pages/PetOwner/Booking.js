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
            <h1>Book Pet Carer</h1>
            <div className='container card'>
                Name: {carerDetails.name}<br/>
                Email: {carerDetails.email} <br />       
                mobile number: {carerDetails.mobileNumber} <br />
                Age: {carerDetails.age} <br /> 
                Address: {carerDetails.address} <br />      
                Cost Per day: {carerDetails.cost} <br />     
                Experience :{carerDetails.experience} years <br /> 
                <form action="">
                    Start date:
                    <input type="date" name="startDate" id="startDate" value={bookingDetails.startDate} onChange={handleChange}/><br/>
                    End date:
                    <input type="date" name="endDate" id="endDate" value={bookingDetails.endDate} onChange={handleChange}/><br/>
                    <button onClick={handleBooking}>Confirm Booking</button>
                </form> 
            </div>
            
        </>
        
    )
}

export default Booking