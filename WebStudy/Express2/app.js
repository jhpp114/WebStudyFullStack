// Again, I had deleted express, so download it again to run this code

let express = require("express");
let app = express();

// visiting "/" should print "Hi, there, welcome to my assignment!"
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment");
});
// visiting "/speak/pig" should print "The pig says Oink"

// app.get("/speak/pig", function(req, res) {
//     res.send("The pig says 'Oink'");
// });
// // visitng "speak/cow" should print "the cow says moo"
// app.get("/speak/cow", function(req, res) {
//     res.send("The cow says 'Moo'");
// });
// // visiting "speak/dog" should print "the dog says Woof Woof"
// app.get("/speak/dog", function(req, res) {
//     res.send("The dog says 'Woof Woof'");
// });

app.get("/speak/:animal", function(req, res) {
    let mySoundObj = {
        pig: "Oink"
    ,   cow: "Moo"
    ,   dog: "Woof Woof"
    ,   cat: "Meow"
    ,   nemo: "Welcome Human"
    };
    let enteredAnimal = req.params.animal.toLowerCase();
    let sound = mySoundObj[enteredAnimal];
    // res.send(enteredAnimal + " speaks " + sound);
    res.send(`${enteredAnimal} is cyring ${sound}`);
});
// Visiting "/repeat/hello/3" should print "hello hello hello"
app.get("/repeat/:word/:num", function(req, res) {
    let userWord = req.params.word;
    let userNum = req.params.num;
    res.send((userWord + ' ').repeat(userNum));
    
});
// if a user visits any other route, print
// sorry, page not fouind.. what are you doing with your life
app.get('*', function(req, res) {
    res.send('Sorry, page not found...\nWhat are you doing with your life');
});

app.listen(3000, function() {
    console.log("Open Server Port 3000");
});