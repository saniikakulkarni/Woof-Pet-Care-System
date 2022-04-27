import React from 'react'
import Navbar from "../../components/Navbar"

import { Link} from 'react-router-dom';

const OwnerProfile = () => {
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
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <p>First Name</p>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <p>Last Name</p>
                                            </div>
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
                                            <p>Govt ID</p>
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
                    
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Pet Deatils</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <p>Name</p>
                                </div>
                                <div class="form-group">
                                    <p>Breed</p>
                                </div>
                                <div class="form-group">
                                    <p>Likes</p>
                                </div>
                                <div class="form-group">
                                    <p>Dislikes</p>
                                </div>  
                            </form>
                        </div>
                    </div>
                  <Link to='/owner/profileedit' className="btn btn-lg btn-primary px-3 d-none d-lg-block mx-2 w-25 mb-5 ">Edit</Link>
                </div>
            </div>
        </div>
</div>
    </>
  )
}

export default OwnerProfile