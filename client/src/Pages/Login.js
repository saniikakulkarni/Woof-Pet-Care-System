import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({ email: '', passsword: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
    <Navbar/>
    {/* <!-- Space Start --> */}
    <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
        </div>
    </div>
    {/* <!-- Space End --> */}
    <div class="container-fluid">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="bg-primary py-5 px-4 px-sm-5">
                        <form class="py-5">
                            <div class="form-group">
                                <input type="text" class="form-control border-0 p-4" placeholder="Email" required="required" id='email' name='email' value={user.email} onChange={handleChange}/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control border-0 p-4" placeholder="Password" required="required" id='password' name='password' value={user.password} onChange={handleChange}/>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-10">
                                <button class="btn btn-dark btn-block border-0 py-3" type="submit" onClick={handleSubmit}>Login</button>
                            </div>
                            <div class="col-md-6 mb-10">
                                <button class="btn btn-dark btn-block border-0 py-3" onclick="location.href='signup.html'">Sign Up</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h1 class="display-4 mb-4">Login</h1>
                    <p>Find a pet lover in your preferred location</p>
                    <div class="row py-2">
                        <div class="col-sm-6">
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center mb-2">
                                    <h1 class="flaticon-house font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 class="text-truncate m-0">Pet Boarding</h5>
                                </div>
                                <p>Choose a place and a pet lover for ypur pet from the verified profiles.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center mb-2">
                                    <h1 class="flaticon-food font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 class="text-truncate m-0">Pet Feeding</h5>
                                </div>
                                <p>Get the best quality pet food.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center mb-2">
                                    <h1 class="flaticon-grooming font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 class="text-truncate m-0">Pet Grooming</h5>
                                </div>
                                <p class="m-0">Get your pet a spa.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center mb-2">
                                    <h1 class="flaticon-toy font-weight-normal text-secondary m-0 mr-3"></h1>
                                    <h5 class="text-truncate m-0">Pet Tracking</h5>
                                </div>
                                <p class="m-0">Track your pet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login