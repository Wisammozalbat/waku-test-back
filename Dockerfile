FROM node:12.2.0-alpine
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
RUN npm install react-scripts -g --silent
RUN npm build
COPY . .
EXPOSE 4000
CMD ["node", "build/src/index.js"]