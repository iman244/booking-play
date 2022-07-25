import { MiddlewareConsumer, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HotelSchema } from "./hotel.model";
import { HotelController } from "./hotel.controller";
import { HotelService } from "./hotel.service";
import { RoomSchema } from "src/room/room.model";
import { verifyAdminMiddleware } from "src/middlewares/verifyAdmin.middleware";

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
export class HotelModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(verifyAdminMiddleware).forRoutes("hotels/admin/*");
    }
}
