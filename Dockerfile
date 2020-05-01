FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install
# If you are building your code for production
RUN install --save-dev jest
# Bundle app source
COPY . .

EXPOSE 8222
CMD [ "node", "server.js" ]
