import { Socket } from "socket.io";

export const disconnect = ( client: Socket ) => {
    client.on('disconnect', ()=> {
        console.log('Client Disconnected')
    })
}

// listen messages
export const message = (client: Socket, io: SocketIO.Server ) => {
    client.on('message', (payload: {de: String, cuerpo: String})=>{
        console.log('Message recived', payload)
        io.emit("new-message", payload);
    })
}
