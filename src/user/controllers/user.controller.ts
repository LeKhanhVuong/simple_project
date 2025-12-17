import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UpdateUserRequestDto } from '../dto/requests/update-user.request.dto';
import { CreateUserRequestDto } from '../dto/requests/create-user.request.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserRequestDto: CreateUserRequestDto) {
    return this.userService.create(createUserRequestDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRequestDto: UpdateUserRequestDto) {
    return this.userService.update(+id, updateUserRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
