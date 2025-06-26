import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

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
