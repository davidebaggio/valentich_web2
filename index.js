let slidePos = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');
const doctors = document.querySelectorAll('.pro-item');
let allMainDivs = document.querySelectorAll('.main-div');
let buttons = document.querySelectorAll('.left-but');
const goHomes = document.querySelectorAll('.go-home');


function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove('carousel-item-visible');
		slide.classList.add('carousel-item-hidden');
	}

	for (let dot of dots) {
		dot.classList.remove('dot-active');
	}

	dots[slidePos].classList.add('dot-active');
	slides[slidePos].classList.add('carousel-item-visible');
}

function moveToNextSlide() {
	if (slidePos === totalSlides - 1) {
		slidePos = 0;
	} else {
		slidePos++;
	}

	updateSlidePosition();
}

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		moveToNextSlide();
	});
});

function enableDoctorIth(i) {
	for (let j = 0; j < allMainDivs.length; j++) {
		allMainDivs[j].classList.remove('active');
		allMainDivs[j].classList.add('hidden');
	}
	allMainDivs[i + 1].classList.remove('hidden');
	allMainDivs[i + 1].classList.add('active');
}

doctors.forEach((doctor) => {
	doctor.addEventListener('click', () => {
		console.log(doctor);
		for (let i = 0; i < doctors.length; i++) {
			if (doctors[i] === doctor) {
				enableDoctorIth(i);
			}
		}
	});
})

goHomes.forEach((goHome) => {
	goHome.addEventListener('click', () => {
		for (let i = 0; i < allMainDivs.length; i++) {
			allMainDivs[i].classList.remove('active');
			allMainDivs[i].classList.add('hidden');
		}
		allMainDivs[0].classList.add('active');
		allMainDivs[0].classList.remove('hidden');
	});
})