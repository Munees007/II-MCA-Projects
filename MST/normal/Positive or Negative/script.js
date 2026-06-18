"use strict";
const numRef = document.getElementById("num");
const resRef = document.getElementById("res");
function Check() {
    const num = parseInt(numRef.value);
    numRef.value = "";
    if (num == 0) {
        resRef.innerText = `Result: ${num} is Zero`;
    }
    else if (num > 0) {
        resRef.innerText = `Result: ${num} is Positive Number`;
    }
    else {
        resRef.innerText = `Result: ${num} is Negative Number`;
    }
}
