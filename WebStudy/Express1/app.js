// Install express from npm
let express = require("express");
let app = express();

// http get
app.get("/", function(req, res) {
    res.send("Hello there!");
});
// http get
app.get("/bye", function(req, res) {
    res.send("Good Bye");
});
// http get
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("Meow");
});

app.get("/r/:main", function(req, res) {
    let userInput = req.params.main;
    res.send(`Your Request ${userInput.toUpperCase()} is denied`);
});

app.listen(3000, function(){
    console.log("Opened Server");
});