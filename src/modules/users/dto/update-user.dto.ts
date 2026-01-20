import { PartialType } from '@nestjs/swagger'; // Use do swagger para manter a doc
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}