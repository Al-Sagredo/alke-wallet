
$("#login-form").submit(function(e) {
    e.preventDefault();
    const userValue = $("#email").val();
    const passwordValue = $("#contrasena").val();
    if (userValue == 'user@wallet.com' && passwordValue == '1234'){
        localStorage.setItem('saldo', '6900');
        $("#alert-container").html(`
            <div class="alert alert-success" role="alert">
                ¡Bienvenido! Redirigiendo...
            </div>
            `)
        setTimeout(function(){
            window.location.href = "menu.html";
        }, 1500);
    }else{
        $("#alert-container").html(`
            <div class="alert alert-danger" role="alert">
                Credenciales incorrectas. Inténtalo de nuevo.
            </div>
            `)
    }
})
