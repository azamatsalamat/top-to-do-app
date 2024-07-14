import "../style/main.css";
import { Project } from "./project";
import { Task } from "./task";
import { addProjectToDOM } from "../components/new-project-menu/new-project";
import { showNewProjectMenuDOM } from "../components/new-project-menu/new-project";
import { showNewTaskMenuDOM } from "../components/new-task-menu/new-task";

let projects = [];
createProject("Today");
createProject("Inbox");

export function showNewProjectMenu(){
    showNewProjectMenuDOM();
}

export function createProject(title){
    let project = new Project(title);
    projects.push(project);
    addProjectToDOM(project);
}

export function showNewTaskMenu(){
    showNewTaskMenuDOM();
}

export function createTask(projectName, title, description, priority, deadline){
    const project = projects.find(x => x.title === projectName);
    const task = new Task(title, description, priority, deadline);
    project.addTask(task);
}