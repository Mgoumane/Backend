const express = require('express');
const expressHandlebars = require("express-handlebars")
const app = express();


app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');


app.get("/", (req, res) => {
    res.render("home");
});

const translation= {
    fr:'Bonjour, ça va ?',
    es:'Hola como estas ?',
    en:'Hello how are you ?',
    
}

app.get("/:lang", (req, res) => {
    if(req.params.lang === "fr"){
        res.send(translation[req.params.lang]);

    }else if((req.params.lang === "es")) {
        res.send(translation[req.params.lang]);

    }else if((req.params.lang === "en")) {
        res.send(translation[req.params.lang]);

    }else{
        res.send("");
    }
   }
)




const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});