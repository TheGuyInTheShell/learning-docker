# tomar una imagen como base
FROM node:19.2-alpine

# cambiar el cursor a la carpeta app
WORKDIR /app

# el destino es el WORKDIR
COPY package.json ./

# instalar dependencias durante descarga de imagen
RUN npm i

COPY app.js ./

# los CMD se ejecutan cuando termina de montarse el contenedor
CMD ["node", "app.js"]
