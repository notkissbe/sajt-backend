import { Injectable } from '@nestjs/common';
import { CreateSajtDto } from './dto/create-sajt.dto';
import { UpdateSajtDto } from './dto/update-sajt.dto';

@Injectable()
export class SajtService {
  create(createSajtDto: CreateSajtDto) {
    return 'This action adds a new sajt';
  }

  findAll() {
    return `This action returns all sajt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sajt`;
  }

  update(id: number, updateSajtDto: UpdateSajtDto) {
    return `This action updates a #${id} sajt`;
  }

  remove(id: number) {
    return `This action removes a #${id} sajt`;
  }
}
