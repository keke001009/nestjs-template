import * as jwt from 'jsonwebtoken';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import authConfig from 'src/config/auth.config';
import { ConfigType } from '@nestjs/config';

interface Member {
  id: number;
  username: string;
  email?: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
  ) { }

  login(member: Member) {
    const payload = { ...member };

    return jwt.sign(payload, this.config.jwtSecret, {
      expiresIn: '1d',
      audience: 'example.com',
      issuer: 'example.com',
    });
  }

  verify(jwtString: string) {
    try {
      const payload = jwt.verify(jwtString, this.config.jwtSecret) as (jwt.JwtPayload | string) & Member;

      const { id, username, email } = payload;

      return {
        userId: id,
        username,
        email,
      }
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}