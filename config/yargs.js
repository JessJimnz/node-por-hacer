const descripcion = {
			demand: true,
			alias: 'd',
			desc:'Descripcion de la tarea por hacer'
};

const completado = {

					alias: 'c',
					desc:'Marca como completado o pendiente la tarea',
					default: true
};


const argv = require ('yargs')
		.command ('crear', 'Crear un eemento por hacer',{
				descripcion
		})
		.command('actualizar', 'Actualiza el estado completado de una tarea', {
				descripcion,
				completado

		})

		.command('borrar', 'Borra un elemento del arreglo', {
				descripcion
		})

		.help()
		.argv;


module.exports = {
	argv
}
