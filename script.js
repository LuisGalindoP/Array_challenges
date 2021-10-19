//-------------------------------------------------1 Always hungry---------------------------------
function alwaysHungry(arr) {
    var food = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            food++;
        }       
    }
    if (food == 0) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//-------------------------------------------------2 High Pass Filter---------------------------------
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
            
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//-------------------------------------------------3 Better than average---------------------------------
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    var average = 0;
    for (var i = 0; i < arr.length; i++)  {
        sum += arr[i]; 
    }
    average = sum/arr.length;
    for (var i = 0; i < arr.length; i++)  {
        if (average < arr[i]) {
            count++;
        } 
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
//-------------------------------------------------4 Array reverse;---------------------------------

function reverse(arr) {
    var newarr = [];
    for (i = arr.length-1; i > -1; i--) {
        newarr.push(arr[i]);
    }
    arr = newarr;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//-------------------------------------------------5 Fibonachi Array---------------------------------

function fibonacciArray(n) {
    var fibarr = [0, 1];
    var newArr = [];
    var sum = 0;
    for (var i = 0; i < n; i++) {     
        newArr.push(fibarr[0]);
        sum = fibarr[0] + fibarr[1];
        fibarr[0] = fibarr[1];
        fibarr[1] = sum; 
    }
    fibarr = newArr;
    return fibarr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
