// document.getElementById('');
// document.getElementsByClassName('classname');
// document.getElementsByTagName('br');
// document.querySelector('.menu');
// document.querySelectorAll('i')


var burg = document.getElementById('burger');
burg.onclick = function(){
addMenu();
};

function addMenu(){
    document.querySelector('.mob-menu').classList.toggle('show');
}


// var i = 0;
// var image = document.getElementById("image");
// var imgs = new Array('/image/map/GoogleMap1.png', '/image/map/GoogleMap2.png');

// function imgsrc() {
//     i++;
//     i %= imgs.length;
//     image.src = imgs[i];
// }