# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the app when the container starts
CMD ["npm", "start"]