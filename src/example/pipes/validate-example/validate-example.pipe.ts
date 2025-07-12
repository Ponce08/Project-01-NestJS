import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateExamplePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const ageNumber = parseInt(value.age.toString(), 10);
    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be number', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: ageNumber };
  }
}
