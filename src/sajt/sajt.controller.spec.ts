import { Test, TestingModule } from '@nestjs/testing';
import { SajtController } from './sajt.controller';
import { SajtService } from './sajt.service';

describe('SajtController', () => {
  let controller: SajtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SajtController],
      providers: [SajtService],
    }).compile();

    controller = module.get<SajtController>(SajtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
