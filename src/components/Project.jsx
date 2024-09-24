import Tasks from "./Tasks";
import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

export default function Project({currProject, onNewProjectClick, onUpdateProject, onDeleteProjectClick}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    // Local state to hold edited values
    const [editedProject, setEditedProject] = useState(currProject);


    function handleAddTask(task){
        if(!task){
            return;
        }
        const updatedProject = {
            ...currProject,
            tasks: [...currProject.tasks, task]
        };      
        onUpdateProject(updatedProject);
    }

    function handleClearTask(index){
        const updatedTasks = currProject.tasks.filter((_,i) => i !== index);
        const updatedProject = {
            ...currProject,
            tasks: updatedTasks
        };      
        onUpdateProject(updatedProject);
    }

    // Toggle between edit and view mode
    function toggleEditMode() {
        if (isEditMode) {
            // Save changes and exit edit mode
            onUpdateProject(editedProject);
        } else {
            // Enter edit mode
            setEditedProject(currProject); // Reset to the current project values when entering edit mode
        }
        setIsEditMode(!isEditMode);
    }

    function handleCancelEdit() {
        setEditedProject(currProject);
        setIsEditMode(false);
    }

    return (
        currProject == null ? (
            <div className="w-2/3 flex flex-col justify-center items-center text-center">
                <img src="logo.png" alt="Picture when no projects where created" className="size-24  h-24  mb-4"></img>
                <h1 className="text-2xl font-semibold">No Project Selected</h1>
                <p  className="text-lg mb-4">Select a project or get started with a new one</p>
                <button onClick={onNewProjectClick} className="bg-stone-500 px-8 text-tahiti rounded-xl">Create new project</button>
            </div>
        ) : (
            <div 
                className="relative w-2/3 flex flex-col" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isEditMode ? (
                    <>
                        <input
                            className="text-4xl font-bold"
                            value={editedProject.title}
                            onChange={(e) => setEditedProject({ ...editedProject, title: e.target.value })}
                        />
                        <textarea
                            className="text-lg mt-8"
                            value={editedProject.desc}
                            onChange={(e) => setEditedProject({ ...editedProject, desc: e.target.value })}
                        />
                        <input
                            type="date"
                            className="text-md text-gray-500 mt-8"
                            value={editedProject.dueDate}
                            onChange={(e) => setEditedProject({ ...editedProject, dueDate: e.target.value })}
                        />
                        <div className="mt-4">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={toggleEditMode}>
                                Save
                            </button>
                            <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleCancelEdit}>
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <FaTrash 
                            className="absolute top-0 right-10 flex text-red-600 text-lg"
                            onClick={onDeleteProjectClick}
                            title="Delete project"
                        /> 
                        {isHovered && (
                            <FaPencilAlt
                                className="absolute top-0 right-0 transform cursor-pointer"
                                onClick={toggleEditMode}
                                title="Edit project"
                            />
                        )}
                        <h1 className="text-4xl font-bold mt-8">{currProject.title}</h1>
                        <p className="text-lg mt-4">{currProject.desc}</p>
                        <p className="text-md text-gray-500 mt-4">Due Date: {currProject.dueDate}</p>
                        <Tasks tasks={currProject.tasks} onAddTask={handleAddTask} onClearTask={handleClearTask} />
                    </>
                )}
            </div>
        )
    )
}