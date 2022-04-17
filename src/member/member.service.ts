import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class MemberService extends PrismaCrudService {
  constructor() {
    super({
      model: 'member',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
