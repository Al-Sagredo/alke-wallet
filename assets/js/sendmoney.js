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

$("#form-nuevo-contacto").submit(function (e) {
    e.preventDefault();
    const nombre = $("#nombre").val();
    const apellido = $("#apellido").val();
    const cbu = $("#cbu").val();
    const banco = $("#banco").val();
    if (nombre == "" || apellido == "" || cbu == "" || banco == "") {
        alert("Completa todos los campos");
    } else if (cbu.length != 6) {
        alert("El CBU debe tener 6 dígitos");

    } else {
        alert("Contacto guardado");
        $("#form-nuevo-contacto").hide();
        $("#btn-nuevo-contacto").show();
        $("#nombre").val("");
        $("#apellido").val("");
        $("#cbu").val("");
        $("#banco").val("");
    }
})

$("#form-busqueda").submit(function(e){ 
    e.preventDefault();
    let termino = $("#buscar").val().toLowerCase();
    $("#contenedor-contactos").show();
    $(".contacto-item").each(function(){
        let textoContacto = $(this).text().toLowerCase();
        if (textoContacto.includes(termino)) {
            $(this).show();
        }else{$(this).hide();}
    })
})

$(".contacto-item").click(function(e){
    e.preventDefault();
    $(".contacto-item").removeClass("active");
    $(this).addClass("active");
    $("#form-enviar-dinero").show();
})

$("#form-enviar-dinero").submit(function(e){
    e.preventDefault();
    const saldo = parseInt(localStorage.getItem('saldo'));
    const montoEnviar = parseInt($("#monto-enviar").val());
    if (montoEnviar > saldo) {
        alert("Saldo insuficiente")
    } else {
        const nuevoSaldo = saldo - montoEnviar;
        localStorage.setItem('saldo', nuevoSaldo);
        $("#alert-container-envio").html(`
            <div class="alert alert-success" role="alert">
                Transferencia completada    
            </div>
            `)
        setTimeout(function(){
            window.location.href = "menu.html"
        }, 2000);   
    }
})

