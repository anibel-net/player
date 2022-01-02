FROM node:lts-slim

WORKDIR /
ADD . .

RUN npm i; npm run buld

CMD npm start