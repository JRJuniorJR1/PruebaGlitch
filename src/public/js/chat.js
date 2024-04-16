// console.log('Bienvenido al chat')

const socket = io()

const input = document.getElementById('message')
const message = document.getElementById('list-message')

input.addEventListener('keyup', evt => {
    if(evt.key === 'Enter'){
        socket.emit('mensaje_cliente', input.value)
        input.value= ''

    }
})

//socket.emit('message', 'esto es data en forma de string')

//socket.on('socket_individual', data =>{
//   console.log(data)
//})

//socket.on('para_todos_menos_el_actual', data =>{
//    console.log(data)
//})

//socket.on('eventos_para_todo', data =>{
//    console.log(data)
//})
