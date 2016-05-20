$(document).ready(function () {
    'use strict';

    function obtenerDiscoDesdeFormulario($formulario) {
        var disco = {};

        $.each($formulario.serializeArray(), function (indice, elemento) {
            disco[elemento.name] = elemento.value;
        });

        return disco;
    }

    function guardarDisco(evento) {
        evento.preventDefault();

        var fb = new Firebase('https://tabas-ef8ec.firebaseio.com/'),
            disco = obtenerDiscoDesdeFormulario($(this));

        fb.push(disco);
    }

    $('form#guardar-disco').submit(guardarDisco);
    window.alert("seregistro musico");
});
