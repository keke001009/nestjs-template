import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: false,
      });
  }

  async validate(username: string, password: string): Promise<any> {
    const member = await this.authService.validateUser(username, password);
    if (!member) {
      throw new UnauthorizedException();
    }
    return member;
  }
}