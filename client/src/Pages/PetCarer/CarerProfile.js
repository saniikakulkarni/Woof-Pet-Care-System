import React, {useEffect} from 'react'
import Navbar from "../../components/Navbar"
import Notification from '../../components/Notification'
import { Link,useNavigate } from 'react-router-dom';

const CarerProfile = () => {

    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token') || localStorage.getItem('type')!='carer'){
          Notification("Warning", "Login as Pet Carer!", "danger")
          navigate('/')
        }
      },[])

  return (
    <>
    <Navbar/>
    <div class="container mt-5">
        <div class="col-md-10 col-xl-9 m-auto">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="account" role="tabpanel">
                    <div class="card top-border-radius">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Pet Carer Details</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="form-group">
                                           <p>Name</p>
                                        </div>
                                        <div class="form-group">
                                           <p>Email</p>
                                        </div>
                                        <div class="form-group">
                                            <p>Phone Number</p>
                                         </div>
                                         <div class="form-group">
                                            <p>Age</p>
                                         </div>
                                         <div class="form-group">
                                            <p>Address</p>
                                         </div>
                                         <div class="form-group">
                                            <p>Experience</p>
                                         </div>
                                         <div class="form-group">
                                            <p>Govt ID</p>
                                         </div>
                                         <div class="form-group">
                                            <p>Availability</p>
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
                  <Link to='/carer/profileedit' className="btn btn-lg btn-primary mb-5">Edit</Link>
                </div>
            </div>
        </div>
</div>
    </>
  )
}

export default CarerProfile