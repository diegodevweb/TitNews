const user = (req, res) => {
    const tit = "Tit News";
    res.send({user: tit});
}

module.exports = {user};