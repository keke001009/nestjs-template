import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MemberService } from 'src/member/member.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('일반회원')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly memberService: MemberService) {}

  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async create(@Body() createUserDto: CreateUserDto, @Query('crudQuery') crudQuery: string) {
    const member = await this.memberService.create(createUserDto, { crudQuery });
    console.log(member);
    const created = await this.userService.create({ memberId: member.id }, { crudQuery : {
      select: { only: ['id', 'memberId'] }
    }});
    return created;
  }

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.userService.findMany({ crudQuery });
    return matches;
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.userService.findOne(id, { crudQuery });
    return match;
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.userService.update(id, updateUserDto, { crudQuery });
    return updated;
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.userService.remove(id, { crudQuery });
  }
}
