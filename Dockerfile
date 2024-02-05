FROM node:16-alpine as builder

WORKDIR /

COPY . .

RUN apk update && \
    apk upgrade --no-cache && \
    npm install --force && \
    npm cache clean --force && \
    rm -rf /tmp/* /var/tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp

RUN npm run build --no-cache

FROM nginx:latest

COPY --from=builder /public /var/html

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
