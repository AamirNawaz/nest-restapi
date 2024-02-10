import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupUserDto } from './dto/signup.user.dto';
import { LoginUserDto } from './dto/Login.user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  async signup(@Body() signupUserDto: SignupUserDto) {
    return this.userService.signup(signupUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }
}
