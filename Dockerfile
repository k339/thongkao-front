FROM nginx:1.18.0-alpine
COPY ./nginxfile/default.conf /etc/nginx/conf.d
ENV TZ=Asia/Bangkok
COPY ./dist/thongkao-front/. /usr/share/nginx/html
