
function changeColor(color){
    document.querySelector("h1").style.color = color;
}

function changeSize(size){
    document.querySelector('h1').style.fontSize = size;
}

let count = 0;

function incrementCount(){
    count++
    changeCount()
}

function decrementCount(){
    count--;
    changeCount()
}

function changeCount(){
    document.querySelector("#count_display").innerText = count;
}