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
import { AuthModule } from './auth/auth.module';
import { BagModule } from './bag/bag.module';
import { StoreModule } from './store/store.module';
@Module({
  imports: [ 
    ScheduleModule.forRoot(),
    PrismaCrudModule.register({
    prismaService: PrismaService,
    accessControl: {
      authDataKey: 'user',
      getRolesFromAuthDataFn: (authenticatedUser) => authenticatedUser?.roles,
      strict: false,
    },
  }), AuthModule, MemberModule, KeeperModule, UserModule, LocationModule, BagModule, StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
