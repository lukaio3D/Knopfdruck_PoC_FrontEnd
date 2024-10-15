/* import { POIs } from "./POIs";
 */
const POIs = [
    { name: "Schloss Johannisburg", lat: 49.975278, lon: 9.136389 },
    { name: "Pompejanum", lat: 49.975278, lon: 9.136389 },
    { name: "Stiftsbasilika St. Peter und Alexander", lat: 49.9739, lon: 9.1483 },
    { name: "Park Schönbusch", lat: 49.9642, lon: 9.1184 },
    { name: "Museumsdepot", lat: 49.9735, lon: 9.1480 },
    { name: "Kunsthalle Jesuitenkirche", lat: 49.9737, lon: 9.1481 },
    { name: "Stadttheater Aschaffenburg", lat: 49.9732, lon: 9.1485 },
    { name: "Schönborner Hof", lat: 49.9731, lon: 9.1482 },
    { name: "Gentilhaus", lat: 49.9730, lon: 9.1484 },
    { name: "Nilkheimer Park", lat: 49.9611, lon: 9.1325 }
];
// Create a map centered on Aschaffenburg
let map = L.map("map").setView([49.973, 9.154], 13);

// Add a tile layer - OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// EventHandler für Knopfdruck
function KnopfdruckMagic(map) {
  console.log("Mittelpunkt der Karte: " + map.getCenter());
  console.log(map.getBounds());

  //POIs auf Karte anzeigen
  ShowPOIsOnMap(map, POIs);
  return map.getBounds();
}
// ShowPOIsOnMap
function ShowPOIsOnMap(map, POIs) {
    POIs.forEach(POI => {
        L.marker([POI.lat, POI.lon], {title: POI.name}).addTo(map);
    });
}

//Bind Event to Button 
document.getElementById("magicButton").addEventListener("click", () => {
  KnopfdruckMagic(map);
});
