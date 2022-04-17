import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { PrismaCrudModule } from 'nestjs-prisma-crud';
import { MemberModule } from './member/member.module';
import { ScheduleModule } from '@nestjs/schedule';
import { KeeperModule } from './keeper/keeper.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { TaskModule } from './task/task.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ 
    ScheduleModule.forRoot(),
    PrismaCrudModule.register({
    prismaService: PrismaService,
  }), MemberModule, KeeperModule, UserModule, LocationModule, TaskModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
