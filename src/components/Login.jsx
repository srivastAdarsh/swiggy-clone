import { useContext } from "react";
import User from "../context/User";

const Login = ()=>{
    const {setUserName} = useContext(User);
    return (
        <div>
            <label htmlFor="userName">
                <span>Set user name : </span>
                <input 
                    name="userName" 
                    type="text" 
                    className="border-black border-2" 
                    onChange={(e)=>{
                        setUserName(e.target.value);
                    }}
                />
            </label>
        </div>
    );
}

export default Login;