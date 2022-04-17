import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class KeeperService extends PrismaCrudService {
  constructor() {
    super({
      model: 'keeper',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
