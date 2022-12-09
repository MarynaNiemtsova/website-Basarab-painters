

const divs = document.querySelectorAll('.content');
const body = document.body;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

checkPrev = () => document.querySelector('.content:first-child').classList.contains('show') ? prev.style.display = 'none' : prev.style.display = 'flex';

checkNext = () => document.querySelector('.content:last-child').classList.contains('show') ? next.style.display = 'none' : next.style.display = 'flex';
			
Array.prototype.slice.call(divs).forEach(function (el) {
			el.addEventListener('click', function () {
				this.classList.toggle('show');
				body.classList.toggle('active');
				checkNext();
				checkPrev();
			});
});

prev.addEventListener('click', function() {
			const show = document.querySelector('.show');
			const event = document.createEvent('HTMLEvents');
			event.initEvent('click', true, false);

			show.previousElementSibling.dispatchEvent(event);
			show.classList.remove('show');
			body.classList.toggle('active');
			checkNext();
});

next.addEventListener('click', function() {
			const show = document.querySelector('.show');
			const event = document.createEvent('HTMLEvents');
			event.initEvent('click', true, false);

			show.nextElementSibling.dispatchEvent(event);
			show.classList.remove('show');
			body.classList.toggle('active');
			checkPrev();
});