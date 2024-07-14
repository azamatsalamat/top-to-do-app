import newprojecthtml from './new-project.html';
import './new-project.css';
import { createProject } from '../../script';
import { showProjectTasks } from '../view-project/view-project';

export function addProjectToDOM(project){
    const projectsListElement = document.getElementById("projectsList");
    const newProjectElement = document.createElement("li");
    newProjectElement.textContent = project.title;
    newProjectElement.onclick = () => showProjectTasks(project);
    projectsListElement.appendChild(newProjectElement);
}

export function showNewProjectMenuDOM(){
    if (!document.getElementById('newProjectPopup')) {
        document.body.insertAdjacentHTML('beforeend', newprojecthtml);
    }
    
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('newProjectPopup');
    
    overlay.classList.add('active');
    popup.classList.add('active');
    
    const cancelButton = popup.querySelector('button[type="button"]');
    cancelButton.addEventListener('click', hideNewProjectMenu);

    const form = document.getElementById('newProjectForm');
    form.addEventListener('submit', submitNewProject);
}

function hideNewProjectMenu() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('newProjectPopup');
    
    overlay.classList.remove('active');
    popup.classList.remove('active');
}

function submitNewProject(event) {
    event.preventDefault(); 

    const projectNameInput = document.getElementById('projectName');
    const projectName = projectNameInput.value.trim();

    if (projectName) {
        createProject(projectName);
        hideNewProjectMenu();
        projectNameInput.value = '';
    } else {
        alert('Please enter a project name.');
    }
}
