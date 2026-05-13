# Auto-Meet: AI-Powered Meeting Assistant

Auto-Meet is a comprehensive meeting automation platform that sends an AI bot to join your virtual meetings, records them, transcribes the content, and provides intelligent summaries and insights. Built with modern web technologies, it supports Google Meet, Teams, and other video conferencing platforms.

## 🚀 Features

- **Smart Meeting Attendance**: AI bot automatically joins meetings using provided links
- **Real-time Recording**: High-quality video and audio recording with screen capture
- **AI-Powered Transcription**: Accurate speech-to-text conversion using Deepgram
- **Intelligent Summarization**: Automated meeting summaries and key highlights using Google Gemini
- **Interactive Chat**: Chat with AI about meeting content and get instant answers
- **User Management**: Secure authentication and user profiles
- **Modern UI**: Beautiful, responsive interface built with React and Tailwind CSS

## 🏗️ Architecture

The project consists of three main components:

### 1. Frontend (React + TypeScript)
- **Location**: `/website/`
- **Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Radix UI
- **Features**: 
  - Landing page with modern design
  - Dashboard for meeting management
  - Authentication (Login/Signup)
  - Meeting details and transcript viewing
  - AI chat interface

### 2. Backend API (Node.js + TypeScript)
- **Location**: `/backend/`
- **Tech Stack**: Express.js, TypeScript, Drizzle ORM, PostgreSQL
- **Features**:
  - RESTful API endpoints
  - JWT authentication
  - Database management with Drizzle ORM
  - Meeting and transcript management
  - AI integration for summarization

### 3. Meeting Handler (Python)
- **Location**: `/google-meet-record-handle/`
- **Tech Stack**: Python, Selenium, FFmpeg, Deepgram API
- **Features**:
  - Automated browser automation for joining meetings
  - Video/audio recording with FFmpeg
  - Speech-to-text transcription
  - Audio processing and conversion

## 📊 Database Schema

The application uses PostgreSQL with the following main tables:

- **users**: User accounts and authentication
- **meeting**: Meeting records and status tracking
- **transcripts**: Meeting transcript storage
- **summaries**: AI-generated meeting summaries and highlights

## 🔧 Setup Instructions

### Docker Compose Setup (Recommended)

The easiest way to get Auto-Meet running is using Docker Compose, which handles all dependencies and services automatically.

#### Prerequisites

- Docker (v20.10 or higher)
- Docker Compose (v2.0 or higher)
- Git

#### Quick Start

1. **Clone the repository:**
```bash
git clone <repository-url>
cd Auto-Meet
```

2. **Set up environment variables:**
```bash
# Copy the environment template
cp docker.env .env

# Edit the .env file with your actual API keys
nano .env
```

3. **Configure your API keys in `.env`:**
```bash
# Required API Keys
GOOGLE_API_KEY=your_gemini_api_key_here
DEEPGRAM_API_KEY=your_deepgram_api_key_here
GMAIL_USER_EMAIL=your_gmail@gmail.com
GMAIL_USER_PASSWORD=your_app_password_here

# Optional: Change JWT secret
JWT_SECRET=your_super_secret_jwt_key_change_this
```

4. **Start all services:**
```bash
# Using Make (recommended)
make start

# Or manually with docker-compose
docker-compose up --build -d
```

5. **Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- Meeting Handler: http://localhost:5000

#### Docker Management Commands

**Using Make (Recommended):**
```bash
# Quick start
make start

# View logs
make logs

# Stop services
make down

# Clean up everything
make clean

# Show service status
make status

# Restart services
make restart
```

**Using Docker Compose directly:**
```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Clean up everything
docker-compose down -v --remove-orphans

# Restart a specific service
docker-compose restart backend
```

### Option 2: Manual Setup

If you prefer to run services manually without Docker:

#### Prerequisites

- Node.js (v18 or higher)
- Python 3.8+
- PostgreSQL database
- FFmpeg installed on your system
- Chrome/Chromium browser for Selenium automation

#### 1. Database Setup

1. Install PostgreSQL and create a new database:
```sql
CREATE DATABASE automeet;
```

2. Update the database URL in your environment variables:
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/automeet
```

#### 2. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables in `.env`:
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/automeet
JWT_SECRET=your_jwt_secret_here
GOOGLE_API_KEY=your_gemini_api_key_here
PORT=3000
```

