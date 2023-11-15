const express = require("express");
const { setupLogging } = require("./logging");
const { ROUTES } = require("./routes");
const { setupProxies } = require("./proxy");

const app = express();
const port = 3001;

setupLogging(app);
setupProxies(app, ROUTES);

app.listen(port, () => {
  console.log(`Shopping app listening at http://localhost:${port}`);
});
