$(document).ready(function(){
  var html = "<div class='resultado'>";
  var a = 0;
  var combinacion = [];
  var jugador = [];
  var blancos = 0, negros = 0;
  var puntuacion = "";
  Array.prototype.unique = function() {
    return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
    });
  }
  function comprobarNegros(){
    for (var i = 0; i < jugador.length; i++) {
      if (jugador[i] == combinacion[i]) {
        negros++;
      }
    }
  }
  function comprobarBlancos(){
    var combinacionUnique = combinacion.unique();
    var jugadorUnique = jugador.unique();
    alert("Combinacion = "+combinacionUnique+" Jugador = "+jugadorUnique);
    for (var i = 0; i < combinacionUnique.length; i++) {
      if (jugadorUnique.indexOf(combinacionUnique[i]) != -1) {
        blancos++;
      }
    }
  }
  function sacarNegrosBlancos(){
    for (var i = 0; i < negros; i++) {
      puntuacion += "<div class='negro'></div>";
    }
    for (var i = 0; i < blancos; i++) {
      puntuacion += "<div class='blanco'></div>";
    }
  }
  function variablesReset(){
    a = 0;
    jugador = [];
    negros = 0;
    blancos = 0;
    puntuacion = "";
  }
  for (var i = 0; i < 4; i++) {
    var n = Math.floor((Math.random() * 4) + 1);
    combinacion.push(n);
  }
  alert("Combinación = "+combinacion);
  $(".opciones").children()
  .mouseup(function(){
      html += "<div class='"+$(this).attr('class')+"' name='"+$(this).attr('name')+"'/>";
      //alert(html);
      jugador.push($(this).attr('name'));
      a++;
      if(a == 4){
        comprobarNegros();
        comprobarBlancos();
        alert("Jugador = "+jugador+" Negros = "+negros + "Blancos = "+blancos);
        sacarNegrosBlancos();
        $("h1").after(html+"<div class='p'>"+puntuacion+"</div></div>");
        html = "<div class='resultado'>";
        variablesReset();
      }
  });
});
