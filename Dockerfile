# Use base image
FROM node:16

# Set the working directory path
WORKDIR /app

# Copy dependencies from package file.
COPY package*.json ./

# Run shell command to install dependencies
RUN npm install

# Copy source code to the container.
COPY . .

# Configure environment variables
ENV PORT=8080

# Expose port of the container
EXPOSE 8080

# Main command that runs the container
CMD [ "npm", "start" ]
