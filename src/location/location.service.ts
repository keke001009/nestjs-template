import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class LocationService extends PrismaCrudService {
  constructor() {
    super({
      model: 'location',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
