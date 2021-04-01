const checkbox = document.querySelector("input");
const box = document.querySelectorAll(".box");
const count = document.querySelectorAll(".count");
const headline = document.querySelector("section h3");
const bottom = document.querySelectorAll(".sm h1");

let state = true;

checkbox.addEventListener("click", () => {
	if (state) {
		document.body.style.backgroundColor = "black";
		box.forEach(b => (b.style.backgroundColor = "hsl(230, 17%, 14%)"));
		count.forEach(c => (c.style.color = "white"));
		headline.style.color = "white";
		bottom.forEach(bt => (bt.style.color = "white"));
		state = !state;
	} else {
		document.body.style.backgroundColor = "white";
		box.forEach(b => (b.style.backgroundColor = "ghostWhite"));
		count.forEach(c => (c.style.color = "black"));
		headline.style.color = "initial";
		bottom.forEach(bt => (bt.style.color = "initial"));
		state = !state;
	}
});
