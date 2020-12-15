const address = document.getElementById("address");
const userlocation = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");
const input = document.querySelector(".search");
alert("Not completed yet!!");

var map = L.map("mapid");

let lat;
let lng;

const displayMap = () => {
	var markerIcon = L.icon({
		iconUrl: "images/icon-location.svg",

		iconSize: [46, 56], // size of the icon
		iconAnchor: [23, 55] // point of the icon which will correspond to marker's location
	});
	map.setView([lat, lng], 17);

	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: false
	}).addTo(map);
	//'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

	L.marker([lat, lng], { icon: markerIcon }).addTo(map);
};

function getAddress(ipaddress = "") {
	const api_key = "at_6IUgH8H1u4swuvgQBtACJyvwQ968Z";
	const api_url = "https://geo.ipify.org/api/v1?";
	const url = api_url + "apiKey=" + api_key + "&ipAddress=" + ipaddress;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			lat = data.location.lat;
			lng = data.location.lng;
			displayInfo(data);
			displayMap();
		});
}

getAddress();

const displayInfo = data => {
	address.innerText = data.ip;
	userlocation.innerText = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
	timezone.innerText = `UTC ${data.location.timezone}`;
	isp.innerText = data.isp;
};

input.addEventListener("submit", event => {
	event.preventDefault();
	getAddress(event.target[0].value);
	event.target[0].value = "";
});
