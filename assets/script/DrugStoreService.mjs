
const getDrugStore = async() => {
    const response = await fetch('https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php');
    let data = await response.json();

    return data;

}

export {
    getDrugStore, 
}