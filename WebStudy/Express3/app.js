// please install npm express to run

let express = require("express");
let app = express();

app.get('/fallinlove/:object', function(req, res) {
    let theObj = req.params.object;
    res.render("index.ejs", {myObj:theObj});
});

// exercise using loop
app.get("/posts", function(req, res) {
    let movieObj = [
        {title: "She is pretty", author: "Jun"}
    ,   {title: "Kingdom Season 2", author: "Nemo"}
    ,   {title: "Hardcore Level up Warrior", author: "Park"}
    ];
    res.render("post.ejs", {postObj: movieObj});
});

app.listen(3000, function() {
    console.log("The Server is Opened");
});