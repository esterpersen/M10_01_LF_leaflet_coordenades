// FASE 01
var map1 = L.map('mapFase01').setView([41.387, 2.17], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);


// FASE 02
var map2 = L.map('mapFase02').setView([41.387, 2.17], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

L.marker([41.3868561, 2.1661102]).addTo(map2)


// FASE 03
var map3 = L.map('mapFase03').setView([41.387, 2.17], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);

L.marker([41.3868561, 2.1661102]).addTo(map3)
	.bindPopup('<b>Restaurant Centfocs</b><br> Restaurant Mediterrani<br>Carrer de Balmes, 16, 08007, Barcelona');