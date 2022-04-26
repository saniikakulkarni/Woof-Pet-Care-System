import React from 'react';   
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import Home from "./Pages/Home"
import OwnerLogin from "./Pages/PetOwner/OwnerLogin"
import CarerLogin from "./Pages/PetCarer/CarerLogin"
import OwnerSignup from "./Pages/PetOwner/OwnerSignup"
import CarerSignup from "./Pages/PetCarer/CarerSignup"
import About from "./Pages/About";
import Service from "./Pages/PetOwner/Service";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Navigate from './Pages/Navigate';


// functions
// import { getTest } from "./functions/test";

function App() {
	// const [data, setData] = useState("Hello World!");

	// useEffect(() => {
	// 	getTest()
	// 		.then((res) => setData(res.message))
	// 		.catch((err) => console.log(err));
	// }, []);

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
        		</Routes> 
			</Router>
			<Footer/>
		</div>
	);
}

export default App;