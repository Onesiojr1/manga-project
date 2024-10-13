import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MangaDto } from './dtp/manga.dto';

@Injectable()
export class MangaService {
  constructor(private prisma: PrismaService) {}

  async createManga(dto: MangaDto) {
    return await this.prisma.manga.create({
      data: { ...dto}
    })
  }

  async getMangaById(id: string) {
    return await this.prisma.manga.findUnique({
      where: {
        id
      }
    })
  }

  async getAllUserMangas(userId: string) {
    return await this.prisma.manga.findMany({
      where: {
        userId
      }
    })
  }

  async updateManga(id: string, dto: MangaDto) {
    return await this.prisma.manga.update({
      where: {
        id
      },
      data: {
        ...dto
      }
    })
  }

  async deleteManga(id: string) {
    return await this.prisma.manga.delete({
      where: {
        id
      }
    })
  }
}
