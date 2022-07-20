import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from './room.type';

@Controller('rooms')
export class RoomController {
  constructor(private readonly RoomService: RoomService) {}
  @Post('admin/:hotelid')
  createRoom(@Param('hotelid') hotelid: string, @Body() room: Room) {
    return this.RoomService.createRoom(hotelid, room);
  }

  @Put('admin/:id')
  updateRoom(@Param('id') id: string, @Body() room) {
    return this.RoomService.updateRoom(id, room);
  }

  @Delete('admin/:id')
  deleteRoom(@Param('id') id: string) {
    return this.RoomService.deleteRoom(id);
  }

  @Put(':id')
  updateRoomCapacity(@Param('id') id: string, @Body('dates') dates) {
    return this.RoomService.updateRoomCapacity(id, dates);
  }

  @Get(':id')
  roomInformation(@Param('id') id: string) {
    return this.RoomService.roomInformation(id);
  }

  @Get()
  allRoomsInformation() {
    return this.RoomService.allRoomsInformation();
  }
}
