/*
TODO
1) si estoy en un slab y lo edito pues que se edite y no se cree otro
boton editar actual (sobreescribe)

2) boton clear que limpie campos

3) selectslab dropdown menu en vacio crashea, que mejor haga clear

4) descargar como CSV
*/

var verbs = [];
const conocimiento = ['', 'Bosquejo', 'Cito', 'Cuento', 'Copio', 'Defino', 'Dibujo', 'Ejemplifico', 'Encuentro', 'Enlisto', 'Enumero', 'Escojo', 'Expreso', 'Identifico', 'Ilustro', 'Indico', 'Integro', 'Menciono', 'Muestro', 'Nombro', 'Ordeno', 'Organizo', 'Recito', 'Reconozco', 'Recopilo', 'Recuerdo', 'Registro', 'Reproduzco', 'Selecciono'];
const comprension = ['', 'Actúo', 'Aprecio', 'Analizo', 'Argumento', 'Asocio', 'Asumo', 'Clasifico', 'Comparo', 'Comprendo', 'Contrasto', 'Debato', 'Describo', 'Determino', 'Diferencio', 'Discuto', 'Distingo', 'Esquematizo', 'Estimo', 'Evalúo', 'Expongo', 'Extiendo', 'Ilustro', 'Informo', 'Interpreto', 'Ordeno', 'Parafraseo', 'Predigo', 'Reafirmo', 'Relaciono', 'Resumo', 'Reviso', 'Serio', 'Sustento', 'Traduzco', 'Valoro'];
const uso = ['', 'Aplico', 'Calculo', 'Configuro', 'Construyo', 'Convierto', 'Creo', 'Decido', 'Desarrollo', 'Detecto', 'Dirijo', 'Diseño', 'Ejecuto', 'Ejerzo', 'Elaboro', 'Elijo', 'Empleo', 'Establezco', 'Examino', 'Gestiono', 'Implemento', 'Indago', 'Integro', 'Intervengo', 'Investigo', 'Manejo', 'Manipulo', 'Modelo', 'Opero', 'Practico', 'Produzco', 'Programo', 'Propongo', 'Realizo', 'Refuerzo', 'Resuelvo', 'Soluciono', 'Uso', 'Utilizo'];
const transferencia = ['', 'Adiestro', 'Apoyo', 'Ayudo', 'Capacito', 'Colaboro', 'Comparto', 'Comunico', 'Contribuyo', 'Convierto', 'Corrijo', 'Demuestro', 'Descubro', 'Detallo', 'Enseño', 'Experimento', 'Explico', 'Formo', 'Inculco', 'Instruyo', 'Muestro', 'Oriento', 'Preparo', 'Proveo', 'Sustento', 'Transfiero', 'Transformo', 'Transmito', 'Traslado'];
const frecuencia = ['Nunca', 'Pocas veces', 'ocasionalmente', 'Con frecuencia', 'siempre'];
var levels = [];
var slabs = [];
var csvData = [];

verbs.push(conocimiento, comprension, uso, transferencia);

function updateVerbs(){
  let selectTax = document.getElementById("nivel-tax");
  let selectVerb = document.getElementById("verbs");
  let nivelTax = selectTax.value;
  let list = 0;
  switch (nivelTax) {
    case 'conocimiento':
      list = 0;
      break;
    case 'comprension':
      list = 1;
      break;
    case 'uso':
      list = 2;
      break;
    case 'transferencia':
      list = 3;
      break;
    default:
      list = 0;
  }

  removeAll(selectVerb);

  for(let i=0; i<verbs[list].length; i++){
    let newOption = new Option(verbs[list][i],verbs[list][i]);
    selectVerb.add(newOption, undefined);
  }
}

function removeAll(selectBox) {
    while (selectBox.options.length > 0) {
        selectBox.remove(0);
    }
}

function updateResult(){
  let verb = document.getElementById("verbs").value;
  let tema = document.getElementById("tema").value;
  let utilidad = document.getElementById("utilidad").value;
  let lugar = document.getElementById("lugar").value;
  let resultado = document.getElementById("resultado");



  let cat = verb + " " + tema + " " +  utilidad + " " + lugar;
  cat = addPeriod(cat);
  resultado.value = cat;
  //updateLevels(verb, tema, lugar);*/
}

/*
function updateLevels(action, skill, context){
  levels = [];
  for(var i=0; i<5; i++){
    levels.push(document.getElementById("lvl" + (i+1)));
  }

  for(var i=0; i<5; i++){
    let cat = [action, skill, context];
    if(i === 0 || i === 1 || i === 3){
      cat[0] = cat[0].toLowerCase();
      cat.unshift(frecuencia[i])
    } else {
      cat.splice(1, 0, frecuencia[i].toLowerCase());
    }
    levels[i].value = addPeriod(cat.join(" "));
  }
}*/

