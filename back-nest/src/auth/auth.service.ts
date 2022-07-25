import { HttpException, HttpStatus, Injectable, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Response } from "express";
import { Model } from "mongoose";
import { credentials, hasToken, User } from "src/user/users.type";
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

@Injectable()
export class AuthService {
    constructor(@InjectModel("User") private readonly UserModel: Model<User>) {}
    async register(body: credentials): Promise<Object> {
        try {
            const { password, ...otherCredentials } = body;
            const user = await this.UserModel.create({
                ...otherCredentials,
                password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC),
            });
            return user;
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }

    async login(body: credentials) {
        try {
            const { username, password, email } = body;
            const user = await this.UserModel.findOne({ username });
            if (user) {
                let userPassword = CryptoJS.AES.decrypt(
                    user.password,
                    process.env.PASS_SEC
                ).toString(CryptoJS.enc.Utf8);
                if (userPassword === password) {
                    const token = jwt.sign(
                        {
                            id: user._id,
                            isAdmin: user.isAdmin,
                        },
                        process.env.PASS_JWT,
                        { expiresIn: 60 * 60 }
                    );
                    return { user: user._doc, token };
                } else {
                    return new HttpException(
                        "wrong credentials",
                        HttpStatus.BAD_REQUEST
                    );
                }
            } else {
                return new HttpException(
                    "wrong credentials",
                    HttpStatus.BAD_REQUEST
                );
            }
        } catch (error) {
            console.log(error);
            return new HttpException("error", HttpStatus.BAD_REQUEST);
        }
    }
}
