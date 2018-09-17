const ordersModel = require("../models/ordersModel");
//get list of everything
module.exports.list = function list(req, res) {
  ordersModel
    .find({})
    .exec()
    .then(orders => {
      return res.json(orders);
    });
};

// get one thing off of list
module.exports.show = function show(request, response) {
  ordersModel
    .findById(request.params.id)
    .exec()
    .then(order => {
      return response.json(orders);
    });
};

module.exports.create = function create(req, res) {
  const newOrder = new ordersModel({
    body: req.body.body
  });
  newOrder.save().then(savedOrder => {
    return res.json(savedOrder);
  });
};
