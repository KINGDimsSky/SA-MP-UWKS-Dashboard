import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useLogin } from "../hooks/useLogin"

const PageProfile = () => {
    const navigate = useNavigate()
    const username = useLogin();

    const logOutHandler = () => {
        navigate('/')
    }

    return (
        <div className="profile">
            <h2>Hola {username}</h2>
            <form onSubmit={logOutHandler}>
            <Button type="submit" className="p-2">
                Log Out
            </Button>
            </form>
            
        </div>
    )
}

export default PageProfile