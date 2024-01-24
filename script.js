let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
let circle5 = document.querySelector(".circle5");
let circle6 = document.querySelector(".circle6");
let circle7 = document.querySelector(".circle7");
let circle8 = document.querySelector(".circle8");
let sideCircle1 = document.querySelector(".sideCircle1");
let sideCircle2 = document.querySelector(".sideCircle2");

anime({
	targets: [circle1, circle5, circle8, sideCircle1],
	rotate: 360,
	duration: 2000,
	loop: true,
	easing: "linear",
});

anime({
	targets: [circle2, circle3, circle4, circle7, sideCircle2],
	rotate: -360,
	duration: 2000,
	loop: true,
	easing: "linear",
});

//===progress bar===//
const progressBar = document.querySelector(".progressBar");
const blocks = [];

for (let i = 0; i < 100; i++) {
	const block = document.createElement("div");
	block.classList.add("block");
	progressBar.appendChild(block);
	blocks.push(block);

	anime({
		targets: block,
		rotate: 3.6 * i,
		opacity: 1,
		delay: i * 10,
		duration: 2000,
		easing: "linear",
	});
}

// =======Equlizer==========
const equalizer = document.querySelector(".equalizer");
for (let i = 0; i <= 35; i++) {
	const bar = document.createElement("div");
	bar.classList.add("bar");
	equalizer.appendChild(bar);
}

const bars = document.querySelectorAll(".bar");

function randomizeHeights() {
	bars.forEach((bar) => {
		const randomHeight = Math.floor(Math.random() * 150);
		const duration = Math.floor(Math.random() * 100) + 500;

		anime({
			targets: bar,
			height: randomHeight,
			duration: duration,
			easing: "easeInOutQuad",
		});
	});
}
setInterval(randomizeHeights, 500);

// =============Scroll Reveal==============//

const mainCircle = document.querySelector(".circleContainer");
const topBar = document.querySelector(".topBar");
const topNav = document.querySelector(".topNav");
const sideNavToptext = document.querySelector(".sideNavToptext");
const sideNavCircle = document.querySelector(".sideNavCircle");
const cardShadow = document.querySelector(".cardShadow");
// const mainTextBox = document.querySelector(".mainTextBox");
// const mainTextBox2 = document.querySelector(".mainTextBox2");
const rightSideBox = document.querySelector(".rightSideBox");

const reveal = ScrollReveal({
	reset: true,
	distance: "50px",
	duration: 2000,
	delay: 400,
});
reveal.reveal([mainCircle], {
	delay: 300,
	origin: "top",
	opacity: 0,
});
reveal.reveal([topBar, cardShadow, rightSideBox], {
	delay: 300,
	origin: "bottom",
	opacity: 0,
});
reveal.reveal([sideNavCircle], {
	delay: 300,
	origin: "left",
	opacity: 0,
});
// reveal.reveal([mainTextBox], {
// 	delay: 300,
// 	origin: "right",
// 	opacity: 0,
// });
reveal.reveal(".sideNavLinks li", {
	delay: 200,
	origin: "top",
	interval: 200,
});

// --------------
const reveal2 = ScrollReveal({
	reset: true,
	distance: "500px",
	duration: 2000,
	delay: 400,
});
reveal2.reveal([topBar], {
	delay: 500,
	origin: "right",
	opacity: 0,
});
reveal.reveal(".rightSideNav li", {
	delay: 200,
	origin: "right",
	interval: 200,
});
reveal.reveal(".mainBtmNav .rowLink", {
	delay: 200,
	origin: "bottom",
	interval: 200,
});
// --------------
const reveal3 = ScrollReveal({
	reset: true,
	distance: "-100px",
	duration: 2000,
	delay: 400,
});
reveal3.reveal([topNav, sideNavToptext], {
	delay: 700,
	origin: "right",
	opacity: 0,
});
// ------------------

// ========Show Box==========

const btn1 = document.querySelector(".circleLink .link1");
const btn2 = document.querySelector(".circleLink .link2");
const btn3 = document.querySelector(".circleLink .link3");
const btn4 = document.querySelector(".circleLink .link4");
const btn5 = document.querySelector(".circleLink .link5");
const btn6 = document.querySelector(".circleLink .link6");
const btn7 = document.querySelector(".circleLink .link7");
const btn8 = document.querySelector(".circleLink .link8");
const mainTextBox = document.querySelector(".mainTextBox");
const mainTextBox2 = document.querySelector(".mainTextBox2");
const mainTextBox3 = document.querySelector(".mainTextBox3");
const mainImg1 = document.querySelector(".mainImg1");

// const activeBtn = [btn1, btn1, btn3, btn4, btn5, btn6, btn7, btn8];
// for (let i = 0; i <= activeBtn.length; i++) {
// 	let btn = activeBtn[i];
// 	btn.addEventListener("click", () => {
// 		btn.classList.toggle("active");
// 	});
// }

const btnAll = document.querySelectorAll(".circleLink a");

btnAll.forEach((btn) => {
	btn.addEventListener("click", () => {
		// btn.style.background = btn.style.background === "yellow" ? "" : "yellow";
		// btn.style.color = btn.style.color === "blue" ? "" : "blue";
		// btn.style.background =
		// 	btn.style.background === "#87eafc" ? "" : "#87eafc";
		// btn.style.color = btn.style.color === "#202023" ? "" : "#202023";
		btn.classList.toggle("active");
	});
});

const showMainTextBox = () => {
	mainTextBox.classList.toggle("hidden");
};

const showMainTextBox2 = () => {
	mainTextBox2.classList.toggle("hidden");
};

const showMainTextBox3 = () => {
	mainTextBox3.classList.toggle("hidden");
};

const showMainImg1 = () => {
	mainImg1.classList.toggle("hidden");
};

btn1.addEventListener("click", showMainTextBox);
btn2.addEventListener("click", showMainTextBox2);
btn3.addEventListener("click", showMainTextBox3);
btn5.addEventListener("click", showMainImg1);
