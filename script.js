let myimg = document.getElementById('image');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

function onimg() {
    myimg.src = "pic_bulbon.gif";
    btn1.style.backgroundColor = "rgb(247, 247, 247)";
    btn1.style.border = "2px solid #FFFF00";
    btn2.style.backgroundColor = "yellow";
    btn2.style.border = "2px solid #FFFF00";
}
function offimg() {
    myimg.src = "pic_bulboff.gif";
    btn2.style.backgroundColor = "rgb(247, 247, 247)";
    btn1.style.backgroundColor = "rgb(255, 255, 0)";
}