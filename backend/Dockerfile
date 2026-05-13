# Backend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lock* ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Generate Prisma client and run migrations
RUN npx drizzle-kit generate

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
