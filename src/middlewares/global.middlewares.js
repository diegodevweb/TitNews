const mongoose = require("mongoose");
const userService = require("../services/user.service");

validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID invalido!" });
  }

  next();
};

validUser = async (req, res, next) => {
  const id = req.params.id;

  const user = await userService.findByIdService(id);

  if (!user) {
    return res.status(400).send({ message: "Usuario nao encontrado" });
  }

  req.id = id;
  req.user = user;

  next();
};

module.exports = { validId, validUser };
