import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateMemberDto {
    @ApiProperty({ description: '게정ID' })
    @IsNotEmpty()
    username: string

    @ApiProperty({ description: '비밀번호' })
    @IsNotEmpty()
    password: string

    @ApiProperty({ description: '이메일' })
    @IsEmail()
    email: string
}
