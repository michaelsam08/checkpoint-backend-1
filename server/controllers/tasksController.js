const tasksModel = require("../models/tasksModel");
//get list of everything
module.exports.list = function list(req, res) {
  tasksModel
    .find({})
    .exec()
    .then(tasks => {
      return res.json(tasks);
    });
};

// get one thing off of list
module.exports.show = function show(request, response) {
  tasksModel
    .findById(request.params.id)
    .exec()
    .then(task => {
      return response.json(tasks);
    });
};

module.exports.create = function create(req, res) {
  const newTask = new tasksModel({
    body: req.body.body
  });
  newTask.save().then(savedTask => {
    return res.json(savedTask);
  });
};
