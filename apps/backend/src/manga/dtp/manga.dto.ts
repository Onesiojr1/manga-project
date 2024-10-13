import { IsNumber, IsString } from "class-validator";

export class MangaDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsNumber()
  chapter: number;

  @IsString()
  userId: string;
}