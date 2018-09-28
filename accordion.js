'use strict'

class Accordion {

	constructor(container, keepOthersOpen = false) {
		const items = container.querySelectorAll('.accordion__item');
		const triggers = container.querySelectorAll('.accordion__trigger');
		this.setClassesAttributesAndListners(container, items, triggers);
		this.keepOthersOpen = keepOthersOpen;
	}

	setClassesAttributesAndListners(container, items, triggers) {
		[ ...items ].forEach((item) => {
			const contentHeight = item.querySelector('.accordion__content').clientHeight;
			item.setAttribute('data-height', contentHeight);
		});
		[ ...triggers ].forEach((trigger) => {
			trigger.addEventListener('click', this.triggerClick.bind(this));
		});
		container.classList.remove('accordion--open');
	}

	triggerClick(e) {
		const content = e.target.parentNode.querySelector('.accordion__content');
		const height = e.target.parentNode.getAttribute('data-height');
		const items = e.target.parentNode.parentNode.querySelectorAll('.accordion__item');
		const state = content.clientHeight;
		if (!this.keepOthersOpen) {
			items.forEach((item) => {
				item.querySelector('.accordion__content').style.height = 0;
			});
		}
		if (state === 0) {
			content.style.height = height + 'px';
		} else {
			content.style.height = 0;
		}
	}

}