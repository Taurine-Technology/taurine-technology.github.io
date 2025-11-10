# Installation

This guide will walk you through installing SDN Launch Control on your server.

## Backend Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Taurine-Technology/sdn-launch-control.git
cd sdn-launch-control
```

### Step 2: Navigate to Backend Directory

```bash
cd backend/control_center
```

### Step 3: Create Environment Configuration

```bash
cp .env.example control_center/.env
```

### Step 4: Configure Environment Variables

Edit `control_center/.env` with your configuration. See [Advanced Configuration](../guides/advanced-configuration.md#environment-variables) for detailed information.

**Minimum required configuration:**

- `SECRET_KEY`: Generate using:

  ```bash
  python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
  ```

- `DB_PASS`: Set a secure PostgreSQL password
- `ALLOWED_HOSTS`: Add your server's IP address or domain name

### Step 5: Start Docker Containers

```bash
docker compose up -d
```

This will start:

- PostgreSQL database with TimescaleDB
- Redis for caching and message broker
- Django backend API
- Celery workers for background tasks

### Step 6: Verify Backend Installation

Check that the backend is running:

```bash
curl http://localhost:8000/api/v1/
```

You should see a JSON response.

## Frontend Installation

### Step 1: Navigate to UI Directory

```bash
cd ../../ui/ui
```

### Step 2: Create Environment Configuration

```bash
cp .example .env.local
```

### Step 3: Configure Frontend Environment

Edit `.env.local` with your backend API URLs:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_WS_OPENFLOW=ws://localhost:8000/ws/openflow_metrics/
NEXT_PUBLIC_WS_DEVICESTATS=ws://localhost:8000/ws/device_stats/
NEXT_PUBLIC_WS_CLASIFICATIONS=ws://localhost:8000/ws/flow_updates/
```

**For remote access**, replace `localhost` with your server's IP address.

### Step 4: Install Dependencies and Start

```bash
./setup.sh
```

This script will:

- Install npm dependencies
- Build the Next.js application
- Start the development server

### Step 5: Verify Frontend Installation

Open your browser and navigate to:

- **Local**: http://localhost:3000
- **Remote**: `http://YOUR_SERVER_IP:3000` (replace `YOUR_SERVER_IP` with your server's IP address)

## Access Points

After installation, you can access:

- **Frontend UI**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/v1
- **Admin Interface**: http://localhost:8000/admin
- **API Documentation**: http://localhost:8000/api/docs

## Default Credentials

The default superuser credentials are:

- **Username**: `admin`
- **Email**: `admin@example.com`
- **Password**: `admin`

**⚠️ Important**: Change these credentials immediately after first login!

## Next Steps

- [Quick Start Guide](./quick-start.md) - Get up and running quickly
- [Basic Setup Example](../examples/basic-setup.md) - Step-by-step setup example

