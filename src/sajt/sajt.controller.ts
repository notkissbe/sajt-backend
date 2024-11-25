import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SajtService } from './sajt.service';
import { CreateSajtDto } from './dto/create-sajt.dto';
import { UpdateSajtDto } from './dto/update-sajt.dto';

@Controller('sajt')
export class SajtController {
  constructor(private readonly sajtService: SajtService) {}

  @Post()
  create(@Body() createSajtDto: CreateSajtDto) {
    return this.sajtService.create(createSajtDto);
  }

  @Get()
  findAll() {
    return this.sajtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sajtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSajtDto: UpdateSajtDto) {
    return this.sajtService.update(+id, updateSajtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sajtService.remove(+id);
  }
}
