import { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/style.css"

const Home = () => {
  return (
    <>
    <Navbar/>
    {/* <!-- Space Start --> */}
    <div className="container-fluid bg-light pt-5">
        <div className="container py-5">
        </div>
    </div>
    {/* <!-- Space End --> */}

    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <img className="w-100" src="img/home.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{"max-width": "900px"}}>
                            <h1 className="display-3 text-white mb-3">Keep Your Pet Happy</h1>
                            <h5 className="text-white mb-3 d-none d-sm-block">Take a hassle free journey without worrying about your pets.</h5>
                            <a href="" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Create account now</a>

                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-primary rounded" style={{"width": "45px", "height": "45px"}}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-primary rounded" style={{ "width": "45px", "height": "45px"}}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-4 col-md-12 mb-5">
                <h1 className="mb-3 display-5 text-capitalize text-white"><span className="text-primary">Woof</span></h1>
                <p className="m-0">Connect with pet lovers within no time.
                    Take a hassle free journey without worrying about your pets.
                </p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-primary mb-4">Get In Touch</h5>
    
                        <p><i className="fa fa-envelope mr-2"></i>woof2022@gmail.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{"width": "36px", "height": "36px"}} href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{"width": "36px", "height": "36px"}} href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{"width": "36px", "height": "36px"}} href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                                style={{"width": "36px", "height": "36px"}} href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-primary mb-4">Popular Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Team</a>
                            <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-primary mb-4">Newsletter</h5>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control border-0" placeholder="Your Name"
                                    required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button className="btn btn-lg btn-primary btn-block border-0" type="submit">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home