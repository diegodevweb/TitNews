const userService = require("../services/user.service");

const create = async (req, res) => {
    const {name, username, email, password, avatar} = req.body;

    if(!name || ! username || !email || !password) {
        res.status(400).send({message: "Preencha todos os campos!"});
    }

    const user = await userService.create(req.body);

    if(!user) {
        return res.status(400).send({message: "Erro ao criar usuario."});
    }

    res.status(201).send({
        message: "Usuario cadastrado com sucesso!",
        user: {
            id: user._id,
            name, 
            username,
            email,
            avatar
        }, 
    });
};

module.exports = { create };
