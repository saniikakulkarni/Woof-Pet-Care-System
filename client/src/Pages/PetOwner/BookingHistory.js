import React,{ useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import axios from '../../axios'
import defaultProfile from "../../images/user_profile.png"
import calendar from "../../images/calendar.png"

const BookingHistory = () => {

  const navigate = useNavigate()
  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("type") !== "owner"
    ) {
      Notification("Warning", "Login as Pet Carer!", "danger");
      navigate("/");
    }
  }, []);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const response = await axios.get(
        "/users/bookings?sortBy=startDate:asc",
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
              <h2 className="my-5">Booking History</h2>
              {
                bookings.length!==0 ?
                bookings.map((booking) => {
                  return (
                  <div className="card top-border-radius px-4">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-md-8">
                            <div class="form-group">
                                <p><span className='font-weight-bold'>Phone Number :</span> {booking.petcarer[0].mobileNumber} </p>
                            </div>
                            <div class="form-group">
                                <p><span className='font-weight-bold'>Address :</span> {booking.petcarer[0].address}</p>
                            </div>
                            <div class="form-group">
                                <p><span className='font-weight-bold'>Experience :</span> {booking.petcarer[0].experience} Years</p>
                            </div>
                            <div class="form-group">
                                <p><span className='font-weight-bold'>Total Cost :</span> ₹{booking.totalCost} </p>
                            </div>
                            <div className="form-group">
                              <p><span className='font-weight-bold'>Address :</span> {booking.petcarer[0].address}</p>
                            </div>
                            <Link className="btn btn-primary" to={"/owner/review/"+booking.petcarer[0]._id}>Review</Link>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center">
                              <img
                                alt=""
                                src={ booking.petcarer[0].avatar ? (
                                  `data:image/jpeg;base64,${booking.petcarer[0].avatar}` ) : ( defaultProfile
                                  )}
                                className="rounded-circle img-responsive mt-2"
                                width="128"
                                height="128"
                              />
                              <div class="form-group mt-4">
                                <h3 className='font-weight-bold'> {booking.petcarer[0].name}</h3> 
                                <div className='text-primary'>{booking.petcarer[0].email}</div> 
                            </div>
                            </div>
                            
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}) : (
                  <div class = "d-block m-auto w-100">
                  <img src= {calendar} alt="" width="128" height="128"/>
                  <br/>
                  <h1 className="display-4 mb-4">All caught up!</h1>
                  <h4 className="text-secondary mb-3">Looks like you do not have any bookings!!</h4>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHistory;
