import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateExamplePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Value', value);

    return value;
  }
}
