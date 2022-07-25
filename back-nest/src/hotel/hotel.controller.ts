import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UploadedFiles,
    UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { HotelService } from "./hotel.service";
import { Hotel } from "./hotel.type";

@Controller("hotels")
export class HotelController {
    constructor(private readonly HotelService: HotelService) {}

    @Post("admin/create")
    @UseInterceptors(
        FilesInterceptor("photos", 10, {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    cb(null, "uploads");
                },
                filename: (req, file, cb) => {
                    cb(null, file.originalname);
                },
            }),
        })
    )
    async createHotel(
        @Body() hotel: Hotel,
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        console.log("reached create hotel controller");
        console.log(files);
        console.log(hotel);
        let newHotel = await this.HotelService.createHotel(hotel, files);
        return "new hotel added successfully";
    }

    @Put("admin/:id")
    updateHotel(@Param("id") id: string, @Body() hotel) {
        return `update hotel ${id}`;
    }

    @Delete("admin/:id")
    deleteHotel(@Param("id") id: string) {
        return `delete hotel ${id}`;
    }

    @Get("rooms/:id")
    HotelRooms(@Param("id") id: string) {
        return `hotel ${id} rooms capacity`;
    }

    @Get(":id")
    HotelInformation(@Param("id") id: string) {
        return `hotel ${id} information`;
    }

    @Get("summary")
    HotelSummaries() {
        return this.HotelService.HotelSummaries();
    }

    @Get()
    qHotels(@Query("city") city: string, @Query("type") type: string) {
        return `return ${type} hotels in ${city}`;
    }
}
