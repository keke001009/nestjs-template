import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class ProductService extends PrismaCrudService {
  constructor() {
    super({
      model: 'product',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
