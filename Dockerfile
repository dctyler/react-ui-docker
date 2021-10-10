FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
#Docker was not reconizing reach scripts so added to install before building the app
RUN npm install react-scripts -g --silent
RUN npm install --production  && mv node_modules ../
#RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
#docker run -p 3000:3000 to run the port mapping 
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]