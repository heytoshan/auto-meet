#!/bin/bash

# Auto-Meet Docker Setup Script

set -e

echo "🚀 Setting up Auto-Meet with Docker Compose..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp docker.env .env
    echo "⚠️  Please edit .env file with your actual API keys and credentials"
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p nginx/ssl
mkdir -p data/postgres
mkdir -p data/redis

# Set permissions
echo "🔐 Setting permissions..."
chmod +x scripts/*.sh

# Build and start services
echo "🔨 Building and starting services..."
docker-compose up --build -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 30

# Check service health
echo "🔍 Checking service health..."
docker-compose ps

echo "✅ Auto-Meet is now running!"
echo ""
echo "🌐 Access the application:"
echo "   Frontend: http://localhost"
echo "   Backend API: http://localhost:3000"
echo "   Meeting Handler: http://localhost:5000"
echo ""
echo "📊 View logs:"
echo "   docker-compose logs -f"
echo ""
echo "🛑 Stop services:"
echo "   docker-compose down"
