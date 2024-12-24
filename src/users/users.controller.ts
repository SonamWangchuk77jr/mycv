import {
  Body,
  Controller,
  Post,
  Patch,
  Param,
  Query,
  Get,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsersDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-users.dto';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUsers(@Body() body: CreateUsersDto) {
    this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  async finduser(@Param('id') id: string) {
    const user = await this.userService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found!');
    }
    return user;
  }

  @Get()
  findAlluser(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
