import { Task } from '@/tasks/dto/create.dto';
import { TasksService } from '@/tasks/tasks.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('/tasks')
export class TaskController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTaskss(@Query() query: any) {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  postTask(@Body() task: Task) {
    return this.taskService.postTask(task);
  }
}


// git add . && git commit -m 'project-nestjs-21' && git push
