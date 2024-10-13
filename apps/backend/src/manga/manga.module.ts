import { Module } from '@nestjs/common';
import { MangaController } from './manga.controller';
import { MangaService } from './manga.service';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MangaController],
  providers: [MangaService, PrismaService, JwtService]
})
export class MangaModule {}