function addPeriod(text){
  text = text.split('');
  while(text[text.length - 1] === ' '){
    text.pop();
  }
  if (text[text.length - 1] !== '.'){
    text.push('.');
  }
  text = text.join('');
  return text;
}

function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("resultado");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Texto copiado: " + copyText.value);
}

function copyManyToClipboard() {
  var lvls = [];
  for(var i=0; i<5; i++){
    lvls.push(document.getElementById("lvl" + (i+1)));
  }

  let copy = '';
  for(var i=0; i<5; i++){
    /*lvls[i].select();
    lvls[i].setSelectionRange(0, 99999);  /* For mobile devices */
    copy += lvls[i].value + "\n";
  }
  navigator.clipboard.writeText(copy);
  /* Alert the copied text */
  alert("Texto copiado: " + copy);
}

function updateLinks() {
  let descubre = document.getElementById("descubre");
  let demuestra = document.getElementById("demuestra");
  let autovaloracion = document.getElementById("autovaloracion");

  let die = Math.ceil(Math.random()*2);
  if (die === 1) {
    descubre.innerHTML = "<a  id='descubre' href='https://docs.google.com/presentation/d/1PJUenGQfYTsPInaaHZ4OmecwpzD0hynZQDkl32DVuws/edit?usp=sharing'>Drag and drop</a>";
  }
  else if (die === 2) {
    descubre.innerHTML = "<a  id='descubre' href='https://docs.google.com/presentation/d/1bp9fc_LIhhEbbDQmiQxyS7RXsR2tfDvi/edit?usp=sharing&ouid=112012172517000969603&rtpof=true&sd=true'>Completar espacios en blanco</a>";
  }
  demuestra.innerHTML = "<a  id='demuestra' href='https://docs.google.com/document/d/1ssL0o1sRHvLm9FJy38Y4aXMhpO9o_IAjGeVgJL8xY5c/edit?usp=sharing'>Estudio de caso</a>";
  autovaloracion.innerHTML = "<a  id='autovaloracion' href='https://docs.google.com/document/d/1xG6ERpid2KM8k9vpHE_puQPWtJL1-gSW/edit?usp=sharing&ouid=112012172517000969603&rtpof=true&sd=true'>Escala</a>";
}

//Constructor de slabs
function Slab(nivelTax, verb, tema, utilidad, lugar, resultado, descubre, demuestra, autovaloracion) {
  this.nivelTax = nivelTax;
  this.verb = verb;
  this.tema = tema;
  this.utilidad = utilidad;
  this.lugar = lugar;
  this.resultado = resultado;
  this.descubre = descubre;
  this.demuestra = demuestra;
  this.autovaloracion = autovaloracion;
}

function saveSlab() {
  let select = document.getElementById("slabDropdownMenu");

  if (slabs.length === 10){
    window.alert('Solo puedes guardar un máximo de 10 slabs.');
  } else if (select.value >= 0){
    let nivelTax = document.getElementById("nivel-tax");
    let verb = document.getElementById("verbs");
    let tema = document.getElementById("tema");
    let utilidad = document.getElementById("utilidad");
    let lugar = document.getElementById("lugar");
    let resultado = document.getElementById("resultado");
    let descubre = document.getElementById("descubre");
    let demuestra = document.getElementById("demuestra");
    let autovaloracion = document.getElementById("autovaloracion");

    if (select.value == 0){
      // Meter slab al array.
      slabs.push(new Slab(
        nivelTax.value,
        verb.value,
        tema.value,
        utilidad.value,
        lugar.value,
        resultado.value,
        descubre.textContent,
        demuestra.textContent,
        autovaloracion.textContent));

      window.alert (`Slab ${slabs.length} creado.`)
      // Actualizar contador.
      updateCounter();
      // Actualizar dropdown menu
      updateSlabDropdownMenu()
      cleanFields();

    } else if (select.value > 0) {
      slabs[select.value - 1] = new Slab(
        nivelTax.value,
        verb.value,
        tema.value,
        utilidad.value,
        lugar.value,
        resultado.value,
        descubre.textContent,
        demuestra.textContent,
        autovaloracion.textContent);

      window.alert(`Slab ${select.value} modificado.`);
    }
  }
}

