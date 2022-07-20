import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './room.model';
import { RoomController } from './room.controller';
import { verifyAdminMiddleware } from 'src/middlewares/verifyAdmin.middleware';
import { RoomService } from './room.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyAdminMiddleware).forRoutes('rooms/admin/*');
  }
}
