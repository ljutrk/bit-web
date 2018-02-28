"use strict";

var body = document.querySelector("body");

function createSelect(arr, parent) {
    var select = document.createElement("select");
    for (let i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        option.value = arr[i];
        option.textContent = arr[i]; 
        
        select.appendChild(option);
    }

    parent.appendChild(select);
}
createSelect(["one", "two", "three"], body);
createSelect(["one", "two", "three"], body);









