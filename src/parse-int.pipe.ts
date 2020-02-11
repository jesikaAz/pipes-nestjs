import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    // validation test
    if(isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    //console.log('val', val);
    console.log('typeof val',typeof val);
    return val;
  }
}
