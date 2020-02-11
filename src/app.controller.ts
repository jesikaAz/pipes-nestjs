import { Controller, Get, Param, UsePipes, Post, Body, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { UpperPipe } from './upper.pipe';
import { SlugPipe } from './slug.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  @UsePipes(UpperPipe)
  getHello(@Param('name') name:string): string {
    //console.log('name in controller', name);
    return this.appService.getHello(name);
  }

  @Get('articles/:id') 
  @UsePipes(ParseIntPipe)
  getArticleById(@Param('id') id){
    const idType= typeof id;
    const res = { id:id, idType: idType};
    return res;
  }

  @Post('articles')
  @UsePipes(SlugPipe)
  createArticle(@Body('title') title, @Body() allBody) {
    allBody.slug = title;
    return allBody;
  }

  @Post()
  @UsePipes(UpperPipe)
  createMessage(@Body() message) {
    return message;
  }
}
