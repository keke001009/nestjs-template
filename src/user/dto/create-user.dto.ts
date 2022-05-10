// import { IsEmail, IsNotEmpty } from 'class-validator';

import { CreateMemberDto } from "src/member/dto/create-member.dto";

// export class CreateUserDto {
//   @IsEmail()
//   email: string;

//   @IsNotEmpty()
//   password: string;
// }

export class CreateUserDto extends CreateMemberDto {}
