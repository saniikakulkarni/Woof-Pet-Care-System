import React from 'react';   
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Navigate from './Pages/Navigate';

// Pet Owner pages
import OwnerLogin from "./Pages/PetOwner/OwnerLogin"
import OwnerSignup from "./Pages/PetOwner/OwnerSignup"
import Service from "./Pages/PetOwner/Service";

// Pet Carer pages
import CarerSignup from "./Pages/PetCarer/CarerSignup"
import CarerLogin from "./Pages/PetCarer/CarerLogin"
import PetCarerHome from "./Pages/PetCarer/PetCarerHome"


function App() {
	
	return (
		<div>
			<Navbar/>
			<ReactNotifications />
			<Router>
				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/carer/login" element={<CarerLogin />}/>
					<Route exact path="/owner/login" element={<OwnerLogin />}/>
					<Route exact path="/carer/signup" element={<CarerSignup />}/>
					<Route exact path="/owner/signup" element={<OwnerSignup />}/>
					<Route exact path="/about" element={<About />}/>
					<Route exact path="/service" element={<Service />}/>
					<Route exact path="/navigate" element={<Navigate />}/>
					<Route exact path="/carer/home" element={<PetCarerHome/>}/>
					
        		</Routes> 
			</Router>
			<Footer/>
		</div>
	);
}

export default App;