$(document).ready(function(){
  var html = "<div class='resultado'>";
  var a = 0;
  var combinacion = [];
  var jugador = [];
  var blancos = 0, negros = 0;
  var puntuacionNegros = "";
  var puntuacionBlancos = "";
  var hanSalido = [];
  var intentos = 3;

  // Array.prototype.unique = function() {
  //   return this.filter(function (value, index, self) {
  //   return self.indexOf(value) === index;
  //   });
  // }
  function comprobar(){
    // var combinacionUnique = combinacion.unique();
    // var jugadorUnique = jugador.unique();
    //alert("Combinacion = "+combinacionUnique+" Jugador = "+jugadorUnique);
    // for (var i = 0; i < jugadorUnique.length; i++) {
    //   if (combinacionUnique.indexOf(combinacionUnique[i]) != -1) {
    //     blancos++;
    //   }
    // }
    for (var i = 0; i < jugador.length; i++) {
      if (jugador[i] == combinacion[i]) {
        negros++;
      }
    }
    if(jugador[0] == combinacion[1] || jugador[0] == combinacion[2] || jugador[0] == combinacion[3])
  		blancos++;
  	if(jugador[1] == combinacion[0] || jugador[1] == combinacion[2] || jugador[1] == combinacion[3])
  		blancos++;
  	if(jugador[2] == combinacion[1] || jugador[2] == combinacion[0] || jugador[2] == combinacion[3])
  		blancos++;
  	if(jugador[3] == combinacion[1] || jugador[3] == combinacion[2] || jugador[3] == combinacion[0])
  		blancos++;
  }
  function sacarNegrosBlancos(){
    for (var i = 0; i < negros; i++) {
      puntuacionNegros += "<div class='negro'></div>";
    }
    for (var i = 0; i < blancos; i++) {
      puntuacionBlancos += "<div class='blanco'></div>";
    }
  }
  function variablesReset(){
    a = 0;
    jugador = [];
    negros = 0;
    blancos = 0;
    puntuacionNegros = "";
    puntuacionBlancos = "";
  }
  for (var i = 1; i <= 4; i++) {
          var azar;
          do {
            azar = Math.floor(Math.random() * 4 + 1);
          } while (hanSalido.indexOf(azar) > -1);
          hanSalido.push(azar);
          combinacion.push(azar);
        }
  alert("Combinación = "+combinacion);
  $(".opciones").children()
  .mouseup(function(){
    if (intentos == 0) {
      var combinacionHTML = "";
      for (var i = 0; i < combinacion.length; i++) {
        if (combinacion[i] == 1) combinacionHTML += "<div class='circuloAzul'></div>";
        else if (combinacion[i] == 2) combinacionHTML += "<div class='circuloRojo'></div>";
        else if (combinacion[i] == 3) combinacionHTML += "<div class='circuloVerde'></div>";
        else if (combinacion[i] == 4) combinacionHTML += "<div class='circuloAmarillo'></div>";
      }
      html = "<div>Has agotado los intentos, el código era "+combinacionHTML+"</div><input style='margin-top: 0.5em;margin-bottom: 0.5em;' type='button' onclick='location.reload()' value='Volver a jugar'/>";
      $("h1").html(html);
      $(".opciones").remove();
    } else{
      html += "<div class='"+$(this).attr('class')+"' name='"+$(this).attr('name')+"'/>";
      //alert(html);
      jugador.push($(this).attr('name'));
      a++;
      if(a == 4){
        comprobar();
        if (negros == 4) {
          html = "<div> Has acertado el código </div><input style='margin-top:2em' type='button' onclick='location.reload()' value='Volver a jugar'/>";
          $("h1").html(html);
          $(".opciones").remove();
        }
        else{
          alert("Combinacion: "+ combinacion + " Jugador = "+jugador+" Negros = "+negros + "Blancos = "+blancos);
          sacarNegrosBlancos();
          $("h1").after(html+"<div class='pB'>"+puntuacionBlancos+"</div><div class='pN'>"+puntuacionNegros+"</div>");
          html = "<div class='resultado'>";
          variablesReset();
        }
      intentos--;
      }
    }

  });
});
