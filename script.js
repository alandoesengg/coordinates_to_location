// Default coordinates (India center-ish)
let latitude = 20.5937;
let longitude = 78.9629;

// Initialize map
const map = L.map("map").setView([latitude, longitude], 5);

// Load map tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Add marker
let marker = L.marker([latitude, longitude]).addTo(map);

const latInput = document.getElementById("lat");
const lngInput = document.getElementById("lng");

function updateMap() {
  const lat = parseFloat(latInput.value);
  const lng = parseFloat(lngInput.value);

  // Validation
  if (isNaN(lat) || isNaN(lng)) return;
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    alert("Invalid coordinates");
    return;
  }

  map.setView([lat, lng], 12);
  marker.setLatLng([lat, lng]);
}

// Update map when inputs change
latInput.addEventListener("input", updateMap);
lngInput.addEventListener("input", updateMap);
