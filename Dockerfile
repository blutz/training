FROM node:wheezy
MAINTAINER Byron Lutz <byronlutz@gmail.com>

RUN mkdir /training
ADD src /training
WORKDIR /training

RUN npm install
CMD ["npm", "start"]
