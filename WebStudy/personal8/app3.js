function listManager() {
    let myLists = document.querySelectorAll('li');
    console.log(myLists);
    for (let i = 0; i < myLists.length; i++) {
        myLists[i].addEventListener('mouseover', function() {
            this.classList.add("selected");
        });
        myLists[i].addEventListener('mouseout', function() {
            this.classList.remove("selected");
        });
        myLists[i].addEventListener("click", function() {
            this.classList.toggle("clicked");
        });
    }

}
function init() {
    listManager();
}
init();