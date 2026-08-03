import { useState } from "react";

function SubmitButton (){

    const [isHoverd,setIshovered] = useState(false);

    const handleMouseEnter = ()=>{
        setIshovered(true);
        console.log('Mouse entered button');
    }

    const handleMouseLeave = ()=>{
        setIshovered(false)
        console.log('Mouse left button');
    }
        return(
        <>
        <button
        type="submit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            {isHoverd ? 'Ready to Submit' : 'Submit'}
        </button>
        </>
    )
}

export default SubmitButton;