import React from 'react'

const Navbar = () => {
  return (
    <>
         {/* <!-- Topbar Start --> */}
    <div className="container-fluid">
        <div className="row py-3 px-lg-5">
            <div className="col-lg-4">
                <a href="" className="navbar-brand d-none d-lg-block">
                    <h1 className="m-0 display-5 text-capitalize"><span className="text-primary">Woof</span></h1>
                </a>
            </div>
    
        </div>
    </div>
    {/* <!-- Topbar End --> */}

    {/* <!-- Navbar Start --> */}
    <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <a href="" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-5 text-capitalize font-italic text-white"><span className="text-primary">Woof</span></h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                        <a href="index.html" className="nav-item nav-link ">Home</a>
                        <a href="booking.html" className="nav-item nav-link active">Booking</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
                <a href="signup.html" className="btn btn-lg btn-primary px-3 d-none d-lg-block">Sign Up</a>
            </div>
        </nav>
    </div>
    {/* <!-- Navbar End --> */}
    </>
  )}

export default Navbar