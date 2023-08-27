FROM node:20-slim

WORKDIR /usr/app

COPY package.json ./

RUN npm install --production
# RUN npm run build

COPY dist ./dist

EXPOSE 80
CMD ["npm", "start"]