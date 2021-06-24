$(document).ready(function () {

    var socket = io.connect('/');
    socket.on('change', function (msg) {
        $('#dashData').html(msg);
        var data = {
            GridClass: "table table-striped",
            Header: [{
                Name: "<i class='fas fa-tools'></i>Part Number",
                Field: "partNumber",
                style: "",
                class: "",
                attributes: [{
                    name: "scope",
                    value: "col"
                }]
            },
            {
                Name: "<i class='far fa-clock'></i>Entrada",
                Field: "startTime",
                style: "",
                class: "",
                attributes: [{
                    name: "scope",
                    value: "col"
                }]
            },
            {
                Name: "<i class='far fa-compass'></i>Local Atual",
                Field: "ActualPosition",
                style: "",
                class: "",
                attributes: [{
                    name: "scope",
                    value: "col"
                }]
            },
            {
                Name: "<i class='fas fa-truck-loading'></i>Plataforma descida",
                Field: "Platform",
                style: "",
                class: "",
                attributes: [{
                    name: "scope",
                    value: "col"
                }]
            },
            {
                Name: "<i class='far fa-clock'></i>Descida",
                Field: "endTime",
                style: "",
                class: "",
                attributes: [{
                    name: "scope",
                    value: "col"
                }]
            },
            {
                Name: "<i class='fas fa-stopwatch'></i>Atrasado / No Tempo",
                Field: "status",
                style: "",
                class: "",
                attributes: [{
                    name: "scope",
                    value: "col"
                }]
            },
            {
                Name: "<i class='fas fa-box-open'></i>Embal.",
                Field: "packing",
                style: "",
                class: "",
                attributes: [{
                    name: "scope",
                    value: "col"
                }]
            },
            {
                Name: "<i class='fas fa-truck'></i>Destino",
                Field: "destination",
                style: "",
                class: "",
                attributes: [{
                    name: "scope",
                    value: "col"
                }]
            }
        ]
        };
        grid("testetb", data, msg);
    });
    socket.on('change1', function (msg) {
        $('#dashboard').append(msg);
    });
    socket.on('quadro', function (msg) {
        $('#quadro').replaceWith("<spam id='quadro'>chegou</spam>");
    });

    $("#but1").click(function (event) {
        var x = "teste"
        event.preventDefault();
        socket.emit("data", { data: x });
    })
    $("#but2").click(function (event) {
        var x = "teste"
        event.preventDefault();
        socket.emit("data1", { data: x });
    })
    $("#but3").click(function (event) {
        var x = "teste"
        event.preventDefault();
        socket.emit("data2", { data: x });
    })
    var x = "teste";
    socket.emit("data", { data: x });
});