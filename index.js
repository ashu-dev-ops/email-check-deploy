const emailValidator = require("deep-email-validator");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
//   res.send("Hello World!");
try {
    console.log("running valid");
    const data = await emailValidator.validate("computerlogic25@gmail.com");
    console.log("data i am sending", data);
    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});
app.post("/email-check", async (req, res) => {
  console.log("running post");
  try {
    console.log("running valid");
    const data = await emailValidator.validate("computerlogic25@gmail.com");
    console.log("data i am sending", data);
    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
