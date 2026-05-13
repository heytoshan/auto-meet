#!/bin/bash

# Auto-Meet Docker Cleanup Script

set -e

echo "🧹 Cleaning up Auto-Meet Docker environment..."

# Stop and remove containers
echo "🛑 Stopping and removing containers..."
docker-compose down -v

# Remove unused images
echo "🗑️  Removing unused images..."
docker image prune -f

# Remove unused volumes
echo "🗑️  Removing unused volumes..."
docker volume prune -f

# Remove unused networks
echo "🗑️  Removing unused networks..."
docker network prune -f

echo "✅ Cleanup completed!"
echo ""
echo "To start fresh:"
echo "   ./scripts/docker-setup.sh"
