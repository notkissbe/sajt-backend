import { Test, TestingModule } from '@nestjs/testing';
import { SajtService } from './sajt.service';

describe('SajtService', () => {
  let service: SajtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SajtService],
    }).compile();

    service = module.get<SajtService>(SajtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
