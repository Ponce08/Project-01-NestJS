import { AuthGuard } from '@/example/guards/auth/auth.guard';
import { ValidateExamplePipe } from '@/example/pipes/validate-example/validate-example.pipe';
import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('example')
export class ExampleController {
  @Get()
  index(@Req() req: Request, @Res() res: Response) {
    res.status(200).json({ message: 'Hello World' });
  }

  @Get('/notfound')
  @HttpCode(404)
  notFound() {
    return { message: 'Page not found' };
  }

  @Get('/error')
  @HttpCode(500)
  errorPge() {
    return { message: 'error in the server' };
  }

  @Get('/ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return 10 + num;
  }

  @Get('/greet')
  @UseGuards(AuthGuard)
  getObject(@Query(ValidateExamplePipe) query: { name: string; age: number }) {
    return `My name is ${query.name} and i'm ${query.age} years old`;
  }
}
// git add . && git commit -m 'project-nestjs-34' && git push
