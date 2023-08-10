# tomar una imagen como base
FROM --platform=linux/amd64 node:19.2-alpine

# cambiar el cursor a la carpeta app
WORKDIR /app

# el destino es el WORKDIR
COPY package.json ./

# instalar dependencias durante descarga de imagen
RUN npm i

COPY app.js ./

# copia toda el contenido del la imagen en la carpeta destino /app
COPY . .

RUN npm run test

# eliminar carpeta tests y node_modules
RUN rm -rf tests && rm -rf node_modules

# instalar solo los modulos de producion
RUN npm i --prod


# los CMD se ejecutan cuando termina de montarse el contenedor
CMD ["node", "app.js"]
