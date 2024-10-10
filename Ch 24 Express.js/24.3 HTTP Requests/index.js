import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("<h1> Hello </h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Information</h1><p>arifa6@vcu.edu</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1><p>I'm learning Express.js</p>");
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
