import React from 'react'

const Footer = () => {
  return (
    <>
     {/* <!-- Footer Start --> */}
     <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
        <div className="row pt-1">
            <div className="col-lg-4 col-md-12 mb-5">
                <h1 className="mb-3 display-5 text-capitalize text-white"><span className="text-primary">Woof</span></h1>
                <p className="m-0">Connect with pet lovers within no time.
                    Take a hassle free journey without worrying about your pets.
                    </p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5 className="text-primary mb-4">Get In Touch</h5>
                        
                        <p><i className="fa fa-envelope mr-2"></i>woof2022@gmail.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ "width": "36px", "height": "36px"}} href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ "width": "36px", "height": "36px"}} href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ "width": "36px", "height": "36px"}} href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ "width": "36px", "height": "36px"}} href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5 className="text-primary mb-4">Popular Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Team</a>
                            <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-white py-2 px-sm-3 px-md-5" style={{"background": "#111111"}}>
        <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">
                    &copy; <a className="text-white font-weight-bold" href="#">Woof2022</a>
                </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
                <ul className="nav d-inline-flex">
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Privacy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Terms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer