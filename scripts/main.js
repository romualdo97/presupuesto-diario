var fondos = 0, // dinero con que se cuenta
	numeroDias = 0; // numero de dias que se debe administrar el fondo
var hoy = new Date(),
	dd = hoy.getDate(),
	mm = hoy.getMonth() + 1,
	yyyy = hoy.getFullYear(),
	fecha_formato_hoy = dd + "/" + mm + "/" + yyyy;
// html elements
var fondos_element = document.getElementById("fondos"),
	numDias_element = document.getElementById("numDias"),
	cuantoDeberiaGastar_element = document.getElementById("cuantoGastar"),
	cuantosDiasFaltan_element = document.getElementById("cuantosDias");

if (localStorage.fondos) 
{
	fondos = localStorage.fondos;
	fondos_element.value = localStorage.fondos;
	console.log("fondos: " + localStorage.fondos);
}
if (localStorage.numeroDias) 
{
	numeroDias = localStorage.numeroDias;
	numDias_element.value = localStorage.numeroDias;
	console.log("num dias: " + localStorage.numeroDias);
}
mostrarCuantoDeberiaGastar();
mostrarCuantosDiasFaltan();

// listo
function setNumeroDiasPorAdministrar(value)
{
	numeroDias = value;
	console.log("dias establecidos");
	if (!localStorage.fechaCreacion)
		localStorage.fechaCreacion = fecha_formato_hoy;
	saveChanges();
}

// listo
function setfondos(value)
{
	if (value < 0) return;
	fondos = value;
	console.log("fondos establecidos");
	saveChanges();
}

function registrarConsumo(value)
{
	fondos -= value;
	fondos_element.value = fondos;
	saveChanges();
}

function registrarIngreso(value)
{
	fondos += value;
	fondos_element.value = fondos;
	saveChanges();
}

function getCuantoDeberiaGastarHoy(value)
{
	return Math.floor(fondos/getDiasRestantes());
}

// @arguments: strings en el siguiente formato de fecha dd/mm/yyyy
function getDiasTranscurridos(fecha1, fecha2)
{
	var aFecha1 = fecha1.split('/'); 
 	var aFecha2 = fecha2.split('/');
 	var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]); 
 	var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1] - 1, aFecha2[0]); 
 	var dif = fFecha2 - fFecha1;
 	var dias = Math.floor(dif / (1000 * 60 * 60 * 24)); 
 	return dias;
}

function getDiasRestantes()
{
	return numeroDias - getDiasTranscurridos(localStorage.fechaCreacion, fecha_formato_hoy);
}

function mostrarCuantoDeberiaGastar()
{
	cuantoDeberiaGastar_element.innerHTML = getCuantoDeberiaGastarHoy();
}

function mostrarCuantosDiasFaltan()
{
	cuantosDiasFaltan_element.innerHTML = getDiasRestantes();
}

function saveChanges()
{
	localStorage.fondos = fondos;
	localStorage.numeroDias = numeroDias;
	mostrarCuantoDeberiaGastar();
}