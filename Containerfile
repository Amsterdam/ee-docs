FROM node:24-alpine

WORKDIR /app

COPY entrypoint.sh /

RUN apk add git openssh

RUN git config --global --add safe.directory /app

ENTRYPOINT ["/entrypoint.sh"]
