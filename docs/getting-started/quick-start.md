# Quick Start

Get SDN Launch Control up and running in minutes.

## Prerequisites Check

Before starting, ensure you have:

- ✅ Docker and Docker Compose installed
- ✅ Network access to your devices
- ✅ SSH access to switches/controllers (for automated setup)

## 5-Minute Setup

### 1. Start Backend (2 minutes)

```bash
cd backend/control_center
cp .env.example control_center/.env
# Edit .env with minimal config (SECRET_KEY, DB_PASS)
docker compose up -d
```

Wait for containers to be healthy:

```bash
docker compose ps
```

### 2. Start Frontend (2 minutes)

```bash
cd ../../ui/ui
cp .example .env.local
# Edit .env.local with API URL
./setup.sh
```

### 3. Access and Configure (1 minute)

1. Open http://localhost:3000
2. Log in with default credentials (admin/admin)
3. Navigate to **Switches** → **Install OVS on a Switch**
4. Follow the installation wizard

## First Steps

1. **Install Open vSwitch** on a network device
2. **Set up an SDN Controller** (OpenDaylight recommended)
3. **Create a Bridge** connecting switch to controller
4. **Monitor Traffic** in real-time

## Common Issues

**Backend won't start:**

- Check Docker is running: `docker ps`
- Check logs: `docker compose logs`
- Verify `.env` configuration

**Frontend can't connect:**

- Verify `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
- Check backend is accessible: `curl http://localhost:8000/api/v1/`
- Check CORS settings in backend `.env`

**Can't SSH to devices:**

- Verify SSH keys are configured
- Test SSH manually: `ssh user@device-ip`
- Check firewall rules

## Next Steps

- [Basic Setup Example](../examples/basic-setup.md) - Detailed walkthrough
- [Network Configuration](../examples/network-configuration.md) - Configure your network
- [Architecture Guide](../guides/architecture.md) - Understand the system
