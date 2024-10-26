import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const loginSessions = (data, callback) => {
    axios.post('https://fakestoreapi.com/auth/login', data).then((res) => {
       callback(true, res.data.token);
    }).catch((err) => {
       callback(false, err.response.data);
    })
}

export const getUsername = (data) => {
    const decoded = jwtDecode(data);
    return decoded.user
}

export const generateToken = () => {
    let token = ''
    let length = 32
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return token;
  };  