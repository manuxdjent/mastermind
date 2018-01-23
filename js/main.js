$(document).ready(function(){
  var html = "<div class='resultado'>";
  var a = 0;
  Array.prototype.unique = function() {
    return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
    });
  }
  var combinacion = [];
  var jugador = [];
  for (var i = 0; i < 4; i++) {
    var n = Math.floor((Math.random() * 4) + 1);
    combinacion.push(n);
  }
  $(".opciones").children()
  .mouseup(function(){
      html += "<div class='"+$(this).attr('class')+"' name='"+$(this).attr('name')+"'/>";
      //alert(html);
      jugador.push($(this).attr('name'));
      a++;
      if(a == 4){
        $("h1").after(html+"</div>");
        html = "<div class='resultado'>";
        a = 0;
      }
  })
});
