function iterateMovie(movieObj) {
    movieObj.forEach(function(ele) {
        let hasSeen = "";
        if (ele.hasWatched) {
            hasSeen = "You have watched ";
        } else {
            hasSeen = "You have not seen "; 
        }

        console.log(`${hasSeen} "${ele.title}" - ${ele.rate} stars`);
    });
}

function init() {
    let movieArr = [
        {
            title: "Movie 1"
        ,   rate: 4.5
        ,   hasWatched: true
        },
        {
            title: "Movie 2"
        ,   rate: 5
        ,   hasWatched: false
        },
        {
            title: "Movie 3"
        ,   rate: 3
        ,   hasWatched: true
        },
        {
            title: "Movie 4"
        ,   rate: 1
        ,   hasWatched: false
        }
    ];

    iterateMovie(movieArr);
}

init();