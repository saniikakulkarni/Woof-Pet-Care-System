import React from 'react'
import Navbar from "../../components/Navbar"

import { Link} from 'react-router-dom';

const OwnerProfile = () => {
  return (
    <>
    <Navbar/>
    <div class="container">
        <div class="col-md-10 col-xl-10">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="account" role="tabpanel">

                    <div class="card top-border-radius">
                        <div class="card-header">
                            <div class="card-actions float-right">
                                <h5 class="card-title mb-0">Pet Owner</h5>
                            </div>
                            <h5 class="card-title mb-0">Public info</h5>
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
                                            <p>Country</p>
                                         </div>
                                         <div class="form-group">
                                            <p>State</p>
                                         </div>
                                         <div class="form-group">
                                            <p>City</p>
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
                            <div class="card-actions float-right">
                                <h5 class="card-title mb-0">Pet Owner</h5>
                            </div>
                            <h5 class="card-title mb-0">Private info</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <p>Address</p>
                                </div>
                                <div class="form-group">
                                    <p>Govt ID</p>
                                </div>
                                
                            </form>

                        </div>
                    </div>
                  <Link to='/owner/profileedit' className="btn btn-lg btn-primary px-3 d-none d-lg-block mx-2">Edit</Link>
                </div>
                <div class="tab-pane fade" id="password" role="tabpanel">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Password</h5>
                            <form>
                                <div class="form-group">
                                    <label for="inputPasswordCurrent">Current password</label>
                                    <input type="password" class="form-control" id="inputPasswordCurrent"/>
                                    <small><a href="#">Forgot your password?</a></small>
                                </div>
                                <div class="form-group">
                                    <label for="inputPasswordNew">New password</label>
                                    <input type="password" class="form-control" id="inputPasswordNew"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputPasswordNew2">Verify password</label>
                                    <input type="password" class="form-control" id="inputPasswordNew2"/>
                                </div>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </form>

                        </div>
                    </div>
                </div>

                
            </div>
        </div>
</div>
    </>
  )
}

export default OwnerProfile