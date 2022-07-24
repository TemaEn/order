'use strict';

// меню бургер

const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.menu');

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
};