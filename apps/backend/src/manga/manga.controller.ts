import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaDto } from './dtp/manga.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('manga')
export class MangaController {
  constructor(private mangaService: MangaService) {}

  @UseGuards(JwtGuard)
  @Post()
  async createManga(@Body() dto: MangaDto) {
    return await this.mangaService.createManga(dto);
  }

  @Get(':id')
  async getMangaById(@Param('id') id: string) {
    return await this.mangaService.getMangaById(id);
  }

  @UseGuards(JwtGuard)
  @Get('user/:userId')
  async getAllUserMangas(@Param('userId') userId: string) {
    return await this.mangaService.getAllUserMangas(userId);
  }

  @Put(':id')
  async updateManga(@Param('id') id: string, @Body() dto: MangaDto) {
    return await this.mangaService.updateManga(id, dto);
  }

  @Delete(':id')
  async deleteManga(@Param('id') id: string) {  
    return await this.mangaService.deleteManga(id);
  }
}
