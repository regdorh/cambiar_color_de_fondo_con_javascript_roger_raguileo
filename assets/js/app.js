let btn_forest = document.getElementById('btnforest');
let btn_endlessriver = document.getElementById('btnendlessriver');
let btn_brokenhearts = document.getElementById('btnbrokenhearts');
let btn_loveandliberty = document.getElementById('btnloveandliberty');
let btn_default = document.getElementById('btndefault');
let box = document.querySelector('.box');

function changeColorBtn1() {
    if(btn_forest.value == "Forest") {
        box.style.background = "linear-gradient(to right, #5a3f37, #2c7744)";
    }
}

function changeColorBtn2() {
    if(btn_endlessriver.value == "Endless River") {
        box.style.background = "linear-gradient(to right, #43cea2, #185a9d)";
    }
}

function changeColorBtn3() {
    if(btn_brokenhearts.value == "Broken Hearts") {
        box.style.background = "linear-gradient(to right, #d9a7c7, #fffcdc)";
    }
}

function changeColorBtn4() {
    if(btn_loveandliberty.value == "Love and Liberty") {
        box.style.background = "linear-gradient(to right, #200122, #6f0000)";
    }
}

function changeColorBtn5() {
    if(btn_default.value == "Default") {
        box.style.background = "linear-gradient(to right, #FFFFFF, #ECE9E6)";
    }
}
