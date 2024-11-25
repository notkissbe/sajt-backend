import { PartialType } from '@nestjs/mapped-types';
import { CreateSajtDto } from './create-sajt.dto';

export class UpdateSajtDto extends PartialType(CreateSajtDto) {}
