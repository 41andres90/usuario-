
const seleccion = document.getElementById("boton");

seleccion.addEventListener('click', logueo);

function logueo() {

    let usuario = document.forms["login"].elements[0].value;
    let password = document.forms["login"].elements[1].value;

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'usuarios.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            var listausuarios = JSON.parse(xhttp.responseText);
            var usuarioEncontrado =false;

            for (let usuarioIterado of listausuarios.usuarios) {

                if (usuarioIterado.user == usuario && usuarioIterado.pass == password) {
                    window.location = "pagina.html"
                    usuarioEncontrado = true;
                }
            }
                if (usuarioEncontrado == false) {
    
                alert("Error usuario o contraseña incorrectos");
            } 


        }
    }
}

$('.toggle').click(function () {
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle    '
    })
});

