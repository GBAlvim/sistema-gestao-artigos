import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { permission: true },
    });
  }

  async update(id: number, data: any) {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return this.prisma.user.update({
    where: { id },
    data,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true, permission: true },
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
  
}