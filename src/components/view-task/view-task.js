import taskViewHtml from '../view-task/view-task.html';
import { Priorities } from '../../script/task';
import { getProjectByName } from '../../script';
import { showProjectTasks } from '../view-project/view-project';

export function showTaskDetails(task){
    const taskView = document.getElementById('task-view');
    if (taskView.innerHTML == ''){
        taskView.insertAdjacentHTML('beforeend', taskViewHtml);
    }

    document.getElementById('taskTitleView').value = task.title;
    document.getElementById('taskDescriptionView').value = task.description;
    document.getElementById('taskDeadlineView').value = task.deadline;
    
    const prioritySelect = document.getElementById('taskPriorityView');
    Object.entries(Priorities).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        prioritySelect.appendChild(option);
    });
    prioritySelect.value = task.priority;

    const saveButton = document.getElementById('saveTaskButton');
    saveButton.addEventListener('click', () => updateTask(task));

    const closeButton = document.getElementById('closeTaskButton');
    closeButton.addEventListener('click', hideTaskView);
}

function updateTask(task){
    const taskTitleView = document.getElementById('taskTitleView');
    const taskDescView = document.getElementById('taskDescriptionView');
    const taskDeadlineView = document.getElementById('taskDeadlineView');
    const taskPriorityView = document.getElementById('taskPriorityView');
    if (taskTitleView){
        task.title = taskTitleView.value;
        task.description = taskDescView.value;
        task.deadline = taskDeadlineView.value;
        task.priority = taskPriorityView.value;
    }

    const projectName = document.getElementById('project-title').textContent;
    const project = getProjectByName(projectName);
    showProjectTasks(project);
    hideTaskView();
}

function hideTaskView(){
    const taskView = document.getElementById('task-view');
    taskView.innerHTML = '';
}