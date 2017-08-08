var laberinto = document.getElementById('laberinto');
var arriba = document.getElementById('arriba');
var abajo = document.getElementById('abajo');
var izquierda = document.getElementById('izquierda');
var derecha = document.getElementById('derecha');
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
var x;
var y;
var ruta = [];
for (var i = 0 ; i < mapa.length ; i++){
  ruta[i] = [];
  for (var j = 0 ; j < mapa[0].length ; j++) {
    ruta[i][j] = mapa[i][j];
  }
}
function creaLaberinto (ruta)
{
    limpiar();
    var tabla = document.createElement('table');
    tabla.border = "1";
    for (var i in ruta)
    {
          var columna = document.createElement('tr');
          for (var j = 0 ; j <ruta[i].length ; j++)
          {
                var fila = document.createElement('td');
                if(ruta[i][j] == "*"){
                    fila.style.backgroundColor="black";
                } else if (ruta[i][j] == "o") {
                    x = j;
                    y = i;
                    fila.style.backgroundColor="green";
                    //fila.setAttribute('id',i+''+j);
                } else if (ruta[i][j] == "W") {
                    fila.style.backgroundColor="blue";
                }
                columna.appendChild(fila);
          }
          tabla.appendChild(columna);
    }
    laberinto.appendChild(tabla);
}
creaLaberinto(ruta);

arriba.onclick=function() {
  if(ruta[y-1][x]!='*'){
    ruta[y][x]='_';
    y-=1;
    ruta[y][x]='o';
    creaLaberinto(ruta);
  }
}


abajo.onclick=function() {
  if(ruta[y+1][x]!='*'){
    ruta[y][x]='_';
    y+=1;
    ruta[y][x]='o';
    creaLaberinto(ruta);
  }
}

derecha.onclick=function() {
  if(ruta[y][x+1]!='*'){
    ruta[y][x]='_';
    x+=1;
    ruta[y][x]='o';
    creaLaberinto(ruta);
  }
}

izquierda.onclick=function() {
  if(ruta[y][x-1]!='*'){
    ruta[y][x]='_';
    y-=1;
    ruta[y][x]='o';
    creaLaberinto(ruta);
  }
}
function limpiar()
{
   laberinto.innerHTML = '';
}
