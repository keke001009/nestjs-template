import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { KeeperService } from './keeper.service';
import { CreateKeeperDto } from './dto/create-keeper.dto';
import { UpdateKeeperDto } from './dto/update-keeper.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('키퍼')
@Controller('keeper')
export class KeeperController {
  constructor(private readonly keeperService: KeeperService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createKeeperDto: CreateKeeperDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.keeperService.create(createKeeperDto, { crudQuery });
    return created;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.keeperService.findMany({ crudQuery });
    return matches;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.keeperService.findOne(id, { crudQuery });
    return match;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateKeeperDto: UpdateKeeperDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.keeperService.update(id, updateKeeperDto, { crudQuery });
    return updated;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.keeperService.remove(id, { crudQuery });
  }
}
