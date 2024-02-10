import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { SignupUserDto } from './dto/signup.user.dto';
import { LoginUserDto } from './dto/Login.user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { LoginUserResponseDto } from './dto/login.user.response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService :JwtService
  ) {}

  async signup(signupUserDto: SignupUserDto): Promise<SignupUserDto> {
    try {
        return await this.userRepository.save(signupUserDto);
    } catch (error) {
        throw new Error("Failed to saving the user!")
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginUserResponseDto> {
    try {
        const user = await this.userRepository.findOneBy({email:loginUserDto.email});
        if(user?.password !==loginUserDto.password){
            throw new UnauthorizedException()
        }

        const TokenResponseDtoObj = new LoginUserResponseDto();       
        const payload = {sub:user.id,email:user.email}
        const accessToken = await this.jwtService.signAsync(payload);
        TokenResponseDtoObj.token = accessToken;
        return TokenResponseDtoObj;    
    } catch (error) {
        Logger.debug(error)
        throw new Error(error)
    }
    
  }
}
