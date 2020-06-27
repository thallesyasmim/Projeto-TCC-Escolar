const cardsTeam = document.querySelectorAll('.card');

cardsTeam.forEach((card, index) => {
    if(index === 4 || index === 1){
        card.setAttribute('data-anime', 'top');
    }
    else if(index === 0){
        card.setAttribute('data-anime', 'left');
    }
    else if(index === 5){
        card.setAttribute('data-anime', 'right');
    }
    else if(index % 2 === 0){
       card.setAttribute('data-anime', 'right');
    } 
    else{
        card.setAttribute('data-anime', 'left');
    }
})

const elementsAnimate = document.querySelectorAll('[data-anime]');

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


function animateScroll(){
     const windowTop = window.pageYOffset + window.innerHeight * 0.75;

     elementsAnimate.forEach(element => {
         if(windowTop > element.offsetTop){
             element.classList.add('animate');
         } else {
             element.classList.remove('animate');
         }
     })
}

animateScroll();

if(elementsAnimate.length){
    window.addEventListener('scroll', debounce(() => {
        animateScroll()
    }, 50));
}