# Prerequisites

Before installing SDN Launch Control, ensure you have the following prerequisites installed and configured.

## System Requirements

SDN Launch Control has been successfully tested on:

- Ubuntu Desktop
- Ubuntu Server
- Windows WSL (Windows Subsystem for Linux)
- macOS

## Required Software

### Docker and Docker Compose

SDN Launch Control uses Docker for containerized deployment. You must have Docker and Docker Compose installed.

#### Install Docker

**Ubuntu/Debian:**

```bash
# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install -y ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Set up the repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

**macOS:**

```bash
# Install using Homebrew
brew install --cask docker
```

**Windows WSL:**

Follow the [Docker Desktop for WSL 2 installation guide](https://docs.docker.com/desktop/wsl/).

#### Verify Installation

```bash
docker --version
docker compose version
```

### Network Access

Ensure your server has:

- Network connectivity to the devices you want to manage
- SSH access to switches and controllers (for automated installation)
- Sufficient network bandwidth for real-time monitoring

### Hardware Requirements

**Minimum:**

- 2 CPU cores
- 4 GB RAM
- 20 GB disk space

**Recommended:**

- 4+ CPU cores
- 8+ GB RAM
- 50+ GB disk space (for time-series data)

## Optional Requirements

### Telegram Bot (for notifications)

If you want to enable Telegram notifications:

1. Create a Telegram bot using [@BotFather](https://t.me/botfather)
2. Obtain your bot API key
3. Configure it in the backend `.env` file

### Domain Name (for production)

For production deployments, consider:

- Setting up a domain name
- Configuring SSL/TLS certificates
- Setting up reverse proxy (nginx, Traefik, etc.)

## Next Steps

Once you have the prerequisites installed, proceed to [Installation](./installation.md).
