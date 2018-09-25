console.log('Javascript Loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementsByClassName('no-show-bar');
var lists = document.getElementsByClassName('list');
var closebtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var tooltip = document.getElementById('tool-tip');

burger.addEventListener('click', function () {

    console.log("button clicked");
    mobileNav[0].style.width = '50%';
    mobileNav[0].style.transition = '0.5s ease';
    content.style.opacity = '1'

});

closebtn.addEventListener('click', function () {
    mobileNav[0].style.width = '0%';
    mobileNav[0].style.transition = '0.5s ease';
});

moreInfoText.addEventListener("mouseenter", function (event) {
    tooltip.style.opacity='1';
    var x = event.screenX;
    var y = event.screenY;
    console.log(y);
    tooltip.style.top = y +'px';
    tooltip.style.left = x + 'px';
}
);
