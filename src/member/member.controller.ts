import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Request } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { LoginMemberDto } from './dto/member.dto';
import { UserService } from 'src/user/user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('멤버')
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService, private readonly userService: UserService) {}

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.memberService.create(createMemberDto, { crudQuery });
    await this.userService.create({ memberId: created.id }, { crudQuery });
    return created;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.memberService.findMany({ crudQuery });
    return matches;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.memberService.findOne(id, { crudQuery });
    return match;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.memberService.update(id, updateMemberDto, { crudQuery });
    return updated;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.memberService.remove(id, { crudQuery });
  }

}
