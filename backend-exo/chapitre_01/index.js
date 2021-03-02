const { request, response } = require('express');
const express = require('express');
const app= express();
const port = 8000;

app.use(express.static('public'));

//Exercice 0
app.get("/", (request, response) => {
    response.send(" HELLO WORLD ");
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

 
 // Exercice 4

 const author= [
   {name:"Lawrence Nowell, UK",books:"Beowulf"},
   {name:"William Shakespeare, UK",books:"Hamlet, Othello, Romeo and Juliet, MacBeth"},
   {name:"Charles Dickens, US",books:"Oliver Twist, A Christmas Carol"},
   {name:"Oscar Wilde, UK",books:"The Picture of Dorian Gray, The Importance of Being Earnest"},
 ]
 app.get("/json/authors/:id/", (request, response) => {
  response.send(author[request.params.id].books)
 })
 
 app.get("/json/authors/:id/books", (request, response) => {
  response.send(author[request.params.id.books])
 })
 
  
 
 
 //Exercice 3
 app.get("*", (request, response) => {
  response.send("All routes - Erreur 404")
  console.log(response)
 })






app.listen(port, () => {
  console.log('Server started on port: ' + port);
});