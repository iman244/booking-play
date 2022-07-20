import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './room.type';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private readonly RoomModel: Model<Room>) {}
  async createRoom(hotelid: string, room: Room) {
    try {
      const newRoom = await this.RoomModel.create(room);
      const hotelRooms = await this.RoomModel.findByIdAndUpdate(
        hotelid,
        {
          $push: { rooms: newRoom._id },
        },
        { new: true },
      );
      return { newRoom, hotelRooms };
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  async updateRoom(id: string, room: object) {
    try {
      const updatedRoom = await this.RoomModel.findByIdAndUpdate(id, room);
      return updatedRoom;
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteRoom(id: string) {
    try {
      await this.RoomModel.findByIdAndDelete(id);
      return 'room deleted successfully';
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  async updateRoomCapacity(id: string, dates) {
    try {
      const updatedRoom = await this.RoomModel.updateOne(
        { 'roomNumbers._id': id },
        {
          $push: {
            'roomNumbers.$.unavailableDates': dates,
          },
        },
        { new: true },
      );
      return updatedRoom;
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  async roomInformation(id: string) {
    try {
      const room = await this.RoomModel.findById(id);
      return room;
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }

  async allRoomsInformation() {
    try {
      const rooms = this.RoomModel.find();
      return rooms;
    } catch (error) {
      console.log(error);
      return new HttpException('error', HttpStatus.BAD_REQUEST);
    }
  }
}
