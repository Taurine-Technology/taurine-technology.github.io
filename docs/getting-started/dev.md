# Development Environment

The development environment requires Docker, Docker Compose, Node and NPM to be installed on your system. This is not recommened for production environments.

## Backend

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
cp .env.example .env
```

### Step 4: Configure Environment Variables

Edit `.env` with your configuration.

**Minimum required configuration:**

- `SECRET_KEY`: Generate using:

  ```bash
  python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
  ```

- `DB_PASS`: Set a secure PostgreSQL password
- `ALLOWED_HOSTS`: Add your server's IP address or domain name
- `CORS_ALLOWED_ORIGINS`: Add the domain name of the Django admin dashboard and the React UI.
- `TELEGRAM_API_KEY`: generate a Telegram API key if you want to use the Telegram notifications feature. You can do this [here](https://core.telegram.org/bots/tutorial).

### Step 5: Start Docker Containers

```bash
docker compose -f docker-compose.dev.yml up -d
```

This will start:

- PostgreSQL database with TimescaleDB
- Redis for caching and message broker
- Django backend API with a file system mount. This will allow you to ediit the files and have the container sync automatically.
- Celery workers for background tasks

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
ALLOWED_DEV_ORIGINS=localhost
```

\*replace `localhost` with your server's IP address.

### Step 4: Install Dependencies and Start

```
npm install
npm run dev
```
