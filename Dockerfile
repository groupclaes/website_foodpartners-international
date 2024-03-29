#############
### build ###
#############

# base image
FROM --platform=linux/amd64 groupclaes/npm AS build
LABEL stage=build

# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
ENV NODE_ENV test
RUN npm i

# add app
COPY . /app

# run tests
# RUN ng test --watch=false
# RUN ng e2e --port 4202

# generate build
ENV NODE_ENV production
RUN npm run build:ssr

############
### prod ###
############

# base image
FROM --platform=linux/amd64 groupclaes/node AS release

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /app/dist

WORKDIR /app
CMD node dist/server/main.js