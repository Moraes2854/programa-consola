const Tarea = require("./tarea");
const {leerBD} = require("../helpers/guardarArchivo");
class Tareas{

    constructor(){
        this._listado = {};
    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach((key) =>{listado.push(this._listado[key]);})
        return listado;
    }
}

module.exports = Tareas;