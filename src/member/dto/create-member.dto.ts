import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
    @ApiProperty({ description: '게정ID' })
    username: string
    @ApiProperty({ description: '비밀번호' })
    password: string
    @ApiProperty({ description: '이메일' })
    email: string
}
