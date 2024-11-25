import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SajtModule } from './sajt/sajt.module';

@Module({
  imports: [SajtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
