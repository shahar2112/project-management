import { forwardRef } from "react";

const Input = forwardRef(function Input({header, ...props}, ref){
    return (
        <div>
            <h1 className="text-xl text-blue-800 font-bold">{header}</h1>
            <input className="rounded-md" ref={ref} {...props}></input>
        </div>
    )
});

export default Input;