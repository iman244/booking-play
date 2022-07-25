import { Exclude } from "class-transformer";

interface DocumentResult<T> extends Document {
    _doc: T;
}

export interface hasToken extends Object {
    token: string;
}

export interface credentials {
    username: string;
    email: string;
    password: string;
}

export interface User extends DocumentResult<Object> {
    _id: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    token: string;
}

export class UserSerialized {
    _id: string;
    username: string;
    email: string;

    @Exclude()
    password: string;

    isAdmin: boolean;

    constructor(partial: Partial<UserSerialized>) {
        Object.assign(this, partial);
    }
}