4. Run database migrations:
```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

5. Start the backend server:
```bash
npm run dev
# or
bun run dev
```

The backend will be available at `http://localhost:3000`

#### 3. Frontend Setup

1. Navigate to the website directory:
```bash
cd website
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

The frontend will be available at `http://localhost:5173`

#### 4. Meeting Handler Setup

1. Navigate to the meeting handler directory:
```bash
cd google-meet-record-handle
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables in `.env`:
```bash
GMAIL_USER_EMAIL=your_gmail@gmail.com
GMAIL_USER_PASSWORD=your_app_password
DEEPGRAM_API_KEY=your_deepgram_api_key
BACKEND_URL=http://localhost:3000
GEMINI_API_KEY=your_gemini_api_key
DURATION_IN_MINUTES=15
MAX_WAITING_TIME_IN_MINUTES=5
```

5. Download and extract the Vosk model:
```bash
# The model is already included in the repository
# If you need to download it separately:
wget https://alphacephei.com/vosk/models/vosk-model-small-en-us-0.15.zip
unzip vosk-model-small-en-us-0.15.zip
```

6. Start the meeting handler server:
```bash
python server.py
```

The meeting handler will be available at `http://localhost:5000`

## 🔑 API Keys Required

### 1. Google Gemini API
- Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Used for AI-powered summarization and chat functionality

