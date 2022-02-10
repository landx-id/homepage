FROM --platform=linux/x86_64 node:16.14.0-slim

RUN apt-get update && apt-get install -y nginx

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

COPY ./docker/default.conf /etc/nginx/sites-available/default

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]