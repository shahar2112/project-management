import Button from "./Button";

function Projects({projects, onNewProjectClick, onProjectSelect}){

    function handleProjectClick(project){
        onProjectSelect(project);        
    }

    return (
        <div className="flex">
            <div id="default-sidebar" className="w-1/3 px-8 py-16 bg-gradient-to-b from-stone-800 via-grey-500 text-stone-50 md:w-72 rounded-r-xl">
                <h1 className="mb-5">YOUR PROJECTS</h1>
                <div className="flex flex-col w-2/3">
                
                    {projects.length > 0 && (
                        projects.map((project, i) => (
                            <Button 
                                key={i}
                                label={project.title} 
                                onClick={() => handleProjectClick(project)} 
                                className="bg-stone-700 py-2 mt-2"
                            />
                        ))
                        )}
                </div>
                <Button 
                    label="+ Add Project" 
                    onClick={onNewProjectClick} 
                    className="bg-stone-500 mt-4 py-2"
                />
            </div>
        </div>
    )
};

export default Projects;
