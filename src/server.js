import express from 'express'
import viewsRouter from './routes/views.router.js'
import { __dirname } from './utils.js'

// motor de plantilla
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'

const app = express()
// Guardar en una cont
const httpServer = app.listen(8080, error => {
    if(error) console.log(error)
    console.log('Server escuchando en el puerto 8080')
})
// creamos el socket server
const socketServer = new Server(httpServer)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))


// express usa este motor de plantillas
app.engine('hbs', handlebars.engine({
    //con esto cambiamos la extension
    extname:'.hbs'
}))
// seteamos la dirección de mis vistas (plantlillas)
app.set('views', __dirname+'/views')
app.set('view engine', 'hbs')




app.use('/', viewsRouter)



const io = new Server(httpServer)



let messages =  [] // simular un db mock

// manager chat - productos

io.on('connection', socket => {
    console.log('Cliente conectado')
    socket.on('message', data => {
        console.log('message data:', data)
        messages.push(data)
        // emitir a todos los clientes
        io.emit('messageLogs', messages)
        
    })
})