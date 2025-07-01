import { TasksService } from '@/tasks/tasks.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller({})
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get('/tasks')
  getTaskss() {
    return this.taskService.getTasks();
  }

  @Post('/tasks')
  postTask(@Body() task: any) {
    return this.taskService.postTask(task);
  }
}
