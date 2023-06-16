import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { PrismaModule } from '../prisma/prisma.module';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      const result: User = {
        id: 1,
        email: 'EkkkZfCSy0AHM@yXbMPz.cy',
        name: 'YszpdCWzGN',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);
      await expect(controller.findOne(1)).resolves.toEqual(result);
    });
  });
});
