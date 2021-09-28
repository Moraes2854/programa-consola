require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pause, leerInput, inquirerCompletarTareas, inquirerBorrarTarea, confirmar } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


require('colors');

console.clear();


const main = async  () =>{
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    let aux = {};
    if (tareasDB){
        aux=JSON.parse(tareasDB);
        Object.keys(aux).forEach((key) =>{
            tareas.agregarTarea(aux[key]);
        });
    }

    do{
        console.clear();
        opt = await inquirerMenu();

        if(opt.opcion == '1'){
            tareas.crearTarea(await leerInput('Descripcion: '));
            guardarDB(tareas.listadoArr);
        }
        if(opt.opcion == '2')tareas.listadoCompleto();
        if(opt.opcion == '3')tareas.listarTareasCompletadas();
        if(opt.opcion == '4')tareas.listarTareasPendientes();
        if(opt.opcion == '5'){
            tareas.completarTareas(await inquirerCompletarTareas(tareas.tareasPendientes));
            guardarDB(tareas.listadoArr);
        }
        if(opt.opcion == '6'){
            const id = await inquirerBorrarTarea(tareas.listadoArr);
            const ok = await confirmar('¿Estas seguro?');
            if (ok) tareas.borrarTarea(id);
            guardarDB(tareas.listadoArr);
        }
        await pause();
    }while(opt.opcion!='0');
}

main();