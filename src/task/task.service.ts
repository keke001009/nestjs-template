import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class TaskService extends PrismaCrudService {
  constructor() {
    super({
      model: 'task',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
