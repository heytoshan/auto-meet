#!/bin/bash

# Auto-Meet Development Docker Script

set -e

echo "🚀 Starting Auto-Meet in development mode..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp docker.env .env
    echo "⚠️  Please edit .env file with your actual API keys and credentials"
    echo "Press any key to continue after editing .env file..."
    read -n 1 -s
fi

# Start development services
echo "🔨 Starting development services..."
docker-compose -f docker-compose.dev.yml up --build

echo "✅ Development environment is running!"
echo ""
echo "🌐 Access the application:"
echo "   Frontend: http://localhost:5173"
echo "   Backend API: http://localhost:3000"
echo "   Meeting Handler: http://localhost:5000"
