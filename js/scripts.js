console.log('Javascript Loaded');

var burger = document.getElementById('burger');
var mobilenav = document.getElementById('offscreen-nav');
var closebtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var tooltip = document.getElementById('tool-tip');


burger.addEventListener('click', function(){
    console.log('button clicked');
    mobilenav.style.width= '50%';
    mobilenav.style.transition = '0.5s ease';
} );

closebtn = document.addEventListener('click', function(){
mobilenav.style.width= '0';
mobilenav.style.transition= '0.5s ease';
content.style.opacity= '1';

}

);

moreInfoText.addEventListener("mouseenter", function(event){
    tooltip.style.opacity='1';
    var x = event.pageX;
    var y = event.pageY;
    console.log(y);
    
}
);