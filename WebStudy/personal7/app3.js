// printReverse() - simply print reverse order
// isUniform() - param: array, return true if all elements in the arrays are identical
// sumArray() returns sum
// max()

function printReverse(arrayParam) {
    for (let i = arrayParam.length -1; i >= 0; i--) {
        console.log(arrayParam[i]);
    }
}

function isUniform(arrayParam) {
    let firstValue = arrayParam[0];
    return arrayParam.every(function (arr) {
        return arr === firstValue;
    });
}

function sumArray(arrayParam) {
    let sum = 0;
    arrayParam.forEach(function(arr) {
        sum += arr;
    });
    return sum;
}

function max(arrayParam) {
    let myMax = arrayParam[0];
    arrayParam.forEach(function(ele) {
        if (myMax < ele) {
            myMax = ele;
        }
    });
    return myMax;
}

function returnMalfoy(someObj) {
    return someObj.friends[0].name;
}

function init() {
    let testArray1 = [1, 2, 3, 4, 5];
    printReverse(testArray1);
    // Testing isUniform
    let isSame = isUniform(testArray1);
    console.log(isSame);
    let TestArray2 = [1, 1, 1, 1, 1];
    let isSame2 = isUniform(TestArray2);
    console.log(isSame2);
    // end of isUniform
    let summation = sumArray(testArray1);
    console.log(summation);
    let summation2 = sumArray(TestArray2);
    console.log(summation2);
    let maximum = max(testArray1);
    console.log(maximum);
    let testArray3 = [10,1,4,8,12,3,2,13,7];
    let maximum2 = max(testArray3);
    console.log(maximum2);

    // object exercise
    let somObject= {
        friends: [
            {name: "Malfoy"},
            {name: "Crabbe"},
            {name: "Goyle"}
        ],
        color: "baby blue",
        isEvil: true
    };
    console.log(returnMalfoy(somObject));
}

init();