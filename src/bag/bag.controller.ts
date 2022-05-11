import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BagService } from './bag.service';
import { CreateBagDto } from './dto/create-bag.dto';
import { UpdateBagDto } from './dto/update-bag.dto';

@ApiTags('짐(회원)')
@Controller('bag')
export class BagController {
  constructor(private readonly bagService: BagService) {}

  @Post()
  async create(@Body() createBagDto: CreateBagDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.bagService.create(createBagDto, { crudQuery });
    return created;
  }

  @Get()
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.bagService.findMany({ crudQuery });
    return matches;
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.bagService.findOne(id, { crudQuery });
    return match;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBagDto: UpdateBagDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.bagService.update(id, updateBagDto, { crudQuery });
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.bagService.remove(id, { crudQuery });
  }
}
