import { useState } from "react";

function PasswordInput (){
    const [password,setPassword] = useState('')

    const handleChange =()=>{
        console.log("Entering password...")
    }

    const Passwordchange = (event) =>{    
        setPassword(event.target.value);
        console.log('Current password:',event.target.value)
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