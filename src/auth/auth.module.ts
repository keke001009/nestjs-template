import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { MemberService } from 'src/member/member.service';
import { MemberModule } from 'src/member/member.module';
import { LocalStrategy } from './local.strategy';
@Module({
  imports: [
    MemberModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [ AuthService, LocalStrategy, JwtStrategy, MemberService],
  exports: [AuthService],
})
export class AuthModule {}
