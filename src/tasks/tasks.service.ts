import { Task } from '@/tasks/dto/create.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return new NotFoundException(`Task with ${id} not found`);
    }
    return taskFound;
  }

  postTask(task: Task): Task {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }
}
