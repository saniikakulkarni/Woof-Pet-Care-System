import React, { useState, useEffect } from 'react'
import Navbar from "../../components/Navbar"
import defaultProfile from "../../images/user_profile.png"

import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';

const OwnerProfile = () => {

    const [ownerDetails, setOwnerDetails] = useState({})

    useEffect(() => {
        async function fetchOwnerDetails(){
            const response = await axios.get('/users/me',{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            setOwnerDetails(response.data)
        }
        try {
            fetchOwnerDetails()
        } catch(e) {
            Notification("Warning", "Could not fetch user Details.", "danger")
        }
    }, [])

  return (
    <>
    <Navbar/>
    <div class="container mt-5">
        <div class="col-md-10 col-xl-9 m-auto">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="account" role="tabpanel">
                    <div class="card top-border-radius">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Pet Owner Details</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="form-group">
                                           <p><span className='font-weight-bold'>Name :</span> {ownerDetails.name}</p>
                                        </div>
                                        <div class="form-group">
                                           <p><span className='font-weight-bold'>Email :</span> {ownerDetails.email}</p>
                                        </div>
                                        <div class="form-group">
                                            <p><span className='font-weight-bold'>Phone Number :</span> {ownerDetails.mobileNumber}</p>
                                         </div>
                                         <div class="form-group">
                                            <p><span className='font-weight-bold'>Age :</span> {ownerDetails.age}</p>
                                         </div>
                                         <div class="form-group">
                                            <p><span className='font-weight-bold'>Address :</span> {ownerDetails.address}</p>
                                         </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="text-center">
                                            <img alt="" src={ ownerDetails.avatar ? (
                                            `data:image/jpeg;base64,${ownerDetails.avatar}` ) : ( defaultProfile
                                            )} class="rounded-circle  img-responsive mt-2" width="150" height="150"/>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Pet Details</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <p><span className='font-weight-bold'>Name :</span> {ownerDetails.petName}</p>
                                </div>
                                <div class="form-group">
                                    <p><span className='font-weight-bold'>Breed :</span> {ownerDetails.petBreed}</p>
                                </div>
                                <div class="form-group">
                                    <p><span className='font-weight-bold'>Likes :</span> {ownerDetails.petLikes ? ownerDetails.petLikes : "None"}</p>
                                </div>
                                <div class="form-group">
                                    <p><span className='font-weight-bold'>Dislikes :</span> {ownerDetails.petDislikes ? ownerDetails.petDislikes : "None"}</p>
                                </div>  
                            </form>
                        </div>
                    </div>
                  <Link to='/owner/profileedit' className="btn btn-lg btn-primary mb-5">Edit</Link>
                </div>
            </div>
        </div>
</div>
    </>
  )
}

export default OwnerProfile