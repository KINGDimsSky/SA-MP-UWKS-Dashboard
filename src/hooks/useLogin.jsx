import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const tokenStatus = localStorage.getItem('token');
        if (tokenStatus){
          setUsername(localStorage.getItem('username'))      
        }else {
          navigate('/signin')    
        }
      }, [])

      return username
}   

export const usetokenRemoval = () => {
    useEffect(() => {
        if (localStorage.getItem('token')){
          localStorage.removeItem('token')
        }
      }, [])
}
