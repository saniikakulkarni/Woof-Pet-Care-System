import React from 'react';   
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";

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
		<div className="App">
			<ReactNotifications />
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/signup" element={<Signup />}/>
        		</Routes> 
			</Router>
		</div>
	);
}

export default App;