# Prerequisites

Before installing SDN Launch Control, ensure you have the following prerequisites installed and configured.

## System Requirements

SDN Launch Control has been successfully tested on:

- Ubuntu Desktop
- Ubuntu Server
- Windows WSL (Windows Subsystem for Linux)

## Required Software

### Docker and Docker Compose

SDN Launch Control uses Docker for containerized deployment. You must have Docker and Docker Compose installed.

Follw the instructions [here](https://docs.docker.com/engine/install/) to install Docker on your machine.

### Network Access

Ensure your server has:

- Network connectivity to the devices you want to manage
- SSH access to switches and controllers (for automated installation)

### Hardware Requirements

**Minimum:**

- 2 CPU cores
- 8 GB RAM
- 50 GB disk space

**Recommended:**

- 4+ CPU cores
- 16+ GB RAM
- 50+ GB disk space (for time-series data)

## Optional Requirements

### Telegram Bot (for notifications)

If you want to enable Telegram notifications:

1. Create a Telegram bot using following the instructions [here](https://core.telegram.org/bots/tutorial)
2. Obtain your bot API key
3. Configure it in the backend `.env` file

## Next Steps

Once you have the prerequisites installed, proceed to [Installation](./installation.md).
