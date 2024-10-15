/* import { POIs } from "./POIs";
 */
const POIs = [
    { name: "Schloss Johannisburg", lat: 49.976424, lon: 9.14154 },
    { name: "Pompejanum", lat: 49.97755, lon: 9.13641 },
    { name: "Stiftsbasilika St. Peter und Alexander", lat: 49.97369, lon: 9.14630 },
    { name: "Park Schönbusch", lat: 49.95682, lon: 9.10422 },
    { name: "Kunsthalle Jesuitenkirche", lat: 49.97540, lon: 9.14390 },
    { name: "Stadttheater Aschaffenburg", lat: 49.97424, lon: 9.14426 },
    { name: "Schönborner Hof", lat: 49.97409, lon: 9.14798 },
    { name: "Gentilhaus", lat: 49.97544, lon: 9.15975 },
    { name: "Nilkheimer Park", lat: 49.95276, lon: 9.11511 }
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
