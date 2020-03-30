// set up
const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");
const apiKey = 'a68d4236';

app.get("/", function(req, res) {
    res.render('search');
});

app.get("/results", function(req, res) {
    let userSearched = req.query.movieTitle;
    let url = `http://www.omdbapi.com/?s=${userSearched}&apikey=${apiKey}`
    //guardians
    request(url, function(error, response, body) {
        if (error) {
            console.log("Error!");
            console.log(error);
        } else {
            if (response.statusCode == 200) {
                // work
                let parsedMovie = JSON.parse(body);
                res.render("result", {parsedMovie: parsedMovie});
            }
        }
    });    
});

app.listen(3000, function() {
    console.log("Movie App has started");
});