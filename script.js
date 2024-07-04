/* Script for parallax effect */


let text=document.querySelector('.text');
let info=document.querySelector('.info');
let our_history=document.querySelector('.our_history');
let our_menu=document.querySelector('.our_menu');
let menu_confectionery=document.querySelector('.menu_confectionery');
let coffee_caption=document.querySelector('.coffee_caption');

let c3=document.getElementById('c3');
let c4=document.getElementById('c4');
let c5=document.getElementById('c5');
let c6=document.getElementById('c6');

window.addEventListener('scroll', showEffect);

function showEffect(){
    var value=window.scrollY;
    text.style.left=value*0.2+'px';
    info.style.left=-value*0.2+'px';
    our_history.style.left=value*0.6+'px';
    our_menu.style.left=value*0.4+'px';
    menu_confectionery.style.right=value*0.4 +'px';
    coffee_caption.style.left=value*0.15+'px';

    c3.style.left=value*0.25+'px';
    c3.style.top=value*0.14+'px';

    c4.style.right=value*0.27+'px';
    c4.style.top=value*0.14+'px';

    c5.style.left=value*0.2+'px';
    c5.style.top=value*0.03+'px';
    c6.style.right=value*0.22+'px';
    c6.style.top=value*0.02+'px';
}