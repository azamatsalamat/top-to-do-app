export function showProjectFrom(project){
    const projectsListElement = document.getElementById("projectsList");
    const newprojectElement = document.createElement("li");
    newprojectElement.textContent = project.title;
    projectsListElement.appendChild(newprojectElement);
}