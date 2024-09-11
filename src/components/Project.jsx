import Tasks from "./Tasks";

export default function Project({currProject, onNewProjectClick, onUpdateProject, onDeleteProjectClick}) {

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

    return (
        currProject == null ? (
            <div className="w-2/3 flex flex-col justify-center items-center text-center">
                <img src="logo.png" alt="Picture when no projects where created" className="size-24  h-24  mb-4"></img>
                <h1 className="text-2xl font-semibold">No Project Selected</h1>
                <p  className="text-lg mb-4">Select a project or get started with a new one</p>
                <button onClick={onNewProjectClick} className="bg-stone-500 px-8 text-tahiti rounded-xl">Create new project</button>
            </div>
        ) : (
            <div className="relative w-2/3 flex flex-col">
                <button onClick={onDeleteProjectClick} className="absolute top-0 right-0 flex bg-stone-100 px-8 text-tahiti rounded-lg ">Delete project</button>
                <h1 className="text-4xl font-bold">{currProject.title}</h1>
                <p className="text-lg">{currProject.desc}</p>
                <p className="text-md text-gray-500">Due Date: {currProject.dueDate}</p>
                <Tasks tasks={currProject.tasks} onAddTask={handleAddTask} onClearTask={handleClearTask}/>
            </div>
        )
    )
}