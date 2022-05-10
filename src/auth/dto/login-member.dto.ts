import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginMemberDto {
    @ApiProperty({ description: '게정ID' })
    @IsNotEmpty()
    username: string

    @ApiProperty({ description: '비밀번호' })
    @IsNotEmpty()
    password: string
}
