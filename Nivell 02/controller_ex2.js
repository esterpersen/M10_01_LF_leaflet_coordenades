// FASE 01
var map1 = L.map('mapFase01').setView([41.387, 2.17], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

let popup1 = L.popup();

function onMapClick(e) {
	popup1
		.setLatLng(e.latlng)
		.openOn(map1);

	L.marker([e.latlng.lat, e.latlng.lng])
		.addTo(map1)
		.bindPopup("Les coordenades són <br> <b> Lat: " + e.latlng.lat.toString() + " Lng: " + e.latlng.lng.toString() + "</b>")
		.openPopup();

	map1.flyTo(e.latlng, 18);
}

map1.on('click', onMapClick);


// FASE 02
var map2 = L.map('mapFase02').setView([41.387, 2.17], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

let popup2 = L.popup();
let marker = null;

function onMapClick2(e) {

	if (marker !== null) {
		map2.removeLayer(marker);
	}

	marker = L.marker([e.latlng.lat, e.latlng.lng])
		.addTo(map2)
		.bindPopup("Les coordenades són <br> <b> Lat: " + e.latlng.lat.toString() + " Lng: " + e.latlng.lng.toString() + "</b>")
		.openPopup();

	map2
		.flyTo(e.latlng, 18);
}

map2.on('click', onMapClick2);

