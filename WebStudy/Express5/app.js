// four packages are downloaded
// express; ejs; request; request-promise;

// set up
const express = require("express");
const app = express();
const rp = require("request-promise");

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home');
});


    rp('https://jsonplaceholder.typicode.com/users/1', (error, response, body)=> {
    if (error) {
        console.log("Something Wrong!");
        console.log(error);
    } else {
        if (response.statusCode === 200) {
            // means it worked
            // since the return value from body is string
            // we have to change it into JSON obj
            let parsedUserData1 = JSON.parse(body);
            console.log(`${parsedUserData1.name} is live in ${parsedUserData1.address.city}`);
        }
    }
});


app.listen(3000, () => {
    console.log("Port 3000 started");
});