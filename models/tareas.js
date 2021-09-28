const Tarea = require("./tarea");
const {leerBD} = require("../helpers/guardarArchivo");
class Tareas{

    constructor(){
        this._listado = {};
    }
    borrarTarea(id=''){
        if (this._listado[id]) delete this._listado[id];
    }
    completarTarea(){
        
        let today = new Date();
        let options = {hour: "numeric", minute: "numeric", second: "numeric"};
        console.log(today.toLocaleDateString("en-GB", options));
        return today.toLocaleDateString("en-GB", options);
        
    }
    completarTareas(tareas){
        let aux=0;
        Object.keys(this._listado).forEach((key) =>{
            Object.keys(tareas).forEach((i) =>{
                // console.log(`tareas[i] lenght = ${Object.keys(tareas[i]).length}`);
                // console.log(`tareas[i].id = ${tareas[i].lenght}`);
                // console.log(`this._listado[key].id = ${this._listado[key].id}`);

                for (let x=0; x<Object.keys(tareas[i]).length; x++) if (this._listado[key].id == tareas[i][x]) this._listado[key].completadoEn=this.completarTarea();

            })
            
        })
    }
    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    agregarTarea(tarea){
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        let aux = 0;
        Object.keys(this.listadoArr).forEach((key) =>{
            aux++
            let linea = `${aux.toString().green}. ${this.listadoArr[key].descripcion}`;
            if (this.listadoArr[key].completadoEn==null) linea=linea+`' :: ${'PENDIENTE'.red}`;
            else linea=linea+`' :: ${'COMPLETADO'.green}`;
            console.log(linea);
            linea=``;
        });
        console.log();
    }
    listarTareasCompletadas(){
        let aux = 0;
        Object.keys(this.tareasCompletadas).forEach((key) =>{
            aux++
            let linea = `${aux.toString().green}. ${this.tareasCompletadas[key].descripcion} :: Completado el ${this.tareasCompletadas[key].completadoEn}`;
            console.log(linea);
            linea=``;
        });
        console.log();
    }
    listarTareasPendientes(){
        let aux = 0;
        Object.keys(this.tareasPendientes).forEach((key) =>{
            aux++
            let linea = `${aux.toString().green}. ${this.tareasPendientes[key].descripcion}`;
            console.log(linea);
            linea=``;
        });
        console.log();
    }
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach((key) =>{listado.push(this._listado[key]);})
        return listado;
    }

    get tareasCompletadas(){
        const listado = [];
        Object.keys(this._listado).forEach((key) =>{
            if (this._listado[key].completadoEn != null) listado.push(this._listado[key]);
        });
        return listado;
    }

    get tareasPendientes(){
        const listado = [];
        Object.keys(this._listado).forEach((key) =>{
            if (this._listado[key].completadoEn == null) listado.push(this._listado[key]);
        });
        return listado;
    }
}

module.exports = Tareas;