FROM node:10.14.0-alpine

WORKDIR /usr/src/node-server/

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]