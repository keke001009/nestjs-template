import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';
// import { PrismaService } from 'nestjs-prisma';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { LoginMemberDto } from './dto/member.dto';
@Injectable()
export class MemberService extends PrismaCrudService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService
  ) {
    super({
      model: 'member',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
  async login(loginMemberDto: LoginMemberDto): Promise<string> {
    const member = await this.prisma.member.findFirst({
      where: {
        username: loginMemberDto.username,
        password: loginMemberDto.password,
      }
    })

    if (!member) {
      throw new UnauthorizedException('유저가 존재하지 않습니다');
    }

    return this.authService.login(member);
  }
}
