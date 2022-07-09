import { PositiveIntPipe } from './../common/pipes/positiveInt.pipe';
import { CatsService } from './cats.service';
import { getSystemErrorMap } from 'util';
import {
  Controller, Delete, Get, HttpException, Param, Patch, Post, Put, UseFilters, ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';


@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly CatsService: CatsService) { }

  @Get('')
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    // throw new HttpException({ success: false, message: 'api is broken' }, 401);
    // throw new HttpException('api broken', 401);
    // return 'all cat';

    console.log("hello controller");
    return { cats: "get all cat api"}

  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    console.log((typeof id));
    console.log(id);
    return 'one cat';
  }



  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return ' xx update';
  }
  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}