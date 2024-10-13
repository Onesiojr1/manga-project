import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService, JwtService],
})
export class AuthModule {}
