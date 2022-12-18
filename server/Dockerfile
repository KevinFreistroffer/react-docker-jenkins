FROM node:18

WORKDIR /Users/kevin/AppData/Local/Docker/wsl/data

COPY package*.json ./

RUN npm install

EXPOSE 1337

CMD ["npm", "run", "dev"]