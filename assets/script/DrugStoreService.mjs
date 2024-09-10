import { listDrugstores } from './DrugStoreList.mjs';

const loaderContainer = document.querySelector('.spinner');
const farmaciasContainer = document.querySelector('#farmacias');
farmaciasContainer.style.display = 'none';

const getDrugStore = async () => {
    displayLoading();
    const response = await fetch('https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php');
    let data = await response.json();
    hideLoading();

    return data;

}

const getDrugstoreNearby = (farmaciasCercanas, coords) => {
    const {latitude, longitude} = coords;
   
    let map = L.map('map').setView([latitude, longitude], 12);

    console.log(farmaciasCercanas[0])

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 45,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    for (let i = 4; i >= 0; i--) {
        const { local_lat, local_lng, local_nombre ,local_direccion,local_telefono} = farmaciasCercanas[i]
        L.marker([local_lat, local_lng]).addTo(map)
        .bindPopup(`Farmacia: ${local_nombre}<br> 
                    Dirección: ${local_direccion}<br>
                    Teléfono: ${local_telefono}<br>
        `).openPopup();
    }

    listDrugstores(farmaciasCercanas)

}

const displayLoading = () => {
    loaderContainer.style.display = 'block';

};

const hideLoading = () => {
    loaderContainer.style.display = 'none';
    farmaciasContainer.style.display = 'block';
};

export {
    getDrugStore,
    getDrugstoreNearby
}