# Create image based on the official Node image from dockerhub
FROM node:16


# Create app directory
WORKDIR /usr/src/app  

# Copy dependency definitions
COPY  package*.json ./

# Install dependencies
RUN npm ci
 
# Get all the code needed to run the app
COPY . .

WORKDIR /usr/src/app/frontend
RUN npm ci
RUN npm run build

WORKDIR /usr/src/app
RUN cp -r ./frontend/dist public

 
ENV PORT 8000

# Expose the port the app runs in
EXPOSE 8000
 
# Serve the app
CMD ["npm", "start"]