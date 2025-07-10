import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
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
}
