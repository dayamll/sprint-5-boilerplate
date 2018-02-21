var api = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};
var $topicList = $('#topic-list');
var cargarPagina = function() {
  cargarTemas();
  $('#add-form').submit(agregarTema);
  $('#search-form').submit(filtrarTemas);
};
var cargarTemas = function() {
  $.getJSON(api.url, function(temas) {
    $topicList.html('');
    temas.forEach(crearTema);
  });
};
var remplazar = function(nombreAutor, contenido, numRespuestas) {
  var presentar = plantillaBd.replace('__nombreAutor__', nombreAutor).replace('__contenido__', contenido).replace('__numRespuestas__', numRespuestas);
  $topicList.append(presentar);
};
var crearTema = function(tema) {
  var nombreAutor = tema.author_name;
  var contenido = tema.content;
  var numRespuestas = tema.responses_count;
  var identificador = tema.id;
  remplazar(nombreAutor, contenido, numRespuestas);
};
var plantillaBd = '<tr>' +
  '<td>__nombreAutor__</td>' +
  '<td>__contenido__</td>' +
  '<td>__numRespuestas__</td>' +
  '</tr>';
$(document).ready(cargarPagina);