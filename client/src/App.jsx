import React from 'react';   
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import Home from "./Pages/Home"
import OwnerLogin from "./Pages/PetOwner/OwnerLogin"
import CarerLogin from "./Pages/PetCarer/CarerLogin"
import Signup from "./Pages/PetOwner/Signup";
import About from "./Pages/About";

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


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
			<ReactNotifications />
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/carerlogin" element={<CarerLogin />}/>
					<Route path="/ownerlogin" element={<OwnerLogin />}/>
					<Route path="/signup" element={<Signup />}/>
					<Route path="/about" element={<About />}/>
        		</Routes> 
			</Router>
		</div>
	);
}

export default App;