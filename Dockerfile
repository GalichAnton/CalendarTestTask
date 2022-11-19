FROM node:alpine


WORKDIR /app

EXPOSE 6006

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . ./

CMD ["npm", "run", "storybook"]

