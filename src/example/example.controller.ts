import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Req,
  Res,
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
}
