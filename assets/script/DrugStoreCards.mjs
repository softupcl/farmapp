const cardsDrugstores = (farmacias) => {
  const divFarmacias = document.querySelector('#app')

  const farmaciasCercanas = farmacias.slice(0, 5)

  const listafarmacias = farmaciasCercanas.map((farmacia) =>
  `<div class="p-2">
      <div class="card" style="width: 18rem;">
        <div class="card-header">${farmacia.local_nombre}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${farmacia.local_telefono}</li>
          <li class="list-group-item">${farmacia.local_direccion}</li>
          <li class="list-group-item">${farmacia.comuna_nombre}</li>
          <li class="list-group-item">${farmacia.funcionamiento_hora_apertura} - ${farmacia.funcionamiento_hora_cierre}</li>
        </ul>
      </div>
    </div>`
);
  divFarmacias.innerHTML = listafarmacias;
}

export {
  cardsDrugstores
}


