import io from "socket.io-client";
import {getCookie} from "./handleCookie"

const socket =  io('https://rent-me-now.herokuapp.com');
// socket.on('connect', () => {
// const socket =  io('http://localhost:3000');
//     socket.emit('authenticate', { token: getCookie('token')}) //send the jwt
      
// });
socket.emit('authenticate', { token: getCookie('token')}) //send the jwt
export default socket
