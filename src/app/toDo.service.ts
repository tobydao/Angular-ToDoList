export class ToDoService {

  tasks: string[] = [
    "vaccum",
    "clean"
  ]

  addTask(task: string) {
    this.tasks.push(task);
  }

  removeTask(taskId: number) {
    this.tasks.splice(taskId);
  }
}