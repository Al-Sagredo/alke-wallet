//Mostrar saldo 
saldo = localStorage.getItem("saldo"); //captura el saldo guardado en memoria
$("#saldo-actual").text("Saldo disponible: $" + saldo);


//Mostrar/Ocultar Formulario de Nuevo Contacto
$("#btn-nuevo-contacto").click(function (e) {
    e.preventDefault();
    $("#form-nuevo-contacto").show();
    $("#btn-nuevo-contacto").hide();
})

$("#btn-cancelar").click(function (e) {
    e.preventDefault();
    $("#form-nuevo-contacto").hide();
    $("#btn-nuevo-contacto").show();
    $("#nombre").val("");
    $("#apellido").val("");
    $("#cbu").val("");
    $("#banco").val("");
})

//Guardar Nuevo Contacto
$("#form-nuevo-contacto").submit(function (e) {
    e.preventDefault();
    const nombre = $("#nombre").val().trim();
    const apellido = $("#apellido").val().trim();
    const cbu = $("#cbu").val().trim();
    const banco = $("#banco").val().trim();

    if (nombre == "" || apellido == "" || cbu == "" || banco == "") {
        alert("Completa todos los campos");
        return;
    }
    if (cbu.length != 6) {
        alert("El numero de cuenta debe tener 6 dígitos");
        return

    }
    $("#lista-contactos").append(`
        <button type="button" class="list-group-item list-group-item-action contacto-item">
            <strong>${nombre} ${apellido}</strong> - Cuenta: ${cbu} - Banco: ${banco}
        </button>
        `);
    alert("Contacto guardado");
    $("#form-nuevo-contacto").hide();
    $("#btn-nuevo-contacto").show();
    $("#nombre").val("");
    $("#apellido").val("");
    $("#cbu").val("");
    $("#banco").val("");

})

//Buscador de Contactos
$("#form-busqueda").submit(function (e) {
    e.preventDefault();
    let termino = $("#buscar").val().trim().toLowerCase();

    if (termino === "") {
        alert("Ingresa un nombre o término para buscar.");
        return;
    }

    $("#contenedor-contactos").show();
    $(".contacto-item").each(function () {
        let textoContacto = $(this).text().toLowerCase();
        if (textoContacto.includes(termino)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
})

//Seleccionar Contacto
$(document).on("click", ".contacto-item", function (e) {
    e.preventDefault();
    $(".contacto-item").removeClass("active");
    $(this).addClass("active");
    $("#contenedor-enviar").show();
})

//Enviar Dinero
$("#form-enviar-dinero").submit(function (e) {
    e.preventDefault();
    const saldo = parseInt(localStorage.getItem('saldo')) || 0;
    const montoEnviar = parseInt($("#monto-enviar").val());

    if (isNaN(montoEnviar) || montoEnviar <= 0) {
        alert("Ingresa un monto válido mayor a $0.");
        return;
    }

    if (montoEnviar > saldo) {
        alert("Saldo insuficiente")
        return;
    }
    const nuevoSaldo = saldo - montoEnviar;
    localStorage.setItem('saldo', nuevoSaldo);

    $("#alert-container-envio").html(`
            <div class="alert alert-success" role="alert">
                Transferencia completada    
            </div>
            `);

    setTimeout(function () {
        window.location.href = "menu.html"
    }, 2000);

})

