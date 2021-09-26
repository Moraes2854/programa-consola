require ('colors');
const inquirer = require('inquirer');
const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message:'¿Que desea hacer?',
        choices: [
            {
                value:'1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.green} Listar tareas`
            },
            {
                value:'3',
                name:`${'3.'.green} Listar tareas completadas`
            },
            {
                value:'4',
                name:`${'4.'.green} Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5.'.green} Completar tarea(s)`
            },
            {
                value:'6',
                name:`${'6.'.green} Borrar tarea`
            },
            {
                value:'0',
                name:`${'0.'.green} Salir`
            }     
        ]
    }
];


const inquirerMenu = async() =>{

    console.log('=================================================='.green);
    console.log('Selecciones una opción'.cyan);
    console.log('================================================== \n'.green);

    const opt = await inquirer.prompt(menuOpts);

    return opt;
}

const pause = async() =>{
    const resp = await inquirer.prompt({
        type: 'input',
        name: 'continuar',
        message:`Presione ${'ENTER'.green} para continuar \n`
    });
    return resp;
}

const leerInput = async(message) =>{
    const question = [
        {
            type:'input',
            name: 'desc',
            message,
            validate( value ){
                if (value.length == 0) return 'Por favor ingrese un valor';
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}
module.exports = {
    inquirerMenu,
    pause,
    leerInput
}