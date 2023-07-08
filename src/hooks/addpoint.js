import { useState } from "react";

export const addPoint=(initalValue=0)=>{
    const [value, setvalue]= useState(initalValue);

    const addPo=()=>setIsOpen(true);

    const closeModal=()=>setIsOpen(false);

    return[addPo,openModal,closeModal];

}

