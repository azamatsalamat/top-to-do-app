import newprojecthtml from './new-project.html';
import newprojectcss from './new-project.css';
import { createProject } from '../../script';

export function addProjectToDOM(project){
    const projectsListElement = document.getElementById("projectsList");
    const newprojectElement = document.createElement("li");
    newprojectElement.textContent = project.title;
    projectsListElement.appendChild(newprojectElement);
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
    cancelButton.addEventListener('click', hidenewprojectMenu);

    const form = document.getElementById('newProjectForm');
    form.addEventListener('submit', submitnewproject);
}

function hidenewprojectMenu() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('newProjectPopup');
    
    overlay.classList.remove('active');
    popup.classList.remove('active');
}

function submitnewproject(event) {
    event.preventDefault(); 

    const projectNameInput = document.getElementById('projectName');
    const projectName = projectNameInput.value.trim();

    if (projectName) {
        createProject(projectName);
        hidenewprojectMenu();
        projectNameInput.value = '';
    } else {
        alert('Please enter a project name.');
    }
}
