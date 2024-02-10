import { Injectable } from '@nestjs/common';
import { SignupUserDto } from './dto/signup.user.dto';
import { LoginUserDto } from './dto/Login.user.dto';

@Injectable()
export class UsersService {
    
    signup(signupUserDto:SignupUserDto){
        return "User created";
    }

    login(loginUserDto:LoginUserDto){
        return "login user";
    }
}
