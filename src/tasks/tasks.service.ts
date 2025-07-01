import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: object[] = [];

  getTasks() {
    return this.tasks;
  }

  postTask(task: any) {
    this.tasks.push(task);
    return task;
  }
}
