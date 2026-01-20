#build
FROM node:18-alpine AS builder
WORKDIR /app

#arq. dependência
COPY package*.json ./
COPY prisma ./prisma/

#inst. dependência 
RUN npm install

# Copia o código fonte
COPY . .

# Gera o Prisma Client e faz o Build da aplicação
RUN npx prisma generate
RUN npm run build

#produção
FROM node:18-alpine

WORKDIR /app

# Copia apenas as dependências de produção e os arquivos buildados
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

#Expõe a porta
EXPOSE 3000

#iniciar (Roda as migrations antes de subir)
CMD [  "npm", "run", "start:prod" ]