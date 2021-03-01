const express = require('express');
const app=  require('express');


app.get( "/", (req , res) => {
    res.send("hello mamoudou");
});




const app = express();
app.listen(8000,() => {
    console.log("serveur lancé")
});