import { useState } from "react";
import Projects from "./components/Projects";
import Project from "./components/Project";
import NewProject from "./components/NewProject";

function App() {
  const [projects, setProjects] = useState([]);
  const [isNewProject, setIsNewProject] = useState(false);
  const [currProject, setCurrProject] = useState(null);

  function handleNewProjectClick(){
    setIsNewProject(true);
  }

  function handleCancelClick(){
    setIsNewProject(false);
  }

  function handleNewProjectSave(project){
    const newProject = {
      ...project,
      tasks: []
    };
    setProjects(prevProjects => [...prevProjects, newProject]);
    setIsNewProject(false);
    setCurrProject(null);
    console.log('projects ------->:');
  }

  function handleProjectSelect(project){
    setCurrProject(project);
  }

  function handleUpdateProject(project){
    setCurrProject(project);
    setProjects(prevProjects =>
      prevProjects.map(updatedProject =>
        updatedProject.title === project.title ? project : updatedProject
      )
    );
  }

  function handleDeleteProject(){
    const updatedProjects = projects.filter(project => project.title !== currProject.title);
    setProjects(updatedProjects);
    setCurrProject(null);
  }

  return (
    <div className="flex h-screen min-h-screen bg-gradient-to-r from-blue-200 via-grey-500 to-grey-200 flex items-center justify-center">
      <Projects 
        projects={projects} 
        onNewProjectClick={handleNewProjectClick} 
        onProjectSelect={handleProjectSelect}
      />
      <div className="flex flex-col justify-center items-center w-full">
        {isNewProject && (
          <NewProject 
            onSaveClick={handleNewProjectSave} 
            onCancelClick={handleCancelClick}
          />
        )}
        {!isNewProject && (
          <Project 
            currProject={currProject} 
            onNewProjectClick={handleNewProjectClick}
            onUpdateProject={handleUpdateProject}
            onDeleteProjectClick={handleDeleteProject}
          />
        )}
      </div>
    </div>
  );
}

export default App;
