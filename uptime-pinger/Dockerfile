# Use the official Node.js image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app will run on (optional here, since it's a script)
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
