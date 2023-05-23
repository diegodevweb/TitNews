const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password) {
    res.status(400).send({ message: "Preencha todos os campos!" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Erro ao criar usuario." });
  }

  res.status(201).send({
    message: "Usuario cadastrado com sucesso!",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
    },
  });
};

const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "Nao ha usuarios cadastrados." });
  }

  res.send(users);
};

const findById = async (req, res) => {

  const user = req.user;

  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name && !username && !email && !password) {
    res.status(400).send({ message: "Preencha todos os campos!" });
  }

  const id = req.id;

  const user = await userService.findByIdService(id);
  
  await userService.updateService(
    id, 
    name,
    username,
    email,
    password,
    avatar
  );

  res.send({message : "Usuario atualizado com sucesso!"});

};

module.exports = { create, findAll, findById, update };
