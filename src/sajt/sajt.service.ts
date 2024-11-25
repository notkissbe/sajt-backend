import { Injectable } from '@nestjs/common';
import { CreateSajtDto } from './dto/create-sajt.dto';
import { UpdateSajtDto } from './dto/update-sajt.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


@Injectable()
export class SajtService {
  create(createSajtDto: CreateSajtDto) {
    return prisma.sajt.create({
      data: createSajtDto,
    });
  }

  findAll() {
    return prisma.sajt.findMany();
  }

  findOne(id: number) {
    return prisma.sajt.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateSajtDto: UpdateSajtDto) {
    return prisma.sajt.update({
      where: {
        id: id,
      },
      data: updateSajtDto,
    });
  }

  remove(id: number) {
    return prisma.sajt.delete({
      where: {
        id: id,
      },
    });
  }
}
