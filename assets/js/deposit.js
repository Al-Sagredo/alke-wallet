

saldo = localStorage.getItem("saldo"); //captura el saldo guardado en memoria
$("#saldo-actual").text("Saldo actual: $" + saldo);

$("#form-depositar").submit(function (e) {
    e.preventDefault();

    const montoDepositar = parseInt($("#monto").val());
    const saldoActual = parseInt(localStorage.getItem("saldo"));

    //validación
    if (isNaN(montoDepositar) || montoDepositar <= 0) {
        $("#alert-container").html(`
            <div class="alert alert-danger" role="alert">
                Por favor, ingresa un monto válido y mayor a $0.
            </div>
        `);
        return; // Detiene la ejecución aquí si el dato no es válido
    }

    //procesamiento
    const nuevoSaldo = montoDepositar + saldoActual;
    localStorage.setItem('saldo', nuevoSaldo);
    $("#alert-container").html(`
        <div class="alert alert-success" role="alert">
                Deposito realizado con éxito
            </div>
        `)

    $("#monto-depositado").text("Acabas de depositar $" + montoDepositar)

    setTimeout(function(){
        window.location.href = "menu.html";
    }, 2000);
})



