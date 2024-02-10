import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Post("signup")
    signup():String{
        return this.userService.signup();
    }

    @Post("login")
    login():String{
        return this.userService.login();
    }

    
}
