import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats';
import { createCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  findCount(): Promise<number> {
    const count = this.catsService.findCount();
    console.log(count);
    return count;
  }

  @Post()
  create(@Body() createCatDto: createCatDto): Promise<Cat> {
    const newCat = this.catsService.create(createCatDto);
    console.log(newCat);
    return newCat;
  }
}
