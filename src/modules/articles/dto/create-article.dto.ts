import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({ example: 'Título do Artigo', description: 'O título principal' })
  @IsString()
  @IsNotEmpty({ message: 'O título é obrigatório' })
  title: string;

  @ApiProperty({ example: 'Conteúdo do artigo...', description: 'O texto completo' })
  @IsString()
  @IsNotEmpty({ message: 'O conteúdo do artigo é obrigatório' })
  content: string;
}