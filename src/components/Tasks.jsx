import { useRef } from "react";
import Button from "./Button";

export default function Tasks({tasks, onAddTask, onClearTask}){
    const textArea = useRef();

    function addTask(){
        onAddTask(textArea.current.value);
        textArea.current.value = '';
    }

    return (
        <div className="flex flex-col mt-8 mb-8">
            <h1 className="font-bold text-4xl mb-2">Tasks</h1>
            <div className="flex items-center space-x-2 ">
                <textarea ref={textArea} className="w-3/4 mb-2 rounded-lg"/>
                <Button 
                    label="Add task" 
                    onClick={addTask} 
                    className="bg-blue-400 px-5"
                />
            </div>
    
            {tasks.length > 0 && (
                tasks.map((task, i) => (
                    <div className="flex items-center mb-1 space-x-2" key={i} >
                        <p className="flex-1 bg-blue-50 py-2 px-3 rounded-lg">{task}</p>
                        <Button 
                            label="Clear task" 
                            onClick={() =>onClearTask(i)} 
                            className="bg-stone-300"
                        />
                    </div>
                ))
            )}
        </div>
    )   
}