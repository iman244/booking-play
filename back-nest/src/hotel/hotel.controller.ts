import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { get } from 'http';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.type';

@Controller('hotels')
export class HotelController {
  constructor(private readonly HotelService: HotelService) {}
  @Post('admin/:id')
  createHotel(@Body() hotel: Hotel) {
    return `create hotel ${hotel}`;
  }

  @Put('admin/:id')
  updateHotel(@Param('id') id: string, @Body() hotel) {
    return `update hotel ${id}`;
  }

  @Delete('admin/:id')
  deleteHotel(@Param('id') id: string) {
    return `delete hotel ${id}`;
  }

  @Get('rooms/:id')
  HotelRooms(@Param('id') id: string) {
    return `hotel ${id} rooms capacity`;
  }

  @Get(':id')
  HotelInformation(@Param('id') id: string) {
    return `hotel ${id} information`;
  }

  @Get()
  qHotels(@Query('city') city: string, @Query('type') type: string) {
    return `return ${type} hotels in ${city}`;
  }
}
