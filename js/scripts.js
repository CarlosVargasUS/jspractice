console.log('Javascript Loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closebtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var tooltip = document.getElementById('tool-tip');

burger.addEventListener('click', function(){
    console.log("buton clicked");
    mobileNav.style.display = "block";

    mobileNav.style.background = "red";

    mobileNav.style.transition = '0.5s ease';
    //content.style.opacity='0.1';

});

closebtn = document.addEventListener('click', function(){
mobileNav.style.width= '0';
mobileNav.style.transition= '0.5s ease';
content.style.opacity= '1';
});

moreInfoText.addEventListener("mouseenter", function(event){
    tooltip.style.opacity='1';
    var x = event.screenX;
    var y = event.screenY;
    console.log(y);
    tooltip.style.top = y +'px';
    tooltip.style.left = x + 'px';
}
);