var laberinto = document.getElementById('laberinto');
var arriba = document.getElementById('arriba');
var arriba = document.getElementById('abajo');
var arriba = document.getElementById('izquierda');
var arriba = document.getElementById('derecha');
var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

function creaLaberinto ()
{
    var tabla = document.createElement('table');
    tabla.border = "1";
    for (var i in mapa)
    {
          var columna = document.createElement('tr');
          var espacio = mapa[i].split("");
          for (var j in espacio)
          {
                var fila = document.createElement('td');
                var contenido = document.createTextNode(espacio[j]);
                if(espacio[j] == "*"){
                    fila.setAttribute('class','cajaNegra');
                } else if (espacio[j] == "_") {
                    columna.setAttribute('class', 'cajaBlanca');
                } else if (espacio[j] == "o") {
                    fila.setAttribute('class', 'rojo');
                } else if (espacio[j] == "W") {
                    fila.setAttribute('class','azul')
                }
                fila.appendChild(contenido);
                columna.appendChild(fila);
          }
          tabla.appendChild(columna);
    }
    laberinto.appendChild(tabla);
}
creaLaberinto();
