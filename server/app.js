// import modules
const express = require("express");
const { json, urlencoded } = express;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

// db
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
// app.use(morgan("dev"));
// app.use(json());
// app.use(urlencoded({ extended: false }));
// app.use(cors({ origin: true, credentials: true }));
app.use(express.json())
app.use(cors())

// port
const port = process.env.PORT || 8080;

// routes
const userRouter = require("./routes/user")
const carerRouter = require("./routes/petcarer")
const bookingRouter = require("./routes/booking")
app.use(userRouter);
app.use(carerRouter);
app.use(bookingRouter);

if(process.env.NODE_ENV == "production"){
	app.use(express.static("client/build"))
}

// listener
const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);