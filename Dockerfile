FROM node:lts-slim

EXPOSE 3000

WORKDIR /
ADD . .

RUN npm i; npm run build

CMD npm start