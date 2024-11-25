import { Module } from '@nestjs/common';
import { SajtService } from './sajt.service';
import { SajtController } from './sajt.controller';

@Module({
  controllers: [SajtController],
  providers: [SajtService],
})
export class SajtModule {}
