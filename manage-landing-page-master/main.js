// alert(" Suitable to view only for mobile screen sizes e.g 320x640 resolutions");

const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const menu = document.querySelector(".menu");
	const li = document.querySelectorAll(".menu li");

	hamburger.addEventListener("click", () => {
		//Toggle
		menu.classList.toggle("nav-active");
		//Animate
		li.forEach((item, index) => {
			if (item.style.animation) {
				item.style.animation = "";
			} else {
				item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
			}
		});
		//Hamburger Animation
		hamburger.classList.toggle("toggle");
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
	for (i = 0; i < people.length; i++) {
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
