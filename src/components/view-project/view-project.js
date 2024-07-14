import viewprojecthtml from './view-project.html';

export function showProjectTasks(project){
    const projectView = document.getElementsByClassName('projects-view')[0];
    projectView.innerHTML = '';

    projectView.insertAdjacentHTML('beforeend', viewprojecthtml);
    document.getElementById('project-title').textContent = project.title;
}