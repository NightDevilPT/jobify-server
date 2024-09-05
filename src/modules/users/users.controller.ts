import { Controller, Post, Body, Param, Put } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './interface/user.response';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto'; // Import DTO

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreateUserDto })
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @Put('verify/:token')
  @ApiOperation({ summary: 'Verify a user using a token' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully verified.',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'User not found or invalid token.' })
  async verifyUser(@Param('token') token: string) {
    return this.usersService.verifyUser(token);
  }

  @Post('forget-password')
  @ApiOperation({ summary: 'Initiate password reset process' })
  @ApiResponse({
    status: 200,
    description: 'Password reset link sent to email.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiBody({ type: ForgetPasswordDto })
  async forgetPassword(@Body() forgetPasswordDto: ForgetPasswordDto) {
    return this.usersService.forgetPassword(forgetPasswordDto.email);
  }

  @Put('update-password/:token')
  @ApiOperation({ summary: 'Update user password using a reset token' })
  @ApiResponse({
    status: 200,
    description: 'Password successfully updated',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Invalid token or user not found.' })
  @ApiParam({ name: 'token', description: 'Password reset token' }) // Token as URL parameter
  @ApiBody({ type: UpdatePasswordDto }) // Password in the request body
  async updatePassword(
    @Param('token') token: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return this.usersService.updatePassword(token, updatePasswordDto);
  }
}
