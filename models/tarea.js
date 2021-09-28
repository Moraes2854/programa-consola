const { v4: uuidv4} = require('uuid');
class Tarea {

    id = '';
    descripcion = '';
    completadoEn = null;

    constructor(descripcion) {
        this.id=uuidv4();
        this.descripcion=descripcion;
    }

    get completadoEn(){
        return this.completadoEn;
    }

}

  

module.exports = Tarea;