const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.get("/test", (req, res) => {
  try {
    res.send("Hello");
  } catch (error) {
    res.send(error);
  }
});
app.listen(process.env.PORT || 3000);
