
const {menu,agregarTareas,completado,borrarTarea} = require ('./componentes/funciones');

// solucion de promesa con el metodo then
/*function main () {
   menu();
   agregarTareas().then((value) => {
      console.log(value);
   })
   .catch ((error)=> {
      console.log("Error",error);
   })
   completado().then((value2) => {
      console.log(value2);
   })
   .catch ((error)=> {
      console.log("Error",error);
   })
   borrarTarea().then((value3)=> {
      console.log(value3);
   })
   .catch ((error)=> {
      console.log("Error",error);
   })
   
}
main();*/

// solucion de promesa con el metodo async await

async function main () {
   menu();
    try {
      const done = await agregarTareas ()
      console.log (done);

   } catch (error) {
      console.log ("error");
   } 
   try {
      const done2 = await completado ()
      console.log (done2);

   } catch (error) {
      console.log ("error");
   } 
   try {
      const done3 = await borrarTarea ()
      console.log (done3);

   } catch (error) {
      console.log ("error");
   } 
}
main();
