let dataGlobal;
let dataGlobal2;

jq(document).ready(function () {

    listarPokemones();

});

jq("#buscarPorId").click(function () {
    let idInput = jq("#idInput").val();
    jq.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/" + idInput,
        dataType: "json",
        success: function (dataPokemon) {
            dataGlobal = dataPokemon; grafico2();
            agregarImagen();
            let color1 = document.getElementById("Carta")
            let pokemon1 = dataGlobal.types[0].type.name;
            cambiarColorPorTipo(color1, pokemon1);
            tablaTipo();


        }
    });

});
jq("#buscarPorId2").click(function () {
    let idInput2 = jq("#NombrePokemonList").val();

    jq.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/" + idInput2,
        dataType: "json",
        success: function (dataPokemon2) {
            dataGlobal2 = dataPokemon2;
            grafico2();
            tablaTipo();
            agregarImagen();
            let color2 = document.getElementById("Carta2")
            let pokemon2 = dataGlobal2.types[0].type.name;
            cambiarColorPorTipo(color2, pokemon2)


        }
    });

});

function listarPokemones() {

    const urlPokemonTodos = "https://pokeapi.co/api/v2/pokemon?limit=30";//Se limito a 30 solo para el ejemplo

    jq.get(urlPokemonTodos, function (result) {
        let totalPokemones = result.count;
        for (i = 0; i < totalPokemones; i++) {
            jq("#NombrePokemonList").append("<option value=" + result.results[i].name + ">" + result.results[i].name + "</option>");
        }
    });

}

function grafico2() {

    let vida = dataGlobal.stats[0].base_stat;
    let ataque = dataGlobal.stats[1].base_stat;
    let defensa = dataGlobal.stats[2].base_stat;
    let ataqueEspecial = dataGlobal.stats[3].base_stat;
    let defensaEspecial = dataGlobal.stats[4].base_stat;
    let velocidad = dataGlobal.stats[5].base_stat;
    let nombrePokemon1 = dataGlobal.species.name;

    //pokemon 2
    let vida2 = dataGlobal2.stats[0].base_stat;
    let ataque2 = dataGlobal2.stats[1].base_stat;
    let defensa2 = dataGlobal2.stats[2].base_stat;
    let ataqueEspecial2 = dataGlobal2.stats[3].base_stat;
    let defensaEspecial2 = dataGlobal2.stats[4].base_stat;
    let velocidad2 = dataGlobal2.stats[5].base_stat;
    let nombrePokemon2 = dataGlobal2.species.name;


    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: false,
        animationEnabled: true,
        title: {
            text: "Comparacion"
        },

        axisX: {
            title: "Estadisticas"
        },
        axisY: {
            title: nombrePokemon1,
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: true,
            minimum: 0,
            maximum: 200
        },
        axisY2: {
            title: nombrePokemon2,
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E",
            includeZero: true,
            minimum: 0,
            maximum: 200
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",

        },
        data: [{
            type: "column",
            name: nombrePokemon1,
            showInLegend: true,
            yValueFormatString: "#,##0.#",

            dataPoints: [
                { label: "Vida", y: vida },
                { label: "Ataque", y: ataque },
                { label: "Defensa", y: defensa },
                { label: "AtaqueEspecial", y: ataqueEspecial },
                { label: "DefensaEspecial", y: defensaEspecial },
                { label: "Velocidad", y: velocidad }
            ]
        },
        {
            type: "column",
            name: nombrePokemon2,
            axisYType: "secondary",
            showInLegend: true,
            yValueFormatString: "#,##0.#",

            dataPoints: [
                { label: "Vida", y: vida2 },
                { label: "Ataque", y: ataque2 },
                { label: "Defensa", y: defensa2 },
                { label: "AtaqueEspecial", y: ataqueEspecial2 },
                { label: "DefensaEspecial", y: defensaEspecial2 },
                { label: "Velocidad", y: velocidad2 }
            ]
        }]
    });
    chart.render();



}

