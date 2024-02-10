import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupUserDto } from './dto/signup.user.dto';
import { LoginUserDto } from './dto/Login.user.dto';
import { UserGuard } from './guard/user.guard';

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

  @UseGuards(UserGuard)
  @Get()
  async getAllUsers(){
    return this.userService.getAllUsers();
  }

  @Get(":id")
  async getSingleUser(@Param('id')id :Number ){
    return this.userService.getSingleUser(id);
  }

}
