import { Module } from '@nestjs/common';
import { KeeperService } from './keeper.service';
import { KeeperController } from './keeper.controller';

@Module({
  controllers: [KeeperController],
  providers: [KeeperService]
})
export class KeeperModule {}
