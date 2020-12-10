alert(" Best viewed on mobile devices");

const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const _img = document.querySelector(".hamburger img");
	const topnav = document.querySelector(".topnav");
	const div1 = document.querySelector(".div1");
	const div2 = document.querySelector(".div2");
	const body = document.querySelector("body");

	let state = true;
	hamburger.addEventListener("click", () => {
		if (state) {
			_img.src = "./images/icon-close.svg";
			state = !state;
		} else {
			_img.src = "./images/icon-hamburger.svg";
			state = !state;
		}
		topnav.classList.toggle("nav-active");
		div1.classList.toggle("div1-active");
		div2.classList.toggle("div2-active");
		body.classList.toggle("body");
	});
};
navSlide();

const img = document.querySelector(".person img");
const name = document.querySelector(".person h3");
const quote = document.querySelector(".person p");

const people = [
	{
		imgSrc: "./images/avatar-anisha.png",
		name: "Anisha Li",
		quote:
			"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
	},
	{
		imgSrc: "./images/avatar-ali.png",
		name: "Ali Bravo",
		quote:
			"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
	},
	{
		imgSrc: "./images/avatar-richard.png",
		name: "Richard Watts",
		quote:
			"“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t	stop recommending them to everyone I talk to!”"
	},
	{
		imgSrc: "./images/avatar-shanai.png",
		name: "Shanai Gough",
		quote:
			"“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
	}
];

let counter = 0;

function slide() {
	counter++;
	for (let i = 0; i < people.length; i++) {
		if (counter >= people.length) {
			counter = 0;
		}

		img.src = people[counter].imgSrc;
		name.innerHTML = people[counter].name;
		quote.innerHTML = people[counter].quote;
	}
}

setInterval(() => {
	slide();
}, 4000);
