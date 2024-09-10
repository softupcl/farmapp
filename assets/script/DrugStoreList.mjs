const listDrugstores = (farmacias) => {
    const tbody = document.querySelector('.table-group-divider')
    tbody.innerHTML = ''

    const farmaciasCercanas =  farmacias.slice(0,5)
  
    const listafarmacias = farmaciasCercanas.map((farmacia, index) => ` 
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${farmacia.local_nombre}</td>
        <td>${farmacia.local_direccion}</td>    
        <td>${farmacia.comuna_nombre}</td>
        <td>${farmacia.local_telefono}</td>
        <td>${farmacia.funcionamiento_hora_apertura} - ${farmacia.funcionamiento_hora_cierre} </td>
      </tr>`
    ).join('')
    tbody.innerHTML = listafarmacias
   
  }

  export {
    listDrugstores
  }

 