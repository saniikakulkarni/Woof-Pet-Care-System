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

// port
const port = process.env.PORT || 8080;

app.use(express.json())

// routes
const testRouter = require("./routes/test")
const userRouter = require("./routes/user")
app.use(userRouter);

// listener
const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);