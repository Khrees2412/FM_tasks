const checkbox = document.querySelector("input");
const annually = document.querySelectorAll(".annually");
const monthly = document.querySelectorAll(".monthly");

function togglePlan() {
	let state = true;
	checkbox.addEventListener("click", () => {
		if (state) {
			annually.forEach(item => {
				item.style.display = "none";
			});
			monthly.forEach(item => {
				item.style.display = "block";
			});
			state = !state;
		} else {
			annually.forEach(item => {
				item.style.display = "block";
			});
			monthly.forEach(item => {
				item.style.display = "none";
			});
			state = !state;
		}
	});
}
togglePlan();
