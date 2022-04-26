import React from 'react'
import Navbar from "../../components/Navbar"

import { Link} from 'react-router-dom';

const DisplayCarer = () => {
  return (
    <>
    <Navbar/>
        <div class="container-fluid bg-light pt-5">
        <div class="container py-5">
            <div class="d-flex flex-column text-center mb-5">
                <h1 class="display-4 m-0">Available Pet Carers</h1>
            </div>
            <div class="row pb-3">
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 class="display-5 font-weight-normal text-secondary mb-3">Name</h3>
                        
                        <p>Email</p>
                        <p>Contact number</p>
                        <p>Address</p>
                        <a class="btn btn-lg btn-primary px-3 d-none d-lg-block" href="">Book</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 class="display-5 font-weight-normal text-secondary mb-3">Name</h3>
                        
                        <p>Email</p>
                        <p>Contact number</p>
                        <p>Address</p>
                        <a class="btn btn-lg btn-primary px-3 d-none d-lg-block" href="">Book</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 class="display-5 font-weight-normal text-secondary mb-3">Name</h3>
                        
                        <p>Email</p>
                        <p>Contact number</p>
                        <p>Address</p>
                        <a class="btn btn-lg btn-primary px-3 d-none d-lg-block" href="">Book</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                        <h3 class="display-5 font-weight-normal text-secondary mb-3">Name</h3>
                        
                        <p>Email</p>
                        <p>Contact number</p>
                        <p>Address</p>
                        <a class="btn btn-lg btn-primary px-3 d-none d-lg-block" href="">Book</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DisplayCarer