const readline = require('readline');

const listadeTareas =[];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = () => {
    console.log ("Bienvenido a tu lista de Tareas\n");

    console.log ("1.Lista de Crear Tareas");
    console.log ("2.Lista de Tareas");
    console.log ("3.Tareas Completas");
    console.log ("4.Borras Tareas");
    console.log ("0.Salir de la aplicacion");

    rl.question("Selecciona una opcion: ", (opcion)=>{
        switch (opcion) {
            case "1": 
            console.log ("Seleccionate Crear Tareas");
            agregarTareas();
            break;
            case "2": 
            console.log ("Seleccionate Lista Tareas");
            console.log(listadeTareas);
            break;
            case "3": 
            console.log ("Seleccionate Tareas Completas");
            completado();
            break;
            case "4": 
            console.log ("Seleccionate Borrar Tareas");
            borrarTarea();
            break;
            case "0":
                console.log("Saliste de la aplicacion");
                rl.close();      
                break;
        }

    });
}


function agregarTareas () {
    
    rl.question ("id: ",(id)=>{
        rl.question ("Descripcion: ", (descripcion) =>{ 
            const tarea = {
                 id,
                descripcion,
                completado:false
            }
            listadeTareas.push(tarea);
            console.log(listadeTareas);
            menu();
        });
    });
    
   }

   const completado = () => {
    rl.question("Cual es el id de la tarea completada: ", (id) => {
        for (i=0; i < listadeTareas.length; i++) {
            if (listadeTareas[i].id === id) {
                listadeTareas[i].completado = true;
                console.log(listadeTareas);
                
            }
            else {
                console.log (listadeTareas);
            }
        }
        menu();
    });
   }

   const borrarTarea = () => {
    rl.question ("Cual es el id de la tareas para borrar: ", (id) => {
        for (i=0; i < listadeTareas.length; i++) {
            if (listadeTareas[i].id === id) {
                listadeTareas.splice(i,1);
                console.log(listadeTareas);
                
            }
            else {
                console.log (listadeTareas);
            }
        }
        menu();
    });
   }

   module.exports = {
    menu
   }