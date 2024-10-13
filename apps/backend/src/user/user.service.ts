import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { hash } from 'bcrypt';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto:CreateUserDto){
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })

    if (user) throw new ConflictException('email duplicated');

    const newUser = await this.prisma.user.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      }
    })

    const { password, ...result } = newUser
    return result
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }
}
