# Architecture

Overview of SDN Launch Control architecture and system design.

## System Overview

SDN Launch Control is a monorepo containing:

- **Backend**: Django REST API with WebSocket support
- **Frontend**: Next.js React application
- **Database**: PostgreSQL with TimescaleDB
- **Message Broker**: Redis for Celery and WebSockets

## Architecture Diagram

```
┌─────────────────┐
│   Frontend UI   │ (Next.js + React)
│   (Port 3000)   │
└────────┬────────┘
         │ HTTP/WebSocket
         │
┌────────▼────────┐
│  Backend API    │ (Django + DRF)
│   (Port 8000)   │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌──▼────┐
│  PostgreSQL │ │  Redis   │
│ TimescaleDB │ │ (Celery) │
└─────────────┘ └──────────┘
```

## Backend Architecture

### Django Applications

- `network_device`: Device management
- `controller`: SDN controller management
- `odl`: OpenDaylight integration
- `onos`: ONOS integration
- `ovs_install`: Open vSwitch installation
- `ovs_management`: Open vSwitch management
- `classifier`: ML-based traffic classification
- `network_data`: Network analytics
- `device_monitoring`: Real-time statistics
- `account`: User authentication
- `notification`: Telegram notifications
- `software_plugin`: Plugin system
- `ansible`: Automation playbooks

### Key Technologies

- **Django 5.0.1**: Web framework
- **Django REST Framework**: API endpoints
- **Django Channels**: WebSocket support
- **Celery**: Background tasks
- **Ansible**: Network automation
- **TensorFlow/Keras**: ML models

## Frontend Architecture

### Next.js App Router

- **Server Components**: Default (RSC: true)
- **Client Components**: For interactivity
- **API Integration**: Axios instance
- **WebSocket**: MultiWebSocketContext
- **State Management**: React Context API

### Key Technologies

- **Next.js 15.4.2**: React framework
- **React 19.1.0**: UI library
- **TypeScript 5**: Type safety
- **shadcn/ui**: UI components
- **Tailwind CSS**: Styling
- **Recharts**: Data visualization

## Data Flow

### Real-time Monitoring

1. Network devices send statistics
2. Backend processes and stores in TimescaleDB
3. WebSocket pushes updates to frontend
4. Frontend displays real-time charts

### Traffic Classification

1. Network flows captured
2. ML model classifies traffic
3. Results stored in database
4. Frontend displays classifications

## Database Schema

### TimescaleDB Hypertables

- `network_data_flow`: Flow data
- `network_data_flowstat`: Flow statistics

### Continuous Aggregates

- 1-minute aggregated views
- Automatic refresh policies
- Compression enabled

## Security

- Token-based authentication (Django REST Knox)
- CORS configuration
- Environment variable secrets
- CSRF protection

## Scalability

- Database connection pooling
- Celery for async tasks
- Redis for caching
- TimescaleDB for time-series optimization

## Next Steps

- [Model Management](./model-management.md) - ML model system
- [Advanced Configuration](./advanced-configuration.md) - Configuration details

