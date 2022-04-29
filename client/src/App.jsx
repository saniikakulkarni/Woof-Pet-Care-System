import React from 'react';   
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Footer from "./components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About";

// Pet Owner pages
import OwnerLogin from "./Pages/PetOwner/OwnerLogin"
import OwnerSignup from "./Pages/PetOwner/OwnerSignup"
import Service from "./Pages/PetOwner/Service";
import OwnerProfile from "./Pages/PetOwner/OwnerProfile";
import DisplayCarer from "./Pages/PetOwner/DisplayCarer";
import Booking from "./Pages/PetOwner/Booking";
import OwnerProfileEdit from './Pages/PetOwner/OwnerProfileEdit';
import BookingHistory from './Pages/PetOwner/BookingHistory';
import Review from './Pages/PetOwner/Review'

// Pet Carer pages
import CarerSignup from "./Pages/PetCarer/CarerSignup"
import CarerLogin from "./Pages/PetCarer/CarerLogin"
import BookingDetails from "./Pages/PetCarer/BookingDetails"
import CarerProfile from "./Pages/PetCarer/CarerProfile";
import CarerProfileEdit from './Pages/PetCarer/CarerProfileEdit';


function App() {
	
	return (
		<div>
			<ReactNotifications />
			<Router>
				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/about" element={<About />}/>
					<Route exact path="/service" element={<Service />}/>
					
					{/* Owner Routes */}
					<Route exact path="/owner/login" element={<OwnerLogin />}/>
					<Route exact path="/owner/signup" element={<OwnerSignup />}/>
					<Route exact path="/owner/profile" element={<OwnerProfile />}/>
					<Route exact path="/owner/profileedit" element={<OwnerProfileEdit/>}/>
					<Route exact path="/carer/profileedit" element={<CarerProfileEdit/>}/>
					<Route exact path="/owner/displaycarer" element={<DisplayCarer/>}/>
					<Route exact path="/owner/history" element={<BookingHistory/>}/>
					<Route exact path="/owner/review/:id" element={<Review/>}/>
					<Route exact path="/owner/:id" element={<Booking/>}/>
					

					{/* Carer Routes */}
					<Route exact path="/carer/login" element={<CarerLogin />}/>
					<Route exact path="/carer/signup" element={<CarerSignup />}/>
					<Route exact path="/carer/profile" element={<CarerProfile />}/>
					<Route exact path="/carer/bookingdetails" element={<BookingDetails/>}/>
					
        		</Routes> 
				<Footer/>
			</Router>
		</div>
	);
}

export default App;