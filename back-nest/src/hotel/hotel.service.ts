import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel } from './hotel.type';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel('Hotel') private readonly HotelModel: Model<Hotel>,
  ) {}
  async createHotel(id: string, hotel: Hotel) {
    try {
      const newHotel = await this.HotelModel.create(hotel);
      return newHotel;
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  async updateHotel(id: string, hotel) {
    try {
      const updatedHotel = await this.HotelModel.findByIdAndUpdate(id, hotel);
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  deleteHotel(id: string) {
    return `delete hotel ${id}`;
  }

  HotelRooms(id: string) {
    return `hotel ${id} rooms capacity`;
  }

  HotelInformation(id: string) {
    return `hotel ${id} information`;
  }

  qHotels(city: string, type: string) {
    return `return ${type} hotels in ${city}`;
  }
}
