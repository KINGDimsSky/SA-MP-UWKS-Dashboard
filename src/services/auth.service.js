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
