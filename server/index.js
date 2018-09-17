let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let fs = require("fs");
let fetch = require("node-fetch");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://Michaelsam08:Sammy2018@ds127362.mlab.com:27362/checkpoint1-backend"
);

let messagesRoutes = require("./routes/messagesRoutes");
let ordersRoutes = require("./routes/ordersRoutes");
let tasksRoutes = require("./routes/tasksRoutes");

const app = express();
//app.use(express.static('public'))
app.use(bodyParser.json());

app.use(messagesRoutes);
app.use(ordersRoutes);
app.use(tasksRoutes);

app.get("/dateTime", function(request, response) {
  response.json(Date());
});

fs.readFile("data.csv", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  const csv = data.split(",");
  const newComments = csv[3];

  app.get("/newComments", function(request, response) {
    response.json(Number(newComments.slice(8)));
  });
  app.get("/newTasks", function(request, response) {
    response.json(Number(csv[4]));
  });
  app.get("/newOrders", function(request, response) {
    response.json(Number(csv[5]));
  });
  app.get("/tickets", function(request, response) {
    response.json(Number(csv[6]));
  });
});
app.get("/foxes", function(request, response) {
  fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(data => {
      response.json(data.image);
    });
});

app.listen(3001, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});
