import Input from "./Input";
import Button from "./Button";
import {useRef, useState} from "react";

export default function NewProject({onSaveClick, onCancelClick}){
    const projectTitle = useRef();
    const projectDesc = useRef();
    const projectDueDate = useRef();

    const [titleError, setTitleError] = useState(false);

    function handleSaveClick(){
        const newProject = {
            title: projectTitle.current.value,
            desc: projectDesc.current.value,
            dueDate: projectDueDate.current.value
        };

        if (!newProject.title) {
            setTitleError(true);
            return;
        }

        setTitleError(false);
        onSaveClick(newProject);
    }

    return ( 
        <div className="flex flex-col">
            <div className="flex flex-col space-y-4">
                <Input 
                    ref={projectTitle} 
                    type='text' 
                    header='TITLE'
                    className={titleError ? "border border-red-500" : ""}
                ></Input>
                {titleError && <p className="text-red-500 text-sm mt-1">Please add a title to the project</p>}
                <Input 
                    ref={projectDesc} 
                    type='text' 
                    header='DESCRIPTION'
                ></Input>
                <Input 
                    ref={projectDueDate} 
                    type='date' 
                    header='DUE DATE'
                ></Input>
            </div>
            <div className="mt-8 justify-end space-x-4 mb-8">
                <Button 
                    label="Save" 
                    onClick={handleSaveClick} 
                    className="bg-blue-500"
                />
                <Button 
                    label="Cancel" 
                    onClick={onCancelClick} 
                    className="bg-blue-300"
                />
            </div>
        </div>
    )
}