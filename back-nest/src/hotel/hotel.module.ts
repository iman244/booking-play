import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HotelSchema } from "./hotel.model";
import { HotelController } from "./hotel.controller";
import { HotelService } from "./hotel.service";
import { RoomSchema } from "src/room/room.model";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Hotel", schema: HotelSchema },
            { name: "Room", schema: RoomSchema },
        ]),
    ],
    controllers: [HotelController],
    providers: [HotelService],
})
export class HotelModule {}
