import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ProjectsController } from './projects/projects.controller';
import { Projects,Controller } from './projects,/projects,.controller';

@Module({
    controllers:[UsersController, ProjectsController, Projects,Controller]
})
export class UsersModule {}
