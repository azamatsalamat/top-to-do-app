export function addProjectToDOM(project){
    const projectsListElement = document.getElementById("projectsList");
    const newProjectElement = document.createElement("li");
    newProjectElement.textContent = project.title;
    projectsListElement.appendChild(newProjectElement);
}

