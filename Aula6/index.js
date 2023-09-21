const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("App Web - Aprendendo Express");
})

app.get("/Hello/:n", function(req, res){
    let nome = req.params.n
    res.send(`Manda um salve ${nome}`);
})

const PORT = 8080;
app.listen(PORT, function(){
    console.log(`App rodando na porta ${PORT}`)
})