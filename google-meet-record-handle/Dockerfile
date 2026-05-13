# Meeting Handler Dockerfile
FROM ultrafunk/undetected-chromedriver

# Set working directory
WORKDIR /app

# Create necessary directories
RUN mkdir -p /app/recordings /app/screenshots /app/audios /app/transcripts /app/summaries

# Install system dependencies
RUN apt-get update && \
    apt-get install -y \
    python3 \
    python3-pip \
    pulseaudio \
    pavucontrol \
    curl \
    sudo \
    xvfb \
    libnss3-tools \
    ffmpeg \
    xdotool \
    unzip \
    x11vnc \
    libfontconfig \
    libfreetype6 \
    xfonts-cyrillic \
    xfonts-scalable \
    fonts-liberation \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
    xterm \
    vim \
    wget \
    build-essential \
    portaudio19-dev

# Configure audio and display
RUN usermod -aG audio root && \
    adduser root pulse-access && \
    echo 'root ALL=(ALL:ALL) NOPASSWD:ALL' >> /etc/sudoers

# Set up environment variables
ENV DBUS_SESSION_BUS_ADDRESS=unix:path=/run/dbus/system_bus_socket
ENV XDG_RUNTIME_DIR=/run/user/0
ENV X_SERVER_NUM=1
ENV SCREEN_WIDTH=1920
ENV SCREEN_HEIGHT=1080
ENV SCREEN_RESOLUTION=1920x1080
ENV COLOR_DEPTH=24
ENV DISPLAY=:${X_SERVER_NUM}.0

# Set up D-Bus and PulseAudio
RUN mkdir -p /run/dbus /var/run/dbus && \
    chmod 755 /run/dbus && \
    rm -rf /var/run/pulse /var/lib/pulse /root/.config/pulse && \
    dbus-uuidgen > /var/lib/dbus/machine-id

# Install PortAudio
RUN wget http://files.portaudio.com/archives/pa_stable_v190700_20210406.tgz && \
    tar -xvf pa_stable_v190700_20210406.tgz && \
    mv portaudio /usr/src/ && \
    cd /usr/src/portaudio && \
    ./configure && make && make install && ldconfig

# Install Python dependencies
RUN pip3 install --no-cache-dir \
    pyaudio \
    click \
    opencv-python \
    Pillow \
    flask \
    flask-cors \
    gunicorn \
    vosk \
    langchain \
    langchain-google-genai \
    psycopg2-binary \
    deepgram-sdk \
    selenium \
    undetected-chromedriver \
    requests

# Copy application code
COPY . /app

# Set up PulseAudio configuration
RUN mv pulseaudio.conf /etc/dbus-1/system.d/pulseaudio.conf

# Set up X11
RUN touch /root/.Xauthority && \
    chmod 600 /root/.Xauthority

# Make entrypoint script executable
RUN chmod +x /app/entrypoint.sh

# Expose port
EXPOSE 5000

# Start the application
CMD ["/app/entrypoint.sh"]


