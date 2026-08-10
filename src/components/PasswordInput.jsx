import { useState } from "react";

function PasswordInput (){
    const [password,setPassword] = useState('')

    const Passwordchange = (event) =>{
        setPassword(event.target.value);
        console.log("Entering password...")
    };

    return(
        <>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange ={Passwordchange} />
        </div>
        </>
    )
}

export default PasswordInput;