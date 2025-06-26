import { TasksService } from '@/tasks/tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get('/tasks')
  getTaskss() {
    return this.taskService.getTasks();
  }
}
