import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MemberModule } from 'src/member/member.module';

@Module({
  imports: [
    MemberModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
