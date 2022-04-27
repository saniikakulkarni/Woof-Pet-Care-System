import React,{useState} from 'react'
import Navbar from "../../components/Navbar"
import { useParams, Link } from 'react-router-dom'
import axios from '../../axios'

const Booking = () => {
    const { id } = useParams()
    const [ bookingDetails, setBookingDetails ] = useState({ startDate:'', endDate:'' });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBookingDetails({ ...bookingDetails, [name]: value });
    };

    const handleBooking = async(e) => {
        e.preventDefault();
        const totalCost = 100
        const response = await axios.post('/booking/'+ id, {...bookingDetails,totalCost}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        console.log(response)
    }

    return (
        <>
            <Navbar/>
            <h1>Booking</h1>
            <form action="">
                Start date:
                <input type="date" name="startDate" id="startDate" value={bookingDetails.startDate} onChange={handleChange}/>
                End date:
                <input type="date" name="endDate" id="endDate" value={bookingDetails.endDate} onChange={handleChange}/>
                <button onClick={handleBooking}>Confirm Booking</button>
            </form>
        </>
        
    )
}

export default Booking