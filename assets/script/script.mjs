import { getDrugStore } from './DrugStoreService.mjs';
import { ordenLatitud, ordenDesdeSantiago, getClosestPoints } from './Order.mjs'

navigator.geolocation.getCurrentPosition(
    (position) => {
        getDrugStore()
            .then(data => {
                return data.sort((farmacia1, farmacia2) => getClosestPoints(farmacia1, farmacia2, position.coords));
            })
            .then(farmaciaOrdenada => {
                const farmaciaCercana = farmaciaOrdenada[0];
                console.log({farmaciaCercana})
                let map = L.map('map').setView([farmaciaCercana.local_lat, farmaciaCercana.local_lng], 15);

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 45,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);

                let marker = L.marker([farmaciaCercana.local_lat, farmaciaCercana.local_lng]).addTo(map);
                 marker.bindPopup(`Farmacia: ${farmaciaCercana.local_nombre} <br> Dirección: ${farmaciaCercana.local_direccion}  `).openPopup();

            }
            )
    },
    () => {
        alert('No pudimos acceder a tu ubicación')
    }
)





