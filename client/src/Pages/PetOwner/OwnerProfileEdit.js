import React from 'react'
import Navbar from "../../components/Navbar"

import { Link} from 'react-router-dom';

const OwnerProfileEdit = () => {
  return (
    <>
    <Navbar/>
    <div class="container p-0 mt-5 ">
    <div class="row">
        <div class="col-md-7 col-xl-8 m-auto">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="account" role="tabpanel">
                    <div class="card top-border-radius">
                        <div class="card-body">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <img alt="" src="" class="rounded-circle img-responsive mt-2" width="128" height="128"/>
                                        <div class="mt-2">
                                            <span class="btn btn-primary"><i class="fa fa-upload"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Phone Number</label>
                                    <input type="phonenumber" class="form-control" id="name" placeholder="Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="phonenumber">Phone Number</label>
                                    <input type="phonenumber" class="form-control" id="phonenumber" placeholder="Phone Number"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Apartment,Floor or House No"/>
                                </div>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </form>

                        </div>
                    </div>

                </div>
                <div class="tab-pane fade show active" id="password" role="tabpanel">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Password</h5>
                            <form>
                                <div class="form-group">
                                    <label for="inputPasswordCurrent">Current password</label>
                                    <input type="password" class="form-control" id="inputPasswordCurrent"/>
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

                <Link to='/owner/profile' className="btn btn-lg btn-primary mb-5">Back</Link>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default OwnerProfileEdit