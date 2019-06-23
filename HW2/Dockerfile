FROM node:12.4.0-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN yarn install --production
RUN yarn global add serve
RUN yarn build

EXPOSE 5000
CMD serve -s build -l 5000
