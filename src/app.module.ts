import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './modules/categories/controller/categories.controller';
import { CategoriesService } from './modules/categories/service/categories.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
