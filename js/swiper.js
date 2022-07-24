// инициализация Свайпера
const myImageSlider = new Swiper('.gallery__slider', {
	// НАСТРОЙКИ
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// пагинация (навигации)
	pagination: {
		el: '.swiper-pagination',
		// Прогрессбар (скролл)
		type: 'progressbar',
	},

	simulateTouch: true, // переключение перетаскиванием мыши
	touchRatio: 1, // чувствительность свайпа
	touchAngle: 45, // угол срабатывания свайпа
	grabCursor: false, // меняет стрелку на руку
	slideToClickedSlide: false, // свайп по щелчку на изображении

	// переключение на клавиатуре
	keyboard: {
		enabled: true, // вкл/выкл
		onlyInViewport: true, // вкл/выкл, только если слайдер в пределах видимости
		pageUpDown: true, // вкл/выкл, управление клавишами pageup, pagedown
	},

	// управление с помощью колеса мыши
	mousewheel: {
		sensitivity: 1, // чувствительность машины
		eventsTarget: '.gallery__slider' // класс объекта, на котором будет срабатывать прокрутка колесом (если много слайдеров, будут прокурчиваться все)
	},

	// автовысота
	autoHeight: false, // подстаривает слайдер под размер контента

	// кол-во показанных слайдов
	slidesPerView: 1, // можно указывать десятичные числа. (auto - автоматическая ширина + css)

	// отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// отступ между слайдами в px
	spaceBetween: 30,

	// кол-во пролистываемых слайдов
	slidesPerGroup: 1,

	//стартовый слайд
	initialSlide: 0,

	// бесконечная прокрутка слайдера
	loop: true, // (отключить скролл, мультирядность, если slidesperview: 3, тогда, ниже ->)

	// свободный режим
	freeMode: false,

	// скорость прокрутки слайдов
	speed: 300,

});