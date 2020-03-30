// Had Deleted Express body parser and ejs
// npm install ___ to run this

const express = require("express");
const app = express();
// for body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Global variable to easy manage
let friends = ["Tommy", "Jun Park", "Mylah"];
// root render home
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friend", {friends: friends});
});

// post method to add new friend
app.post("/addNewFriend", function(req, res) {
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(3000, function() {
    console.log("Port 3000 is opened");
});