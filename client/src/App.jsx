import { useState, useEffect } from "react";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

// functions
import { getTest } from "./functions/test";

function App() {
	const [data, setData] = useState("Hello World!");

	// useEffect(() => {
	// 	getTest()
	// 		.then((res) => setData(res.message))
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		<div className="app-container">
			<ReactNotifications />
			{/* <Signup></Signup> */}
			<Login/>
		</div>
	);
}

export default App;