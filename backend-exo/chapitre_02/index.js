const express = require('express');
const expressHandlebars = require("express-handlebars")
const app = express();


app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');


app.get("/form", (req, res) => {
    res.render("form");
});

app.use(express.urlencoded({ extended: true }))
app.post("/form", (req, res) => {
    console.log(req.body);
    res.redirect('https://www.konexio.eu/index.html')
});










const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});