import { Project } from "./project";
import { addProjectToDOM } from "../components/new-project-menu/new-project";
import { shownewprojectMenuDOM } from "../components/new-project-menu/new-project";

let projects = new Set();
createProject("Today");
createProject("Inbox");

export function createProject(title){
    let project = new Project(title);
    projects.add(project);
    addProjectToDOM(project);
}

export function shownewprojectMenu(){
    shownewprojectMenuDOM();
}