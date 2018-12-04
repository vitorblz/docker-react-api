# base image
FROM node:10.14.0-alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install

# install and cache app dependencies
COPY . .
RUN npm install react-scripts@1.1.1 -g --silent

EXPOSE 3000

# start app
CMD ["npm", "start"]