import React from 'react';   
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import Home from "./Pages/Home"
import Login from "./Pages/User/Login"
import Signup from "./Pages/User/Signup";
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
					<Route path="/login" element={<Login />}/>
					<Route path="/signup" element={<Signup />}/>
					<Route path="/about" element={<About />}/>
        		</Routes> 
			</Router>
		</div>
	);
}

export default App;