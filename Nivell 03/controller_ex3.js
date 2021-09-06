// FASE 01
var map2 = L.map('mapFase01').setView([41.387, 2.17], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

let popup2 = L.popup();
let marker = null;

function onMapClick2(e) {

	if (marker !== null) {
		map2.removeLayer(marker);
	}

	marker = L.marker([e.latlng.lat, e.latlng.lng], {icon: anchorIcon})
		.addTo(map2)
		.bindPopup("Les coordenades són <br> <b> Lat: " + e.latlng.lat.toString() + " Lng: " + e.latlng.lng.toString() + "</b>")
		.openPopup();

	map2
		.flyTo(e.latlng, 18);
}

map2.on('click', onMapClick2);

// ICONA
var anchorIcon = L.icon({
    iconUrl: 'anchor.png',
    shadowUrl: 'anchor_shadow.png',

    iconSize:     [42.2, 64], // size of the icon
    shadowSize:   [34.8, 44.4], // size of the shadow
    iconAnchor:   [21.1, 64], // point of the icon which will correspond to marker's location
    shadowAnchor: [10, 44.4],  // the same for the shadow
    popupAnchor:  [0, -65] // point from which the popup should open relative to the iconAnchor 
});

// L.marker([41.387, 2.17], {icon: anchorIcon}).addTo(map2);

