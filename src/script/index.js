import { Project } from "./project";
import { addProjectToDOM } from "./DOMutils";

let projects = new Set();
createProject("Today");
createProject("Inbox");

function createProject(title){
    let project = new Project(title);
    projects.add(project);
    addProjectToDOM(project);
}

export function showNewProjectMenu(){
    
}