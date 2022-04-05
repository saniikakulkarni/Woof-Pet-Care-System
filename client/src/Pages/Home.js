import { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/style.css" 

import homebg from "../static/home.jpg"

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <img className="w-100" src={homebg} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{"maxWidth": "900px"}}>
                            <h1 className="display-3 text-white mb-3">Keep Your Pet Happy</h1>
                            <h5 className="text-white mb-3 d-none d-sm-block">Take a hassle free journey without worrying about your pets.</h5>
                            <a href="" className="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Create account now</a>

                        </div>
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