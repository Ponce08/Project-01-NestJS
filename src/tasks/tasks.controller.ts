import { TasksService } from '@/tasks/tasks.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTaskss(@Query() query: any) {
    console.log(query);
    
    return this.taskService.getTasks();
  }

  @Post()
  postTask(@Body() task: any) {
    return this.taskService.postTask(task);
  }
}
