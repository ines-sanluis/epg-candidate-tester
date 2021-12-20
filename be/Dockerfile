FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 1337
CMD ["npm", "run", "start"]