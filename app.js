const express = require("express");
const app = express();
const port = 2300;

app.get("/newsfeed", (req, res) =>
  res.send({
    items: [
      { title: "Elso", description: "Aasd asd asd asd as d", id: 0 },
      { title: "Ketto", description: "Aasd asd asd asd as d", id: 1 },
      { title: "Harom", description: "Aasd asd asd asd as d", id: 2 },
      { title: "Negy", description: "Aasd asd asd asd as d", id: 3 }
    ]
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
