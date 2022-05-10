import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class BagService extends PrismaCrudService {
  constructor() {
    super({
      model: 'bag',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
