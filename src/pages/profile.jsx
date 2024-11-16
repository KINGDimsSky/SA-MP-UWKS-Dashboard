import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useLogin } from "../hooks/useLogin";

const PageProfile = () => {
  const navigate = useNavigate();
  const username = useLogin();

  const logOutHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="content">
        <div className="username">
          <h2 className="mb-2 font-semibold">Hola {username}</h2>
        </div>
      </div>
      <form onSubmit={logOutHandler}>
        <Button type="submit" className="p-2">
          Log Out
        </Button>
      </form>
    </div>
  );
};

export default PageProfile;
