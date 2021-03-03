FROM node:12.16.2-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i -g npm
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "start"]
