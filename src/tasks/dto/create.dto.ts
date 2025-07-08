import { IsString, Min } from 'class-validator';

export class Task {
  id: number;

  @IsString()
  @Min(1)
  name: string;

  status: boolean;
}
