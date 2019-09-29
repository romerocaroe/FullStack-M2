/*var tabla=document.getElementById("senate-data");
var miembros=data.results[0].members;
var array_chequeados=['R','D','I'];
var seleccion="";
var mi_tabla_body;
armar_tabla(miembros);

function checkearPartidos(element){
   mi_tabla_body.innerHTML="";
   element.checked ? array_chequeados.push(element.name) : array_chequeados.splice(array_chequeados.indexOf(element.name),1);
   filtrar(miembros);
}

function filtrar(miembros){
    let filtrados=[];
    let union_filtrados=[];
    array_chequeados.forEach(elemento => { // elemento == 'R'
        if(seleccion==""){
            filtrados=miembros.filter(miembro => miembro.party===elemento);
        	//console.log(filtrados);
			filtrados.forEach(elemento => { //elemento es un miembro que cumplió con las condiciones de arriba
            	union_filtrados.push(elemento);
            	//paso el array que genera el filtro a un array general que sume todos los 
            	//partidos que estén check y/o del estado seleccionado
        	})
		}//fin if
    })//fin forEach grande
    
    armar_tabla(union_filtrados);
}//fin funcion
*/    




let arrayAux = [];
    var str = JSON.stringify(data, null, 2);
    var valor = JSON.parse(str)
    var pro = document.getElementById("senate-data")

    function filtrarTablaCheckbox () {
      arrayAux=[];
      let checkboxDemocrata = document.getElementById('democrata-checkbox');
      let checkboxIndependiente = document.getElementById('independiente-checkbox');
      let checkboxRepublicanos = document.getElementById('republicano-checkbox');
      console.log("Democrata: " + checkboxDemocrata.checked);
      console.log("Independiente: " + checkboxIndependiente.checked);
      console.log("Republicanos: " + checkboxRepublicanos.checked);
      if(checkboxDemocrata.checked) {
        arrayAux.push('D');
      }
      if(checkboxIndependiente.checked) {
        arrayAux.push('I');
      }
      if(checkboxRepublicanos.checked) {
        arrayAux.push('R');
      }
      return filtrarMiembrosPorPartido(arrayAux);
    }
    function filtrarMiembrosPorPartido(arrayAux) {
      let arregloFiltrado = [];
      for(let i = 0; i<arreglo.length; i++) {
        let elemento = arreglo[i];
        if(comprobarSiEstaAdentro(elemento)){
          arregloFiltrado.push(elemento);
        }
      }
      return arregloFiltrado;
      //return arreglo.filter(comprobarSiEstaAdentro);
    }
    function comprobarSiEstaAdentro(elemento) {
      for(let i = 0; i < arrayAux.length; i++) {
        if(arrayAux[i] == elemento.party) {
          return true;
        }
      }
      return false;
      //return arrayAux.includes(elemento.party);
    }
    var arreglo = valor.results[0].members;
    dibujarTablaRepresentantes(arreglo)