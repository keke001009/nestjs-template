import { Test, TestingModule } from '@nestjs/testing';
import { KeeperController } from './keeper.controller';
import { KeeperService } from './keeper.service';

describe('KeeperController', () => {
  let controller: KeeperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeeperController],
      providers: [KeeperService],
    }).compile();

    controller = module.get<KeeperController>(KeeperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
