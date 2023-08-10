FROM node:20-alpine as build

WORKDIR /app
COPY . /app

# BUILD  sharp 向けに C# のコンパイラをインストールしてから npm 側の処理を開始する
RUN apk add --no-cache --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing libtool automake autoconf nasm vips-dev fftw-dev gcc g++ make libc6-compat && \
    npm ci && \
    npm run build

RUN rm -rf src && rm package-lock.json

EXPOSE 3000

CMD [ "npm", "run", "start" ]