const { request, response } = require('express');
const express = require('express');
const app= express();
const port = 8000;


//Exercice 0
app.get("/", (request, response) => {
    response.send(" Authors API ");
})


//Exercice 1
const auteurs= [
  "Lawrence Nowell, UK",
  "William Shakespeare, UK",
  "Charles Dickens, US",
  "Oscar Wilde, UK"
]
app.get("/authors/:id", (request, response) => {
 response.send(auteurs[request.params.id-1])
})

//Exercice 2
const auteursBooks= [
  "Beowulf",
  "Hamlet, Othello, Romeo and Juliet, MacBeth",
  "Oliver Twist, A Christmas Carol",
  "The Picture of Dorian Gray, The Importance of Being Earnest"
]
app.get("/authors/books/:id", (request, response) => {
  response.send(auteursBooks[request.params.id-1])
 })

 //Exercice 3
 app.get("*", (request, response) => {
  response.send("All routes - Erreur 404")
  console.log(response)
 })

 // Exercice 4

 
  





app.listen(port, () => {
  console.log('Server started on port: ' + port);
});