const express = require("express");
const bodyParser = require("body-parser");

const productsRoutes = require("./routes/products-routes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.use("/api/products", productsRoutes);

app.listen(4000);
