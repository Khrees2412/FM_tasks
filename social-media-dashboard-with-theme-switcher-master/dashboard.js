alert("This project is yet to be completed!");

const btnToggle = document.querySelector(".btn-toggle");
const img = document.querySelector(".toggle");
const box = document.querySelectorAll(".box");
const count = document.querySelectorAll(".count");
const headline = document.querySelector("section h1");
const headtag = document.querySelector("section p");
const bottom = document.querySelectorAll(".sm h1");

let state = true;

btnToggle.addEventListener("click", () => {
	state = !state;
	if (state) {
		img.src = "./images/mode-switch (3).jpg";
		document.body.style.backgroundColor = "black";
		box.forEach(b => (b.style.backgroundColor = "hsl(230, 17%, 14%)"));
		count.forEach(c => (c.style.color = "white"));
		headline.style.color = "white";
		headtag.style.color = "white";
		bottom.forEach(bt => (bt.style.color = "white"));
	} else {
		img.src = "./images/mode-switch (2).jpg";
		document.body.style.backgroundColor = "white";
		box.forEach(b => (b.style.backgroundColor = "ghostWhite"));
		count.forEach(c => (c.style.color = "black"));
		headline.style.color = "initial";
		headtag.style.color = "initial";
		bottom.forEach(bt => (bt.style.color = "initial"));
	}
});
