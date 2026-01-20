// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando Seed...');

  //Permissões (Níveis exigidos [cite: 166-172])
  const roles = [
    { name: 'ADMIN', description: 'Permissão total: gerencia usuários e artigos.' },
    { name: 'EDITOR', description: 'Gerencia artigos, mas não usuários.' },
    { name: 'READER', description: 'Apenas leitura de artigos.' },
  ];

  for (const role of roles) {
    await prisma.permission.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
  }
  console.log('✅ Permissões criadas.');

  //Usuário Root 
  const adminRole = await prisma.permission.findUnique({ where: { name: 'ADMIN' } });
  
  if (adminRole) {
    const passwordHash = await bcrypt.hash('root123', 10);

    await prisma.user.upsert({
      where: { email: 'root@sistema.com' },
      update: {},
      create: {
        name: 'Super Admin',
        email: 'root@sistema.com',
        password: passwordHash,
        permissionId: adminRole.id,
      },
    });
    console.log('✅ Usuário Root criado (User: root@sistema.com / Pass: root123).');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });