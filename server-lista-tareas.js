const http = require ('http')
const host = "localhost";
const port = 8080;

// Realizar el JSON que la lista de tareas

const tasks = [
    {
    id: 1,
    descripcion: "Hacer el mercado",
        completado: false
    },
    {
    id: 2,
    descripcion: "Realizar proyecto de servidor con node.js",
    completado: false
    },
    {
        id: 3,
        descripcion: "Sacar a pasear al perro",
        completado: true
    }
]
    


//Guardar el servidor que voy a crear en una cosntante esto  una funcion que recibe como argumento otra funcion
const server = http.createServer((req,res) =>{
    if (req.method === 'GET' && req.url === '/task') {
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(tasks));
    
    }
    else {
        res.writeHead (404, {'Content-type': 'text/plain'})
        res.end("Error no se encuentra el servidor")
    }
})

server.listen ( port, host, () => {
    console.log("Servidor corriendo",host,port);
});