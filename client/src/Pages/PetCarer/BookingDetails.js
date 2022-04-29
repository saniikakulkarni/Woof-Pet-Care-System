import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Notification from "../../components/Notification";
import defaultProfile from "../../images/user_profile.png"

import axios from "../../axios";
import calendar from "../../images/calendar.png"

const BookingDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("type") != "carer"
    ) {
      Notification("Warning", "Login as Pet Carer!", "danger");
      navigate("/");
    }
  }, []);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const response = await axios.get(
        "/petcarers/bookings?sortBy=startDate:Asc",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setBookings(response.data);
    }
    try {
      fetchBookings();
    } catch (e) {
      Notification("Warning", "Cannot Fetch Bookings.", "danger");
    }
  }, []);


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-md-10 col-xl-10">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="account" role="tabpanel">
            <h2 className="my-5">Booking Details</h2>
            { bookings.length!==0 ? (bookings.map((booking) => {
                return (
                  <div className="card top-border-radius">
                    <div className="card-body">
                        <div className="row">
                          <div className="px-5 col-md-8">
                            <div className="form-group">
                              <p>Name: {booking.user[0].name}</p> 
                            </div>
                            <div className="form-group">
                              <p>Email: {booking.user[0].email}</p> 
                            </div>
                            <div className="form-group">
                              <p>Phone Number: {booking.user[0].mobileNumber}</p> 
                            </div>
                            <div className="form-group">
                              <p>Address: {booking.user[0].address}</p> 
                            </div>
                            <div className="form-group">
                              <p>Start Date: {booking.startDate} </p> 
                            </div>
                            <div className="form-group">
                              <p>End Date: {booking.endDate}</p>  
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center">
                              <img
                                alt=""
                                src={booking.user[0].avatar? `data:image/jpeg;base64,${booking.user[0].avatar}` : defaultProfile}
                                className="rounded-circle img-responsive mt-2"
                                width="128"
                                height="128"
                              />
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                );
              })) : (<div class = "d-block m-auto w-100">
              <img src= {calendar} alt="" width="128" height="128"/>
              <br/>
              <h1 className="display-4 mb-4">All caught up!</h1>
              <h4 className="text-secondary mb-3">Looks like you do not have any bookings!!</h4>
            </div>)
              }
              
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
