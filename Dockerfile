FROM node:20-alpine

MAINTAINER Artem

RUN mkdir /app
WORKDIR /app

COPY ./backend/package.json /app

RUN npm i





