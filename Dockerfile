FROM node:20-alpine as build-context

WORKDIR /usr/src/app
COPY . .

ENV NODE_ENV="production"
ENV BASE_PROJECT="/"
ENV DIST_FOLDER="dist"
EXPOSE 80
RUN npm ci
RUN npm run build




FROM nginx:1.26-alpine AS nginx-server
COPY --from=build-context /usr/src/app/dist /usr/share/nginx/html
COPY --from=build-context /usr/src/app/nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