### 2. Deepgram API
- Sign up at [Deepgram](https://deepgram.com/)
- Used for high-quality speech-to-text transcription

### 3. Gmail App Password
- Enable 2-factor authentication on your Google account
- Generate an app password for the meeting bot
- Used for automated Google Meet login

## 🚀 Usage

### 1. User Registration
- Visit the landing page at `http://localhost:5173`
- Click "Start Free Trial" to sign up
- Create your account with email and password

### 2. Starting a Meeting Recording
1. Log in to your dashboard
2. Enter a Google Meet link in the "Join a Meeting" section
3. Click "Send Bot to Join"
4. The AI bot will automatically join the meeting and start recording

### 3. Processing Recordings
1. After the meeting ends, go to your dashboard
2. Find the pending meeting in the "Pending Transcripts" section
3. Click "Process" to transcribe and summarize the recording
4. View the transcript and summary in the meeting details

### 4. AI Chat
- Use the chat feature to ask questions about your meeting content
- Get instant answers based on the transcribed meeting data

## 📁 Project Structure

```
Auto-Meet/
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── routes/         # API routes
│   │   ├── schema/         # Database schema
│   │   └── app.ts          # Main server file
│   ├── drizzle/            # Database migrations
│   └── package.json
├── website/                # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── App.tsx        # Main app component
│   └── package.json
├── google-meet-record-handle/  # Python meeting handler
│   ├── convert/           # Audio processing modules
│   ├── gmeet.py          # Main meeting automation script
│   ├── server.py         # Flask API server
│   └── requirements.txt
└── README.md
```

## 🔄 Workflow

1. **Meeting Creation**: User provides meeting link through the frontend
2. **Bot Deployment**: Python script launches Chrome browser and joins the meeting
3. **Recording**: FFmpeg records video and audio for the specified duration
4. **Processing**: Video is converted to audio, then transcribed using Deepgram
5. **AI Analysis**: Transcript is sent to backend and processed with Gemini AI
6. **Storage**: Meeting data, transcript, and summary are stored in PostgreSQL
7. **User Access**: User can view transcripts, summaries, and chat with AI about the meeting

## 🛠️ Development

### Running in Development Mode

1. Start all three services:
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd website && npm run dev

# Terminal 3 - Meeting Handler
cd google-meet-record-handle && python server.py
```

### Database Migrations

When making schema changes:
```bash
cd backend
npx drizzle-kit generate
npx drizzle-kit migrate
```

### Environment Variables

Make sure to set up all required environment variables in each service:

**Backend (.env)**:
- `DATABASE_URL`
- `JWT_SECRET`
- `GOOGLE_API_KEY`

**Meeting Handler (.env)**:
- `GMAIL_USER_EMAIL`
- `GMAIL_USER_PASSWORD`
- `DEEPGRAM_API_KEY`
- `BACKEND_URL`
- `GEMINI_API_KEY`

## 🐳 Docker Support

Auto-Meet includes Docker support for easy setup and development.

### Services Included

- **PostgreSQL** - Database with automatic initialization
- **Backend** - Node.js API server with Drizzle ORM
- **Frontend** - React application with hot reload
- **Meeting Handler** - Python service with Selenium automation

### Docker Volumes

The following volumes are created for data persistence:
- `postgres_data` - Database data
- `meeting_recordings` - Recorded meeting files
- `meeting_screenshots` - Screenshots from meetings
- `meeting_audios` - Converted audio files
- `meeting_transcripts` - Transcript files
- `meeting_summaries` - AI-generated summaries

### Quick Docker Commands

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up --build -d

# Clean up everything
docker-compose down -v --remove-orphans
```

### Development Features

- **Hot Reload**: Frontend and backend support live code changes
- **Volume Mounts**: Source code is mounted for instant updates
- **Easy Debugging**: Access container logs and shells easily
- **Simple Management**: Use Make commands for common tasks

## 🔒 Security Considerations

- All API endpoints are protected with JWT authentication
- User passwords are hashed using bcrypt
- Meeting recordings are stored locally and can be configured for secure storage
- Environment variables are used for sensitive configuration

## 📝 API Documentation

### Backend Endpoints

- `POST /auth/signup` - User registration
- `POST /auth/login` - User authentication
- `POST /meeting/create-pending` - Create pending meeting
- `GET /meeting/getMeeting` - Get user meetings
- `POST /meeting/uploadTranscript` - Upload meeting transcript
- `POST /meeting/getTranscript` - Get meeting transcript
- `POST /meeting/getSummary` - Get meeting summary
- `POST /meeting/chatWithAI` - Chat with AI about meeting

### Meeting Handler Endpoints

- `POST /record_meeting` - Start meeting recording
- `GET /recording_status/<id>` - Check recording status
- `POST /process_recording/<id>` - Process recorded meeting
- `POST /summarize/<id>` - Generate meeting summary

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Chrome/Selenium Issues**: Ensure Chrome is installed and up to date
2. **Audio Recording Issues**: Check PulseAudio configuration on Linux
3. **Database Connection**: Verify PostgreSQL is running and credentials are correct
4. **API Key Issues**: Ensure all required API keys are properly set in environment variables

### Docker-Specific Issues

1. **Container Won't Start**:
   ```bash
   # Check logs
   docker-compose logs [service-name]
   
   # Rebuild containers
   docker-compose up --build --force-recreate
   ```

2. **Database Connection Issues**:
   ```bash
   # Check if PostgreSQL is ready
   docker-compose exec postgres pg_isready -U automeet_user -d automeet
   
   # Reset database
   docker-compose down -v
   docker-compose up -d postgres
   ```

3. **Meeting Handler Audio Issues**:
   ```bash
   # Check if audio devices are available
   docker-compose exec meeting-handler ls -la /dev/snd/
   
   # Restart with privileged mode
   docker-compose restart meeting-handler
   ```

4. **Port Conflicts**:
   ```bash
   # Check what's using the ports
   netstat -tulpn | grep :80
   netstat -tulpn | grep :3000
   netstat -tulpn | grep :5000
   
   # Change ports in docker-compose.yml if needed
   ```

5. **Permission Issues**:
   ```bash
   # Fix script permissions
   chmod +x scripts/*.sh
   
   # Fix volume permissions
   sudo chown -R $USER:$USER data/
   ```

6. **Out of Memory Issues**:
   ```bash
   # Increase Docker memory limit
   # In Docker Desktop: Settings > Resources > Memory
   
   # Or reduce resource usage
   docker-compose down
   docker system prune -a
   ```

### Development Issues

1. **Hot Reload Not Working**:
   - Check volume mounts in the compose file
   - Restart the containers: `docker-compose restart`
   - Ensure source code is properly mounted

2. **API Connection Issues**:
   - Verify environment variables are set correctly
   - Check if services are running: `docker-compose ps`
   - Test API endpoints directly

### Support

For issues and questions, please open an issue on the GitHub repository.

---

**Auto-Meet** - Your AI-powered meeting sidekick for smarter collaboration! 🤖✨