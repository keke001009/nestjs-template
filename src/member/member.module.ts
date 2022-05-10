import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
// import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [MemberController],
  providers: [MemberService, UserService],
  exports: [MemberService],
})
export class MemberModule {}
