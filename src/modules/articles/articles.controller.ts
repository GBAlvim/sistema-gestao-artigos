import { Controller, Get, Post, Body, Delete, Param, UseGuards, Request, Patch } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
@UseGuards(JwtAuthGuard, RolesGuard) 
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @Roles('ADMIN', 'EDITOR')
  create(@Body() createArticleDto: CreateArticleDto, @Request() req) {
  return this.articlesService.create(createArticleDto, req.user.userId);
  }

  @Get()
  @Roles('ADMIN', 'EDITOR', 'READER')
  findAll() {
    return this.articlesService.findAll();
  }

  @Patch(':id')
  @Roles('ADMIN', 'EDITOR')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @Roles('ADMIN', 'EDITOR')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}