import { useState } from "react";

function SubmitButton (){

    const [isHoverd,setIshovered] = useState(false);

    const handleMouseEnter = ()=>{
        setIshovered(true);
        console.log('Mouse Entering');
    }

    const handleMouseLeave = ()=>{
        setIshovered(false)
        console.log('Mouse Exiting');
    }
        return(
        <>
        <button
        type="submit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            Submit Password
        </button>
        </>
    )
}

export default SubmitButton;