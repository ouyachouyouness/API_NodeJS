const express = require("express");
const app = express();
const some = require("./dataset/survery_1.json");

//En general
app.get("/", function (req, res) {
  res.send(" First Exo");
});

//Require all data
app.get("/data_remuneration", (req, res) => {
  res.send(some);
});

// Filter by one or more fields/attributes
app.get("/data_remuneration/:id", (req, res) => {
  console.log(some);

  const salaire = some.filter(
    (list) =>
      list["What is your annual salary?"] === req.query.salaire &&
      list["Please indicate the currency"] === req.query.indice
  );
  res.send(salaire);
});

// Route sort
app.get("/data_remuneration", (req, res) => {
  console.log(some);

  let data = JSON.parse(JSON.stringify(some));

  // sort by one or more fields/attributes
  if (req.query.sort) {
    const keys = req.query.sort.split(",");
    keys.forEach((key) => {
      data = data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    });

    res.send(data);
  }

  //return a set of scattered fields
  if (req.query.fields) {
    const fields = req.query.fields.split(",");
    let element = data[Math.floor(Math.random() * data.length)];
    let obj = {};
    fields.forEach((field) => {
      obj[field] = element[field];
    });
    res.send(obj);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`the app listening the port ${port}  ..........`)
);
