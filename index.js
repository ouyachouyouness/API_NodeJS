const express = require("express");
const app = express();
const some = require("./dataset/survery_2.json");

//En general
app.get("/", function (req, res) {
  if (!some) {
    res.status(404).send("Data not found ! ");
  } else {
    res.send(" First Exo");
  }
});

//Require all data
app.get("/data_remuneration", (req, res) => {
  if (!some) {
    res.status(404).send("Data not found ! ");
  } else {
    res.send(some);
  }
});

// Filter by one or more fields/attributes
app.get("/data_remuneration/:id", (req, res) => {
  if (!some) {
    res.status(404).send("data not found ! ");
  } else {
    const salaire = some.filter(
      (list) =>
        list["What is your annual salary?"] === req.query.salaire &&
        list["Please indicate the currency"] === req.query.indice
    );
    res.send(salaire);
  }
});

// Route sort
app.get("/data_remuneration", (req, res) => {
  if (!some) {
    res.status(404).send("data not found ! ");
  } else {
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
  }
});

//Post

// app.post("/data_remuneration", (req, res) => {
//   const course = {
//     id: some.length + 1,
//     employer: req.body.some["Employer"],
//   };²

//   some.push(employer);
// });

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`the app listening the port ${port}  ..........`)
);
