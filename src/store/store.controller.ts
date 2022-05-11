import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AccessPolicy } from 'nestjs-prisma-crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('짐 보관 내역')
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  async create(@Body() createStoreDto: CreateStoreDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.storeService.create(createStoreDto, { crudQuery });
    return created;
  }

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.storeService.findMany({ crudQuery });
    return matches;
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.storeService.findOne(id, { crudQuery });
    return match;
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateStoreDto: UpdateStoreDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.storeService.update(id, updateStoreDto, { crudQuery });
    return updated;
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.storeService.remove(id, { crudQuery });
  }
}
