FROM node:dubnium

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install strapi@alpha -g

RUN npm install

COPY . .

EXPOSE 1337

CMD [ "npm", "run", "start"]