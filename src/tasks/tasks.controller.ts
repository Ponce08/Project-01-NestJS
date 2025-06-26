import { TasksService } from '@/tasks/tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TaskController {
  taskService: TasksService;
  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }

  @Get('/tasks')
  getTaskss() {
    return this.taskService.getTasks();
  }
}
