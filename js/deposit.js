

saldo = localStorage.getItem("saldo"); //captura el saldo guardado en memoria
$("#saldo-actual").text("Saldo disponible: $" + saldo);

$("#form-depositar").submit(function (e) {
    e.preventDefault();
    const montoDepositar = parseInt($("#monto").val());
    const saldoActual = parseInt(localStorage.getItem("saldo"));
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



