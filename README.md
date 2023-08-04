# Listas de Tareas Node
A continuación responderé las preguntas planteadas en el proyecto

## ¿Qué sucedio al usar async y await?
Al utilizar async y await la ejecución de la funcion main se pausa en la línea 25 hasta que la promesa de la funcion agregarTareas se resuelva y así sucesivamente.

## ¿Que sucedio al usar el método then?
Al utilizar el método then las promesas se resuelven simultaneamente pero para que se de la ejecución de la funcion completado primero se tiene que resolver la promesa de la funcion agragarTareas

## ¿¿Qué diferencias encontraste entre async, await y el método then()?
Por la teoría leída en el curso es más legible utilizar el método asyn y await que el then. Ya que con archivos de gran tamaño añ método then puede ocurrile algo similar a los "callbacks hell". 

La otra diferencia es la pausa que realiza el método asyn/await para que el resto de las promesas se sigan resolviendo, mientras que en el then se empiezan a resolver de manera simultanea.
