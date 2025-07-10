import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('example')
export class ExampleController {
  @Get('/example')
  index(@Req() req: Request, @Res() res: Response) {
    res.status(200).json({ message: 'Hello World' });
  }
}