function cambiarColorPorTipo(x, y) {

    let colorfondo = y
    let cartaPokemon = x

    if (colorfondo === "grass") {
        jq(cartaPokemon).css('background-color', 'Lime');
    } else if (colorfondo === "fire") {
        jq(cartaPokemon).css('background-color', 'Crimson');
    } else if (colorfondo === "water") {
        jq(cartaPokemon).css('background-color', 'RoyalBlue');
    } else if (colorfondo === "bug") {
        jq(cartaPokemon).css('background-color', 'YellowGreen');
    } else if (colorfondo === "ghost") {
        jq(cartaPokemon).css('background-color', 'Purple');
    } else if (colorfondo === "steel") {
        jq(cartaPokemon).css('background-color', 'LightGrey');
    } else if (colorfondo === "electric") {
        jq(cartaPokemon).css('background-color', 'Yellow');
    } else if (colorfondo === "psychic") {
        jq(cartaPokemon).css('background-color', 'Violet');
    } else if (colorfondo === "ice") {
        jq(cartaPokemon).css('background-color', 'AquaMarine');

    } else if (colorfondo === "normal") {
        jq(cartaPokemon).css('background-color', 'Lavender');

    } else if (colorfondo === "fighting") {
        jq(cartaPokemon).css('background-color', 'Firebrick');

    } else if (colorfondo === "dragon") {
        jq(cartaPokemon).css('background-color', 'MediumSlateBlue');

    } else if (colorfondo === "ground") {
        jq(cartaPokemon).css('background-color', 'BurlyWood');

    } else if (colorfondo === "dark") {
        jq(cartaPokemon).css('background-color', 'SlateGray');
    }

    else {
        jq(cartaPokemon).css('background-color', 'yellow');
    }
}

function tablaTipo() {
    let pokemon = dataGlobal.types[0].type.name;
    let pokemon2 = dataGlobal2.types[0].type.name;



    if (pokemon === "water" && pokemon2 === "fire" || pokemon === "water" && pokemon2 === "ground" || pokemon === "water" && pokemon2 === "rock") {

        jq("#vs").text("El pokemon tipo: " + pokemon + " es super eficaz contra el  pokemon tipo: " + pokemon2);

    } else if (pokemon === "water" && pokemon2 === "water" || pokemon === "water" && pokemon2 === "grass" || pokemon === "water" && pokemon2 === "dragon") {

        jq("#vs").text("El pokemon tipo: " + pokemon + " es poco eficaz contra el  pokemon tipo: " + pokemon2);

    } else if (pokemon === "fire" && pokemon2 === "grass" || pokemon === "fire" && pokemon2 === "bug" || pokemon === "fire" && pokemon2 === "steel" || pokemon === "fire" && pokemon2 === "ice") {

        jq("#vs").text("El pokemon tipo: " + pokemon + " es super eficaz contra el  pokemon tipo: " + pokemon2);

    } else if (pokemon === "fire" && pokemon2 === "fire" || pokemon === "fire" && pokemon2 === "water" || pokemon === "fire" && pokemon2 === "rock" || pokemon === "fire" && pokemon2 === "dragon") {

        jq("#vs").text("El pokemon tipo: " + pokemon + " es poco eficaz contra el  pokemon tipo: " + pokemon2);

    } else if (pokemon === "grass" && pokemon2 === "water" || pokemon === "grass" && pokemon2 === "ground" || pokemon === "grass" && pokemon2 === "rock") {

        jq("#vs").text("El pokemon tipo: " + pokemon + " es super eficaz contra el  pokemon tipo: " + pokemon2);

    } else if (pokemon === "grass" && pokemon2 === "grass" || pokemon === "grass" && pokemon2 === "fire" || pokemon === "grass" && pokemon2 === "flying" || pokemon === "grass" && pokemon2 === "poison" || pokemon === "grass" && pokemon2 === "bug" || pokemon === "grass" && pokemon2 === "dragon" || pokemon === "grass" && pokemon2 === "steel") {

        jq("#vs").text("El pokemon tipo: " + pokemon + " es poco eficaz contra el  pokemon tipo: " + pokemon2);

    } else {
        jq("#vs").text("El pokemon tipo: " + pokemon + " es desconocido ,pronto estara la comparativa contra el tipo: " + pokemon2);
    }






}



function agregarImagen() {

    let url = dataGlobal.sprites.back_default;
    let url2 = dataGlobal2.sprites.back_default;
    let expresion = /([[0-9])\w*/gi
    let pokemonNumero;
    let pokemonNumero2;
    pokemonNumero = url.match(expresion)            //obtengo el numero del sprite y lo guardo en un variable y con la funcion match me regresa el numero
    pokemonNumero2 = url2.match(expresion)

    let urlImagen = "https://www.serebii.net/art/th/" + pokemonNumero + ".png";
    jq("#imagenPokemon").attr("src", urlImagen);
    let urlImagen2 = "https://www.serebii.net/art/th/" + pokemonNumero2 + ".png";
    jq("#imagenPokemon2").attr("src", urlImagen2);

}
