import { Injectable } from '@nestjs/common';
import { SignupUserDto } from './dto/signup.user.dto';
import { LoginUserDto } from './dto/Login.user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { LoginUserResponseDto } from './dto/login.user.response.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signup(signupUserDto: SignupUserDto): Promise<SignupUserDto> {
    try {
        return await this.userRepository.save(signupUserDto);
    } catch (error) {
        throw new Error("Failed to saving the user!")
    }
  }

  login(loginUserDto: LoginUserDto): LoginUserResponseDto {
    try {
        let user = this.userRepository.save(loginUserDto);
        const TokenResponseDtoObj = new LoginUserResponseDto();
    
        //will create token later with jwt here
        let token = loginUserDto.email;
        TokenResponseDtoObj.token = token;
        return TokenResponseDtoObj;    
    } catch (error) {
        throw new Error("Incorrect email or password!")
    }
    
  }
}
