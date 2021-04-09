var row_f = document.querySelector('.container-carousel');
var films = document.querySelectorAll('.disc');

var arrowLeft = document.getElementById('arrow-left');
var arrowRight = document.getElementById('arrow-right');

//Here we will have an event listener for the right arrow. Event listners become active when the user clicks a button, this is donw with the addEventListener method. As we can see, it is set to 'click' and will scroll left every time we hit the rifht arrow because of (row_f.scrollLeft += row_f.offsetWidth).
arrowRight.addEventListener('click', () => {
	row_f.scrollLeft += row_f.offsetWidth;

	var activeIndicator = document.querySelector('.indicators .activo');
	if(activeIndicator.nextSibling){
		activeIndicator.nextSibling.classList.add('activo');
		activeIndicator.classList.remove('activo');
	}
});

//Here we will have an event listener for the left arrow, same concept and comments as in the right arrow
arrowLeft.addEventListener('click', () => {
	row_f.scrollLeft -= row_f.offsetWidth;

	var activeIndicator = document.querySelector('.indicators .activo');
	if(activeIndicator.previousSibling){
		activeIndicator.previousSibling.classList.add('activo');
		activeIndicator.classList.remove('activo');
	}
});

// Pagination, this will determine how the box where the albums are behaves. 
var numberPages = Math.ceil(films.length / 5);
for(let i = 0; i < numberPages; i++){
	var indicator = document.createElement('button');

	if(i === 0){
		indicator.classList.add('activo');
	}

	document.querySelector('.indicators').appendChild(indicator);
	indicator.addEventListener('click', (e) => {
		row_f.scrollLeft = i * row_f.offsetWidth;

		document.querySelector('.indicators .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

//Here we are making the hover animation that makes the boxes where the arrows are in bigger, each will begin once the mouse enters the box (mouseenter), and be removed once it leaves. 
films.forEach((film) => {
	film.addEventListener('mouseenter', (e) => {
		var elemento = e.currentTarget;
		setTimeout(() => {
			films.forEach(film => film.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

row_f.addEventListener('mouseleave', () => {
	films.forEach(film => film.classList.remove('hover'));
});