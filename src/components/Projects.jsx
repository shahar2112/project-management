function Projects({projects, onNewProjectClick, onProjectSelect}){

    function handleProjectClick(project){
        onProjectSelect(project);        
    }

    return (
        <div className="flex">
            <div id="default-sidebar" className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h1 className="mb-5">YOUR PROJECTS</h1>
                    <div className="flex flex-col w-1/3">
                    
                        {projects.length > 0 && (
                            projects.map((project, i) => (
                            <button 
                                key={i} 
                                className="bg-stone-700 px-4 py-2 mt-2 text-white rounded"
                                onClick={() => handleProjectClick(project)}
                            >
                                {project.title}
                                </button>
                            ))
                           )}
                    </div>
                <button className="bg-stone-500 px-8 text-tahiti rounded-lg mt-4" onClick={onNewProjectClick}>+ Add Project</button>
            </div>
        </div>
    )
};

export default Projects;
