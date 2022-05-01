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
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/auth.config';
@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [authConfig],
      isGlobal: true,
      // validationSchema,
    }),
    ScheduleModule.forRoot(),
    PrismaCrudModule.register({
    prismaService: PrismaService,
  }), AuthModule, MemberModule, KeeperModule, UserModule, LocationModule, TaskModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
