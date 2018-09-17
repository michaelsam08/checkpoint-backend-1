const messagesModel = require("../models/messagesModel");
//get list of everything
module.exports.list = function list(req, res) {
  messagesModel
    .find({})
    .exec()
    .then(messages => {
      return res.json(messages);
    });
};

// get one thing off of list
module.exports.show = function show(request, response) {
  messagesModel
    .findById(request.params.id)
    .exec()
    .then(message => {
      return response.json(messages);
    });
};

module.exports.create = function create(req, res) {
  const newMessage = new messagesModel({
    body: req.body.body
  });
  newMessage.save().then(savedMessage => {
    return res.json(savedMessage);
  });
};
