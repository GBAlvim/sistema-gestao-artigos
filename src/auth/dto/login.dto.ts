import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'root@sistema.com', description: 'O e-mail do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'root123', description: 'A senha do usuário' })
  @IsNotEmpty()
  @IsString()
  password: string;
}