import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('위치')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createLocationDto: CreateLocationDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.locationService.create(createLocationDto, { crudQuery });
    return created;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.locationService.findMany({ crudQuery });
    return matches;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.locationService.findOne(id, { crudQuery });
    return match;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.locationService.update(id, updateLocationDto, { crudQuery });
    return updated;
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.locationService.remove(id, { crudQuery });
  }
}
