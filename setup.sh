#!/bin/bash

# Auto-Meet Simple Setup Script

set -e

echo "🚀 Setting up Auto-Meet..."

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
    echo "⚠️  Please edit .env file with your actual API keys"
    echo "   Required: GOOGLE_API_KEY, DEEPGRAM_API_KEY, GMAIL_USER_EMAIL, GMAIL_USER_PASSWORD"
    echo ""
    echo "Press any key to continue after editing .env file..."
    read -n 1 -s
fi

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
echo "   Frontend: http://localhost:5173"
echo "   Backend API: http://localhost:3000"
echo "   Meeting Handler: http://localhost:5000"
echo ""
echo "📊 View logs:"
echo "   docker-compose logs -f"
echo ""
echo "🛑 Stop services:"
echo "   docker-compose down"
