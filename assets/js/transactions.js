const listaTransacciones = [
    { tipo: "deposito", descripcion: "Depósito por Cajero", monto: 1500 },
    { tipo: "compra", descripcion: "Pago Supermercado", monto: -800 },
    { tipo: "transferencia", descripcion: "Transferencia Recibida", monto: 3000 },
    { tipo: "compra", descripcion: "Suscripción Netflix", monto: -300 }
];

function mostrarMovimientos(filtro){
    $("#lista-mov").empty();
    listaTransacciones.forEach(function(transaccion){
        if(filtro === "todos" || transaccion.tipo === filtro){
            let htmlItem = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    ${transaccion.descripcion}
                </div>
                <span class="badge bg-secondary rounded-pill">
                $${transaccion.monto}
                </span>
            </li>
            `;
        $("#lista-mov").append(htmlItem);
        }
    })
}

mostrarMovimientos("todos");

$("#filtro-tipo").change(function(){
    let filtroSeleccionado = $(this).val();
    mostrarMovimientos(filtroSeleccionado);
})