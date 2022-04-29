import React, {useEffect,useState} from 'react'
import Navbar from "../../components/Navbar"
import Notification from '../../components/Notification'
import defaultProfile from "../../images/user_profile.png"
import { Link,useNavigate } from 'react-router-dom';
import axios from '../../axios';

const CarerProfile = () => {

    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token') || localStorage.getItem('type')!='carer'){
          Notification("Warning", "Login as Pet Carer!", "danger")
          navigate('/')
        }
      },[])

      const [petcarerDetails, setPetcarerDetails] = useState({})

      useEffect(() => {
        async function fetchCarerDetails(){
            const response = await axios.get('/petcarer/me',{
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
              })
            setPetcarerDetails(response.data)
            
        }
        try {
            fetchCarerDetails()
        } catch(e) {
            Notification("Warning", "Could not fetch user Details.", "danger")
        }
    }, [])

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
        <div className="col-md-10 col-xl-9 m-auto">
            <div className="tab-content">
                <div className="tab-pane fade show active" id="account" role="tabpanel">
                    <div className="card top-border-radius">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Pet Carer Details</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-8">
                                    <div className="form-group">
                                           <p><span className='font-weight-bold'>Name :</span> {petcarerDetails.name}</p>
                                        </div>
                                        <div className="form-group">
                                           <p><span className='font-weight-bold'>Email :</span> {petcarerDetails.email}</p>
                                        </div>
                                        <div className="form-group">
                                            <p><span className='font-weight-bold'>Phone Number :</span> {petcarerDetails.mobileNumber}</p>
                                         </div>
                                         <div className="form-group">
                                            <p><span className='font-weight-bold'>Age :</span> {petcarerDetails.age}</p>
                                         </div>
                                         <div className="form-group">
                                            <p><span className='font-weight-bold'>Address :</span> {petcarerDetails.address}</p>
                                         </div>
                                         <div className="form-group">
                                            <p><span className='font-weight-bold'>Experience :</span> {petcarerDetails.experience}</p>
                                         </div>
                                         <div className="form-group">
                                            <p><span className='font-weight-bold'>Availability :</span> {petcarerDetails.availability}</p>
                                         </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="text-center">
                                            <img alt="" src={ petcarerDetails.avatar ? (
                                            `data:image/jpeg;base64,${petcarerDetails.avatar}` ) : ( defaultProfile
                                            )} className="rounded-circle img-responsive mt-2" width="128" height="128"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                  <Link to='/carer/profileedit' className="btn btn-lg btn-primary mb-5">Edit</Link>
                </div>
            </div>
        </div>
</div>
    </>
  )
}

export default CarerProfile