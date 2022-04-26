import React from 'react';   
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import Home from "./Pages/Home"
import OwnerLogin from "./Pages/PetOwner/OwnerLogin"
import CarerLogin from "./Pages/PetCarer/CarerLogin"
import Signup from "./Pages/PetOwner/Signup";
import About from "./Pages/About";
import Service from "./Pages/User/Service";

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
			<ReactNotifications />
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/carer/login" element={<CarerLogin />}/>
					<Route path="/owner/login" element={<OwnerLogin />}/>
					<Route path="/signup" element={<Signup />}/>
					<Route path="/about" element={<About />}/>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/service" element={<Service />}/>
					<Route exact path="/navigate" element={<Navigate />}/>
        		</Routes> 
			</Router>
		</div>
	);
}

export default App;