const express = require("express");
const app = express();
const port = 3001;
const host = "0.0.0.0";

app.get("/", (req, res) => {
res.send("Hello World! -from server");
});

app.listen(port, host, () => {
console.log(`Server listening at http://${host}:${port}`);

});

module.exports = app;