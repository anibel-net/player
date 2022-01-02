FROM node:lts-slim

EXPOSE 3000

WORKDIR /
ADD . .

RUN npm i; npm run buld

CMD npm start