function cleanFields() {
  let nivelTax = document.getElementById("nivel-tax");
  let verb = document.getElementById("verbs");
  let tema = document.getElementById("tema");
  let utilidad = document.getElementById("utilidad");
  let lugar = document.getElementById("lugar");
  let resultado = document.getElementById("resultado");
  let descubre = document.getElementById("descubre");
  let demuestra = document.getElementById("demuestra");
  let autovaloracion = document.getElementById("autovaloracion");

  nivelTax.value = "conocimiento";
  verb.value = '';
  tema.value = '';
  utilidad.value = '';
  lugar.value = '';
  resultado.value = '';
  descubre.innerHTML = '<a  id="descubre" href="#"></a>';
  demuestra.innerHTML = '<a  id="demuestra" href="#"></a>';
  autovaloracion.innerHTML = '<a  id="autovaloracion" href="#"></a>';
}

function updateSlabDropdownMenu() {
  let select = document.getElementById("slabDropdownMenu");
  removeOptions(select);
  var opt = document.createElement('option');
  opt.value = 0;
  opt.innerHTML = "";
  select.appendChild(opt);

  slabs.forEach((item, i) => {
    opt = document.createElement('option');
    opt.value = i+1;
    opt.innerHTML = i+1;
    select.appendChild(opt);
  });
}

function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}

function updateCounter() {
  let counter = document.getElementById("counter");
  counter.innerHTML = `<p id="counter">${slabs.length}/10</p>`;
}

function updateFields() {
  let select = document.getElementById("slabDropdownMenu");

  if (select.value == 0) {
    cleanFields();
  } else {
    document.getElementById("nivel-tax").value = slabs[select.value-1].nivelTax;
    updateVerbs();
    document.getElementById("verbs").value = slabs[select.value-1].verb;
    document.getElementById("tema").value = slabs[select.value-1].tema;
    document.getElementById("utilidad").value = slabs[select.value-1].utilidad;
    document.getElementById("lugar").value = slabs[select.value-1].lugar;
    document.getElementById("resultado").value = slabs[select.value-1].resultado;

    if (slabs[select.value-1].descubre === "Drag and drop") {
      document.getElementById("descubre").innerHTML = "<a  id='descubre' href='https://docs.google.com/presentation/d/1PJUenGQfYTsPInaaHZ4OmecwpzD0hynZQDkl32DVuws/edit?usp=sharing'>Drag and drop</a>";
    } else if (slabs[select.value-1].descubre === "Completar espacios en blanco") {
      document.getElementById("descubre").innerHTML = "<a  id='descubre' href='https://docs.google.com/presentation/d/1bp9fc_LIhhEbbDQmiQxyS7RXsR2tfDvi/edit?usp=sharing&ouid=112012172517000969603&rtpof=true&sd=true'>Completar espacios en blanco</a>";
    }
    document.getElementById("demuestra").innerHTML = "<a  id='demuestra' href='https://docs.google.com/document/d/1ssL0o1sRHvLm9FJy38Y4aXMhpO9o_IAjGeVgJL8xY5c/edit?usp=sharing'>Estudio de caso</a>";
    document.getElementById("autovaloracion").innerHTML = "<a  id='autovaloracion' href='https://docs.google.com/document/d/1xG6ERpid2KM8k9vpHE_puQPWtJL1-gSW/edit?usp=sharing&ouid=112012172517000969603&rtpof=true&sd=true'>Escala</a>";
  }
}

function deleteSlab() {
  let select = document.getElementById("slabDropdownMenu");
  if (select.value > 0) {
    slabs.splice(select.value-1, 1);
    window.alert(`Slab ${select.value} borrado.`);
    updateSlabDropdownMenu();
    updateCounter();
    cleanFields();
  } else {
    window.alert('Selecciona un slab para borrarlo.')
  }
}

function test() {
  console.log(slabs)
}

//create CSV file data in an array
function translateObj2Arr() {
  csvData = [];
  slabs.forEach((slab, i) => {
    csvData.push([
    slab.nivelTax,
    //slab.verb,
    //tema,
    //utilidad,
    //lugar,
    slab.resultado,
    slab.descubre,
    slab.demuestra,
    slab.autovaloracion])
  });
}

//create a user-defined function to download CSV file
function download_csv_file() {

    //define the heading for each row of the data
    var csv = 'Nivel-Taxonomico,Resultado,Descubre,Demuestra,Autovaloracion\n';

    //merge the data with CSV
    csvData.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

    //display the created CSV data on the web browser
    //document.write(csv);

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';

    //provide the name for the CSV file to be downloaded
    hiddenElement.download = `Deck - ${slabs.length} slabs.csv`;
    hiddenElement.click();
}

updateVerbs();
//updateSlabDropdownMenu();
