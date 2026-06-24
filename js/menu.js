saldo = localStorage.getItem("saldo"); //captura el saldo guardado en memoria (seteado en login.html)

$("#saldo-display").text("$" + saldo);

$("#btn-deposit").click(function () {
    alert("Redirigiendo a depositar");
    window.location.href = "deposit.html";

})
$("#btn-sendmoney").click(function () {
    alert("Redirigiendo a enviar dinero")
    window.location.href = "sendmoney.html"

})
$("#btn-transactions").click(function () {
    alert("Redirigiendo a enviar ultimos movimientos")
    window.location.href = "transactions.html"

})

