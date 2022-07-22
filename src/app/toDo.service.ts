export class ToDoService {

  tasks: string[] = [
    "vaccum",
    "order book",
    "exercise"
  ]

  addTask(task: string) {
    this.tasks.push(task);
  }

  removeTask(taskId: number) {
    this.tasks.splice(taskId, 1);
  }
}