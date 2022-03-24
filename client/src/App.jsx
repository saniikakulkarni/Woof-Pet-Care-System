import { useState, useEffect } from "react";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";



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
		<div className="App">
			<Signup></Signup>
		</div>
	);
}

export default App;