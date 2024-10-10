import express, { response } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

// function bandNameGenerator(req, res, next)
// {
//   bandName = req.body['street'] + req.body['pet'];
//   next();
// }

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // res.send(output);
  const output = `<h1>Your band name is:</h1><p>${req.body.street}${req.body.pet}</p>`;
  res.send(output);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
