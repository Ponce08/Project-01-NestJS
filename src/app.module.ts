import { Module } from '@nestjs/common';
import { TasksModule } from 'src/tasks/tasks.module.js';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule],
})
export class AppModule {}
