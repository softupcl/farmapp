
const getDrugStore = async () => {
    const response = await fetch('https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php');
    let data = await response.json();

    return data;

}

const getDrugstoreNearby = (farmaciasCercanas) => {
    const farmaciaCercana = farmaciasCercanas[0];
    let map = L.map('map').setView([farmaciaCercana.local_lat, farmaciaCercana.local_lng], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 45,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    for (let i = 0; i < 5; i++) {
        const { local_lat, local_lng, local_nombre ,local_direccion,local_telefono} = farmaciasCercanas[i]
        L.marker([local_lat, local_lng]).addTo(map)
        .bindPopup(`Farmacia: ${local_nombre}<br> 
                    Dirección: ${local_direccion}<br>
                    Teléfono: ${local_telefono}<br>
        `).openPopup();
    }

}

export {
    getDrugStore,
    getDrugstoreNearby
}