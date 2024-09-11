import { forwardRef } from "react";

const Input = forwardRef(function Input({header, ...props}, ref){
    // if(!className){
    //     className="text-blue-800 font-bold"
    // }
    return (
        <div>
            <h1 className="text-blue-800 font-bold">{header}</h1>
            <input ref={ref} {...props}></input>
        </div>
    )
});

export default Input;