import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../../components/Navbar"
import Notification from '../../components/Notification'
import axios from '../../axios'

const BookingDetails = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem('token') || localStorage.getItem('type')!='carer'){
      Notification("Warning", "Login as Pet Carer!", "danger")
      navigate('/')
    }
  },[])

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    async function fetchBookings() {
        const response = await axios.get('/petcarers/bookings?sortBy=startDate:Asc',
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        setBookings(response.data)
    }
    try{
      fetchBookings()
    } catch(e) {
      Notification("Warning", "Cannot Fetch Bookings.", "danger")
    }
    
  },[])



  return (
      <>
        <Navbar/>
        <h1>Booking Details of Pet Owners</h1>
        <div>
          {
            bookings.map((booking) => {
              return (
                <div className='card p-4 m-5'>
                  {booking.startDate} <br />
                  {booking.endDate} <br />
                  {booking.user[0].name}<br />
                  {booking.user[0].email}<br />
                  {booking.user[0].mobileNumber}<br />
                </div>
              )
            })
          }
          <div>

          </div>
        </div>
      </>
    
  )
}

export default BookingDetails