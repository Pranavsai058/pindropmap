const map = L.map('map').setView([20.5937, 78.9629], 5); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

map.on('click', async (e) => {
  const { lat, lng } = e.latlng;
  const remark = prompt("Enter a remark for this pin:");
  if (!remark) return;

  const address = await getAddress(lat, lng);

  const marker = L.marker([lat, lng]).addTo(map)
    .bindPopup(`<b>${remark}</b><br>${address}`).openPopup();

  const pinData = { lat, lng, remark, address };
  storePin(pinData);
  insertPinToSidebar(pinData, marker);
});

async function getAddress(lat, lng) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
    const json = await res.json();
    return json.display_name || "Address not found";
  } catch (err) {
    console.warn("Failed to fetch address:", err);
    return "Address not found";
  }
}

function storePin(pin) {
  const existing = JSON.parse(localStorage.getItem('pins') || '[]');
  existing.push(pin);
  localStorage.setItem('pins', JSON.stringify(existing));
}

function insertPinToSidebar(pin, markerRef = null) {
  const listItem = document.createElement('li');
  listItem.textContent = `${pin.remark}\n${pin.address}`;
  listItem.onclick = () => {
    map.setView([pin.lat, pin.lng], 10);
    if (markerRef) markerRef.openPopup();
  };
  document.getElementById('pin-list').appendChild(listItem);
}

window.onload = () => {
  const saved = JSON.parse(localStorage.getItem('pins') || '[]');
  saved.forEach(p => {
    const m = L.marker([p.lat, p.lng]).addTo(map)
      .bindPopup(`<b>${p.remark}</b><br>${p.address}`);
    insertPinToSidebar(p, m);
  });
};
