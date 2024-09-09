import { getDrugStore, getDrugstoreNearby } from './DrugStoreService.mjs';
import { getClosestPoints } from './Order.mjs'

navigator.geolocation.getCurrentPosition(
    (position) => {
        getDrugStore()
            .then(data => {
                return data.sort((farmacia1, farmacia2) => getClosestPoints(farmacia1, farmacia2, position.coords));
            })
            .then(farmaciaOrdenada => getDrugstoreNearby(farmaciaOrdenada))
    },
    () => {
        alert('No pudimos acceder a tu ubicación')
    }
)





