import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { MangaModule } from './manga/manga.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, MangaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
