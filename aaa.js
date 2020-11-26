var num = 0;
var img = document.getElementById("img");
var array = ['images/111.jpg', 'images/222.jpg', 'images/444.jpg', 'images/333.jpg', 'images/555.jpg'];
var stop1= document.getElementById("stop")
function changeImg() {

    img.src = array[num];
    num++;
    if (num == array.length) num = 0;
}
setInterval("changeImg()", 2000)
function next() {
    img.src = array[num];
    num--;
    if (num == -1) num = array.length - 1;
}
stop1.onmouseover=function(){
    clearInterval(auto)
}
