function replacer(str) {
    // use split and join
    let newStr = str.split("-").join("_");
    return newStr;

}

function init() {
    alert("Connect");
    let myChange = replacer("hello-world-world2");
    let myPara = document.querySelector('#asnwer');
    let myPara2 = document.querySelector('#secondAsnwer');
    let myChange2 = replacer('dogs-are-awesome');
    myPara.textContent = myChange;
    myPara2.textContent = myChange2;
}
init();