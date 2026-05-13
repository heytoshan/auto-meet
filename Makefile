# Auto-Meet Makefile

.PHONY: help build up down logs clean setup start restart status

# Default target
help:
	@echo "Auto-Meet Docker Management"
	@echo ""
	@echo "Available commands:"
	@echo "  setup     - Initial setup with environment configuration"
	@echo "  build     - Build all Docker images"
	@echo "  up        - Start all services"
	@echo "  down      - Stop all services"
	@echo "  logs      - View logs from all services"
	@echo "  clean     - Clean up containers, images, and volumes"
	@echo "  restart   - Restart all services"
	@echo "  status    - Show status of all services"
	@echo "  start     - Quick start (setup + up)"

# Initial setup
setup:
	@echo "🚀 Setting up Auto-Meet..."
	@if [ ! -f .env ]; then \
		cp docker.env .env; \
		echo "📝 Created .env file from template"; \
		echo "⚠️  Please edit .env file with your actual API keys"; \
	fi
	@chmod +x scripts/*.sh
	@echo "✅ Setup complete!"

# Build all images
build:
	@echo "🔨 Building Docker images..."
	docker-compose build

# Start all services
up:
	@echo "🚀 Starting Auto-Meet services..."
	docker-compose up -d

# Stop all services
down:
	@echo "🛑 Stopping Auto-Meet services..."
	docker-compose down

# View logs
logs:
	@echo "📋 Viewing logs..."
	docker-compose logs -f

# Clean up everything
clean:
	@echo "🧹 Cleaning up Docker resources..."
	docker-compose down -v --remove-orphans
	docker system prune -f
	docker volume prune -f

# Restart services
restart:
	@echo "🔄 Restarting services..."
	docker-compose restart

# Show status
status:
	@echo "📊 Service status:"
	docker-compose ps

# Quick start (setup + up)
start: setup up
	@echo "✅ Auto-Meet is running!"
	@echo "🌐 Frontend: http://localhost:5173"
	@echo "🔧 Backend: http://localhost:3000"
	@echo "🤖 Meeting Handler: http://localhost:5000"

# Database operations
db-migrate:
	@echo "🗄️  Running database migrations..."
	docker-compose exec backend npx drizzle-kit migrate

db-reset:
	@echo "🗄️  Resetting database..."
	docker-compose down -v
	docker-compose up -d postgres
	@sleep 10
	docker-compose exec backend npx drizzle-kit migrate

# Service-specific commands
backend-logs:
	docker-compose logs -f backend

frontend-logs:
	docker-compose logs -f frontend

meeting-handler-logs:
	docker-compose logs -f meeting-handler

# Shell access
backend-shell:
	docker-compose exec backend sh

meeting-handler-shell:
	docker-compose exec meeting-handler bash
