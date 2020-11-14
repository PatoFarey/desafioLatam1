$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $("#enviarCorreo").on("click", function (event) {
        event.preventDefault(); // Prevenir el evento por defecto
        alert("El correo fue enviado correctamente...");
    }); 

    $("#tituloIngredientes").on("dblclick", function () {
        $("#tituloIngredientes").css("color", "red");    
        $("#tituloPreparacion").css("color", "#212529");
    }); 


    $("#tituloPreparacion").on("dblclick", function () {
        $("#tituloPreparacion").css("color", "red");
        $("#tituloIngredientes").css("color", "#212529");
    }); 

    $("#receta1").on("click", function () {
        $("#receta1Contenido").toggle();
    }); 


    $("#receta2").on("click", function () {
        $("#receta2Contenido").toggle();
    }); 

    $("#receta3").on("click", function () {
        $("#receta3Contenido").toggle();
    }); 
       

});

