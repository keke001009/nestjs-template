import { ApiProperty } from '@nestjs/swagger';

export class LoginMemberDto {
    @ApiProperty({ description: '게정ID' })
    username: string
    @ApiProperty({ description: '비밀번호' })
    password: string
}
