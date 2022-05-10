import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MemberService } from '../member/member.service'
import { LoginMemberDto } from './dto/login-member.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private memberService : MemberService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
		const payload = { username: user.username };
		return { ...payload, token: this.jwtService.sign(payload) };
	}

  async validateUser(username: string, password: string): Promise<any> {
    const { data } = await this.memberService.findMany({
      crudQuery : {
        where: {
          username,
          password
        },
        select: { only: ['username', 'password'] },
        page: 1,
        pageSize: 1,
      }
    } as any);
    const member = data[0];
    if (member && member.password === password) {
      const { password, ...result } = member;
      // result는 password 를 제외한 user의 모든 정보를 포함한다.
      return result;
    }
    return null;
  }
}