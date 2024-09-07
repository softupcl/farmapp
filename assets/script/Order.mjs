const ordenLatitud = (farmacia1, farmacia2) =>{

    return farmacia1.local_lat - farmacia2.local_lat

}

const ordenDesdeSantiago = (farmacia1 , farmacia2) =>{
    const latitudSantiago = -33.4374154;

    const distanciaFarmacia1 = Math.abs(latitudSantiago - farmacia1.local_lat);
    const distanciaFarmacia2 = Math.abs(latitudSantiago - farmacia2.local_lat);

    return distanciaFarmacia1 - distanciaFarmacia2;

}


function haversineDistance(pointA, coords) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = degreesToRadians(coords.latitude - pointA.local_lat);
    const dLon = degreesToRadians(coords.longitude - pointA.local_lng);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(degreesToRadians(pointA.local_lat)) * Math.cos(degreesToRadians(coords.latitude)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  
  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  function getClosestPoints(farmA, farmB, coords) {
    return haversineDistance(farmA, coords) - haversineDistance(farmB, coords)
  }


export {
    ordenLatitud,
    ordenDesdeSantiago,
    getClosestPoints,
}

