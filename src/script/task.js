export class Task{
    constructor(title, description, priority, deadline){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = deadline;
        this.status = Statuses.Created;
        this.deleted = false;
    }
}

export const Priorities = Object.freeze({
    Low: 0,
    Medium: 1,
    High: 2
})

export const Statuses = Object.freeze({
    Created: 0,
    Done: 1
})