import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExampleController } from './example/example.controller';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, ExampleModule],
  controllers: [ExampleController],
})
export class AppModule {}
