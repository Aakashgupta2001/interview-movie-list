const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3001;

app.get("/movieList", (req, res, next) => {
  try {
    fs.readFile("./common/db.json", "utf-8", (err, data) => {
      if (err) {
        res.status(500).send("Error Reading the file");
        return;
      }
      res.json(JSON.parse(data));
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

app.post("/add", (req, res, next) => {
  try {
    console.log("sdadasd");
    if (!req.body || !req.body.Name || !req.body.rating || !req.body.releasedDate) {
      throw "Invalid Input format";
    }
    fs.readFile("./common/db.json", "utf-8", (err, data) => {
      if (err) {
        console.log("error", err);
        return;
      }
      const jsonArray = JSON.parse(data);
      jsonArray.push({
        Name: req.body.Name,
        rating: req.body.rating,
        releasedDate: req.body.releasedDate,
      });
      const jsonString = JSON.stringify(jsonArray, null, 2);

      fs.writeFile("./common/db.json", jsonString, (err) => {
        if (err) {
          console.log("err", err);
          return;
        }
        return res.status(200).send("Added Successfully");
      });
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else console.log("Server Is listening on port", port);
});
