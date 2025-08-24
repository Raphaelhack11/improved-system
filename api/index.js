// Express server entry
const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/auth", require("./auth"));
app.use("/api/plans", require("./plans"));
app.use("/api/transactions", require("./transactions"));

app.listen(3000, () => console.log("API running"));
