import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(data: any, userId: number) {
    return this.prisma.article.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: userId,
      },
    });
  }

  async update(id: number, data: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data,
    });
  }
  

  findAll() {
    return this.prisma.article.findMany({ include: { author: true } });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}