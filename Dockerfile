FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

FROM node:8
WORKDIR /user/src/app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "app.js"]