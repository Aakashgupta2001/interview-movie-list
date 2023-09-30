const express = require("express");
const app = express();

const port = 3001;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else console.log("Server Is listening on port", port);
});
