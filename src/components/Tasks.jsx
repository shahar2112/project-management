import { useRef } from "react";

export default function Tasks({tasks, onAddTask, onClearTask}){
    const textArea = useRef();

    function addTask(){
        onAddTask(textArea.current.value);
        textArea.current.value = '';
    }

    return (
        <div className="flex flex-col mt-8 mb-8">
            <h1 className="text-blue-800 font-bold text-4xl mb-2">Tasks</h1>
            <div className="flex items-center space-x-2 ">
                <textarea ref={textArea} className="w-3/4 mb-2 rounded-lg"/>
                <button className="bg-blue-400 text-white py-2 px-2 rounded-lg" onClick={addTask}>Add task</button>
            </div>
    
            {tasks.length > 0 && (
                tasks.map((task, i) => (
                    <div className="flex items-center mb-1 space-x-2" key={i} >
                        <p className="flex-1 bg-blue-50 py-2 px-3 rounded-lg">{task}</p>
                        <button className="bg-stone-100 px-8 text-tahiti py-0.5 px-0.5 rounded-lg gap-2" onClick={() =>onClearTask(i)}>Clear task</button>
                    </div>
                ))
            )}
        </div>
    )   
}