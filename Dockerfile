FROM node:18-alpine

RUN mkdir -p /apinode
WORKDIR /apinode

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

EXPOSE 4000

# Environment variables
ENV NODE_ENV production
ENV PORT 4000
ENV PUBLIC_PATH "/"

CMD ["yarn", "start"]
