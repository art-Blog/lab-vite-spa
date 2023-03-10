FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:alpine as production-build
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./.nginx/spa.conf /etc/nginx/conf.d/

