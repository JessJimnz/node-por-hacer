const fs = require ('fs');//para grabar la info en un archivo

let listadoPorHacer = [];//se almacenaran las notas aqui

const guardarDB = () => {

	let data = JSON.stringify(listadoPorHacer);
	fs.writeFile(`db/data.json`, data, (err) => {
  			if (err) 
  				throw new Error ('No se pudo grabar', err);

		});
}

const cargarDB = () => {

	try {

	listadoPorHacer = require('../db/data.json');
	}
	catch (error) {
		listadoPorHacer = [];
	}
}

const crear = (descripcion) => {

	cargarDB();


	let porHacer = {

			descripcion,//propiedad
			completado: false//propiedad
	};

	listadoPorHacer.push(porHacer);
	guardarDB();

	return porHacer;

}

const getListado = () => {
	cargarDB();
	return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
	cargarDB();

	let index = listadoPorHacer.findIndex (tarea => tarea.descripcion === descripcion);
	//dame la posicion (index) de esta tarea => si la descripcion de la tarea 
	//coincide con la descripcion que me esta dando el usr.
	//si no coincide el index regresa un -1 indicando que no encontró el elmeneto

	if (index >= 0 ){
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	}
	else {
		return false;
	}
}

const borrar = (descripcion) => {
	cargarDB();
	
	let nuevoListado = listadoPorHacer.filter (tarea => tarea.descripcion !==descripcion);

	if (listadoPorHacer.length === nuevoListado.length){

		return false;
	}

	else{
		listadoPorHacer=nuevoListado;
		guardarDB();
		return true;
	}

}


module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}
