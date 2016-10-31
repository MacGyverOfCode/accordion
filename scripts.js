'use strict'

function triggerClick(e) {
	var content = e.target.parentNode.querySelector('.accordion__content');
	var height = e.target.parentNode.getAttribute('data-height');
	var items = e.target.parentNode.parentNode.querySelectorAll('.accordion__item');
	var state = content.clientHeight;
	for (var i=0; i<items.length; i++) {
		items[i].querySelector('.accordion__content').style.height = 0;
	}
	if (state === 0) {
		content.style.height = height + 'px';
	} else {
		content.style.height = 0;
	}
}

var accordions = document.querySelectorAll('.accordion');
var items = document.querySelectorAll('.accordion__item');
var triggers = document.querySelectorAll('.accordion__trigger');

for (var i=0; i<items.length; i++) {
	var contentHeight = items[i].querySelector('.accordion__content').clientHeight;
	items[i].setAttribute('data-height', contentHeight);
}

for (i=0; i<accordions.length; i++) {
	accordions[i].classList.remove('open');
}

for (i=0; i<triggers.length; i++) {
	triggers[i].addEventListener('click', triggerClick);
}