import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Post,
    Res,
    UseInterceptors,
} from "@nestjs/common";
import { Response } from "express";
import { credentials, UserSerialized } from "src/user/users.type";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Post("register")
    async register(@Body() body: credentials) {
        const user = await this.AuthService.register(body);
        if (!(user instanceof Error)) {
            return new UserSerialized(user);
        } else {
            return user;
        }
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post("login")
    async login(
        @Body() body: credentials,
        @Res({ passthrough: true }) response: Response
    ) {
        const data = await this.AuthService.login(body);
        if (!(data instanceof Error)) {
            response.cookie("access_token", data.token, {
                maxAge: 900000,
                httpOnly: true,
                sameSite: "none",
                secure: true,
            });
            return new UserSerialized(data.user);
        } else {
            return data;
        }
    }
}
