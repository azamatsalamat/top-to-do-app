export class Project{
    constructor(title){
        this.title = title;
        this.tasks = new Set();
    }

    addTask(task){
        this.tasks.add(task);
    }
}