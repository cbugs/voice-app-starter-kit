FROM node:dubnium

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g jovo-cli

RUN npm install --save jovo-framework

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "jovo", "run", "--watch" ]