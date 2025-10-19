FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY . .
RUN npm run build

EXPOSE 3939

CMD ["npm", "start"]