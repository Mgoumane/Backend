const express = require('express');
const app = express();
const expressHandlebars = require("express-handlebars")



app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get("/", (req, response) => {
    response.render("home");
})

app.listen(8000, () => {
    console.log("Serveur lancé");
  });