import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginMemberDto } from './dto/login-member.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @UseGuards(LocalAuthGuard) 
    @Post('/login')
    async login(@Body() loginMemberDto: LoginMemberDto, @Request() req) {
        return this.authService.login(req.user);
    }
}
