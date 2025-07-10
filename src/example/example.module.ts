import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';

@Module({
  providers: [ExampleService]
})
export class ExampleModule {}


// import { Module } from '@nestjs/common';
// import { ExampleService } from './example.service';

// @Module({
//   providers: [ExampleService]
// })
// export class ExampleModule {}