import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    signup():String{
        return "User created";
    }

    login():String{
        return "login user";
    }
}
