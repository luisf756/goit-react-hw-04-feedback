import { useState } from "react";

export const addPoint=(initalValue=0)=>{
    const [value, setvalue]= useState(initalValue);

    const addOne=()=>setvalue(value+1);

    const substract=()=>setvalue(value-1);
    
    return[value,addOne,substract];

}

