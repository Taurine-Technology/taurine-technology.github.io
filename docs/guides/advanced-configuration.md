# Advanced Configuration

Advanced configuration options for SDN Launch Control.

## Environment Variables

### Backend Configuration

#### Database Settings

```env
DB_HOST=pgdatabase
DB_NAME=postgres
DB_USER=postgres
DB_PASS=your-secure-password
DB_PORT=5432

# Connection Pooling (Production)
DB_MAX_CONNS=20
DB_MAX_OVERFLOW=10
DB_POOL_RECYCLE=3600

# Connection Pooling (Development)
DB_MAX_CONNS_DEV=10
DB_MAX_OVERFLOW_DEV=5
```

#### Celery Configuration

```env
CELERY_BROKER_URL=redis://redis:6379/1
```

#### Channels (WebSocket) Configuration

```env
CHANNEL_REDIS_HOST=redis
CHANNEL_REDIS_PORT=6379
```

#### Django Settings

```env
SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=localhost,127.0.0.1,your-domain.com
DJANGO_LOG_LEVEL=INFO
```

#### CORS Settings

```env
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://your-domain.com
CORS_ORIGIN_ALLOW_ALL=False
```

#### Telegram Notifications

```env
TELEGRAM_API_KEY=your-telegram-api-key-here
```

### Frontend Configuration

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_WS_OPENFLOW=ws://localhost:8000/ws/openflow_metrics/
NEXT_PUBLIC_WS_DEVICESTATS=ws://localhost:8000/ws/device_stats/
NEXT_PUBLIC_WS_CLASIFICATIONS=ws://localhost:8000/ws/flow_updates/
```

## Database Optimization

### TimescaleDB Configuration

#### Compression Policies

Configure compression for time-series data:

- Main tables: Compress after 24 hours
- Continuous aggregates: Compress after 7 days

#### Retention Policies

Set data retention based on your needs:

- Flow data: 30-90 days
- Aggregated data: 1 year+

## Performance Tuning

### Connection Pooling

Adjust pool settings based on load:

- Production: 20 connections, 10 overflow
- Development: 10 connections, 5 overflow

### Celery Workers

Configure worker count:

```bash
celery -A control_center worker --concurrency=4
```

### Caching

Configure Redis caching:

- Cache API responses
- Cache model predictions
- Cache device statistics

## Security Hardening

### Production Checklist

- [ ] Change default admin credentials
- [ ] Set strong SECRET_KEY
- [ ] Configure ALLOWED_HOSTS
- [ ] Enable HTTPS
- [ ] Configure firewall rules
- [ ] Set up SSL/TLS certificates
- [ ] Enable database backups
- [ ] Configure log rotation

## Monitoring

### Health Checks

Monitor system health:

- Database connections
- Redis availability
- Celery worker status
- WebSocket connections

### Logging

Configure logging levels:

- Development: DEBUG
- Production: INFO or WARNING

## Backup and Recovery

### Database Backups

```bash
# Backup database
docker compose exec pgdatabase pg_dump -U postgres postgres > backup.sql

# Restore database
docker compose exec -T pgdatabase psql -U postgres postgres < backup.sql
```

### Configuration Backups

Backup important files:

- `.env` files
- Model configurations
- Ansible playbooks

## Troubleshooting

### Common Issues

**Database connection errors:**

- Check connection pool settings
- Verify database is running
- Check network connectivity

**WebSocket disconnections:**

- Verify Redis is running
- Check network stability
- Review connection limits

**Performance issues:**

- Review database queries
- Check connection pool usage
- Monitor Celery task queue

## Next Steps

- [Architecture](./architecture.md) - System architecture
- [Model Management](./model-management.md) - ML models

