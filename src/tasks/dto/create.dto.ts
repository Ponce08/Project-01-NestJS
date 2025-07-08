import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class Task {
  id: number;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
