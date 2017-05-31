FROM mhart/alpine-node:8

WORKDIR /src
ADD . .

RUN apk add --no-cache make gcc g++ python

RUN npm install

CMD ["node", "server.js"]
