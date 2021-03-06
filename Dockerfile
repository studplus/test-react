# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent && npm install -g npm@7
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm update \
    && npm -v \
    && node -v

# add app
COPY . ./

# start app
CMD ["npm", "start"]
