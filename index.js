const express = require("express");
const app = express();

app.get("/", (req,res) => {
	res.send("Mensagem a exibir");
	});
	
app.listen(3000);