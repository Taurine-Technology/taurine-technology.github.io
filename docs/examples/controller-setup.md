# Controller Setup Example

Detailed guide for setting up SDN controllers with SDN Launch Control.

## Supported Controllers

- **OpenDaylight**: Recommended for most use cases
- **ONOS**: Alternative controller option

## OpenDaylight Setup

### Installation via UI

1. Navigate to **Controllers**
2. Click **Set Up an SDN Controller**
3. Select **OpenDaylight**
4. Configure:

   - Controller name
   - IP address
   - Port (default: 6653)

5. Click **Install**

### Manual Installation

If you prefer manual installation:

```bash
# Download OpenDaylight
wget https://nexus.opendaylight.org/content/repositories/public/org/opendaylight/integration/karaf/0.18.0/karaf-0.18.0.tar.gz

# Extract
tar -xzf karaf-0.18.0.tar.gz
cd karaf-0.18.0

# Start OpenDaylight
./bin/karaf
```

### Configuration

After installation, configure OpenDaylight:

1. Access Karaf console
2. Install required features
3. Configure REST API
4. Connect to SDN Launch Control

## ONOS Setup

### Installation

1. Navigate to **Controllers**
2. Select **ONOS**
3. Follow installation wizard

### Configuration

ONOS requires additional configuration:

- Configure cluster (if using multiple instances)
- Set up applications
- Configure network topology

## Controller Management

### Monitoring

Monitor controller status:

- Connection status
- Active flows
- Device connections
- Performance metrics

### Troubleshooting

**Controller won't connect:**

- Verify IP address and port
- Check firewall rules
- Verify controller is running
- Check logs in controller

**Flows not installing:**

- Verify controller is active
- Check switch connection
- Verify OpenFlow version compatibility

## Next Steps

- [Model Management](../guides/model-management.md) - ML model configuration
- [Advanced Configuration](../guides/advanced-configuration.md) - Advanced settings

