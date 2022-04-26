import React from 'react'

import Navbar from '../components/Navbar'

// images import
import about_img1 from '../images/about-1.jpg'
import about_img2 from '../images/about-2.jpg'
import about_img3 from '../images/about-3.jpg'
import about_img4 from '../images/about-4.jpg'

const About = () => {
  return (
      <>
      <Navbar/>
    <div className="container py-5">
        <div className="row py-5">
            <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 className="text-secondary mb-3">About Us</h4>
                <h1 className="display-4 mb-4"><span className="text-primary">Connecting Owners</span> with <span className="text-secondary">Pet Lovers</span></h1>
                <h5 className="text-muted mb-3">Woof is an easy solution i.e. a platform that connects pet lovers and pet owners where
                     the pet owners can keep their pets with pet lovers and have a hassle free travel.
                    Theyr will be able to choose a pet lover nearby his place who is willing to take care of his pet on his behalf.
                    </h5>
                <p className="mb-4">Pets owners usually leave their pets with neighbours or pet care centres. 
                    But every neighbour might not be a pet lover. And pet care centres may not be very personalised and reliable
                    We also provide a pet tracking device and video call feature for all the premium members. 
                    A device which can be attached to their pets so that their location can be tracked by owners, remotely through the app. An inbuilt video call feature in the app allows pet owners to see their pets while they are away.

                </p>
                <ul className="list-inline">
                    <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>Emergency Services</h5></li>
                    <li><h5><i className="fa fa-check-double text-secondary mr-3"></i>24/7 Customer Support</h5></li>
                </ul>
                <a href="" className="btn btn-lg btn-primary mt-3 px-4">Learn More</a>
            </div>
            <div className="col-lg-5">
                <div className="row px-3">
                    <div className="col-12 p-0">
                        <img className="img-fluid w-100" src={about_img1} alt="about img1"/>
                    </div>
                    <div className="col-6 p-0">
                        <img className="img-fluid w-100" src={about_img2} alt="about img2"/>
                    </div>
                    <div className="col-6 p-0">
                        <img className="img-fluid w-100" src={about_img3} alt="about img3"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-light">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid w-100" src={about_img4} alt=""/>
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">Why Choose Us?</h4>
                    <h1 className="display-4 mb-4"><span className="text-primary">Find a pet lover</span> For your Pet</h1>
                    <p className="mb-4">Connect with pet lovers within no time. Take a hassle free journey without worrying about your pets.</p>
                    <div className="row py-2">
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-cat font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">Pet safety and security</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center mb-4">
                                <h1 className="flaticon-doctor font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">Emergency Services</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-care font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">Special Care</h5>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <h1 className="flaticon-dog font-weight-normal text-secondary m-0 mr-3"></h1>
                                <h5 className="text-truncate m-0">Customer Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About