# dependecies
# toma una imagen como base
FROM node:19.2-alpine as deps
# cambiar el cursor a la carpeta app
WORKDIR /app
# el destino es el WORKDIR
COPY package.json ./
# instalar dependencias durante descarga de imagen
RUN npm i


# dependecies production
FROM node:19.2-alpine as prod-dep
WORKDIR /app
COPY package.json ./
RUN npm i --prod


# builder
FROM node:19.2-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test


# runner 
FROM node:19.2-alpine as runner
WORKDIR /app
COPY --from=prod-dep /app/node_modules ./node_modules
# copia toda el contenido del la imagen en la carpeta destino /app
COPY app.js ./
COPY tasks ./tasks

# los CMD se ejecutan cuando termina de montarse el contenedor
CMD ["node", "app.js"]
