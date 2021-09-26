require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pause, leerInput } = require('./helpers/inquirer');
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
        console.log(aux);
        Object.keys(aux).forEach((key) =>{
            tareas.crearTarea(aux[key].descripcion);
        });
    }

    await pause();
    do{
        opt = await inquirerMenu();

        if(opt.opcion == '1'){
            console.log('entro al if');
            tareas.crearTarea(await leerInput('Descripcion: '));
        }
        if(opt.opcion == '2'){
            console.log(tareas.listadoArr);
        } 
        await pause();
    }while(opt.opcion!='0');
}

main();