import { Module } from '@nestjs/common';
import { TasksModule } from 'src/tasks/tasks.module.js';

@Module({
  imports: [TasksModule],
})
export class AppModule {}
