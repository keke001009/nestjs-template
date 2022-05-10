import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class StoreService extends PrismaCrudService {
  constructor() {
    super({
      model: 'store',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
