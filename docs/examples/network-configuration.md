# Network Configuration Example

This guide covers advanced network configuration scenarios.

## Hybrid Network Setup

SDN Launch Control supports hybrid networks with both traditional and SDN-enabled segments.

### Architecture

```
[Internet]
    |
[Firewall] -- [Traditional Switch] -- [SDN Switch] -- [Access Point]
                                    |
                            [SDN Controller]
```

### Configuration Steps

1. **Traditional Network**: Configured normally (no OpenFlow)
2. **SDN Segment**: Configured through SDN Launch Control
3. **Bridge Configuration**: Only enable OpenFlow on ports connecting to SDN segment

## Multi-Controller Setup

You can configure multiple controllers for redundancy.

### Setup

1. Install multiple controllers (e.g., OpenDaylight, ONOS)
2. Configure each controller in SDN Launch Control
3. Assign controllers to different switches or bridges

### Load Balancing

Configure different switches to use different controllers for load distribution.

## VLAN Configuration

### Creating VLANs

1. Navigate to switch configuration
2. Create bridge with VLAN tagging
3. Configure ports with VLAN IDs

### Example Configuration

```bash
# Bridge with VLAN 100
ovs-vsctl add-br br-vlan100
ovs-vsctl set port br-vlan100 tag=100
```

## Security Configuration

### Firewall Rules

Configure firewall to allow:

- OpenFlow traffic (port 6653)
- API access (port 8000)
- SSH access (port 22)

### SSL/TLS

For production, configure SSL/TLS:

1. Obtain certificates
2. Configure reverse proxy (nginx)
3. Update API URLs to use HTTPS

## Performance Tuning

### Database Optimization

Configure TimescaleDB for your data retention needs:

- Adjust compression policies
- Configure retention policies
- Optimize continuous aggregates

### Network Optimization

- Configure flow timeouts
- Optimize meter configurations
- Tune controller performance

## Next Steps

- [Architecture Guide](../guides/architecture.md) - System architecture
- [Advanced Configuration](../guides/advanced-configuration.md) - Advanced settings
