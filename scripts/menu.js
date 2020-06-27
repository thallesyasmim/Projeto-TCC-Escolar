const menu = document.querySelector('.menu');
const menuHamb = document.querySelector('.menuHamb');
let show = true;


menuHamb.addEventListener('click', menuHamburguer)

function menuHamburguer(){
    document.body.style.overflowY = show ? 'hidden' : 'initial';

    menu.classList.toggle('on', show);

    show = !show;
}