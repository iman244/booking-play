import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Room } from "src/room/room.type";
import { Hotel } from "./hotel.type";
const fs = require("fs");
const path = require("path");

@Injectable()
export class HotelService {
    constructor(
        @InjectModel("Hotel") private readonly HotelModel: Model<Hotel>,
        @InjectModel("Room") private readonly RoomModel: Model<Room>
    ) {}
    async createHotel(hotel: Hotel, files: Array<Express.Multer.File>) {
        try {
            const photoList = files.map((file) => {
                return {
                    data: fs.readFileSync(
                        path.join("uploads/" + file.filename)
                    ),
                    contentType: "image/*",
                };
            });
            const newHotelObject = {
                ...hotel,
                photos: photoList,
            };
            const newHotel = await this.HotelModel.create(newHotelObject);
            return newHotel;
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }

    async updateHotel(id: string, hotel) {
        try {
            const updatedHotel = await this.HotelModel.findByIdAndUpdate(
                id,
                hotel
            );
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }

    async deleteHotel(id: string) {
        try {
            await this.HotelModel.findByIdAndDelete(id);
            return `hotel ${id} deleted`;
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }

    async HotelRooms(id: string) {
        try {
            const hotel = await this.HotelModel.findById(id);
            const roomsList = await Promise.all(
                hotel.rooms.map((roomId) => {
                    const room = this.RoomModel.findById(roomId);
                    return room;
                })
            );
            return roomsList;
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }

    async HotelInformation(id: string) {
        try {
            const hotel = await this.HotelModel.findById(id);
            return hotel;
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }

    async HotelSummaries() {
        try {
            const lodging = ["hotel", "apartment", "resort", "villa", "cabin"];
            const summaries = await Promise.all(
                lodging.map((lodgerType) => {
                    const lodger = {
                        lodgerType,
                        count: this.HotelModel.countDocuments({ lodgerType }),
                    };
                    return lodger;
                })
            );
            return summaries;
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }

    async Hotels() {
        try {
            const hotels = await this.HotelModel.find();
            return hotels;
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }

    async qHotels(city: string, type: string) {
        try {
            const qHotels = await this.HotelModel.find({
                city: city,
                type: type,
            });
            return qHotels;
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }
}
