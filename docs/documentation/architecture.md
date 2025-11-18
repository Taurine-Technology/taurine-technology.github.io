# Architecture

Overview of SDN Launch Control architecture and system design. If you have questions about the system or particular terms used below, please see the [Wiki / FAQ page](wiki.md).

## System Overview

SDN Launch Control is a monorepo containing:

- **Backend**: Django REST API with WebSocket support
- **Frontend**: Next.js React application
- **Database**: PostgreSQL with TimescaleDB
- **Message Broker**: Redis for Celery and WebSockets

## Network Diagram

The following example network highlights the services running on each device. The network below is equivalent to the network configured in the [basic examples](../examples/basic-setup.md).

![Network Architecture Diagram](/img/diagrams/network-architecture-diagram.png)

### The Server

The server runs the backend and frontend code, as well as the SDN controller in most cases. These applications are run in Docker containers: see the backend one [here](https://github.com/Taurine-Technology/sdn-launch-control/blob/main/backend/control_center/docker-compose.yml), frontend one [here](https://github.com/Taurine-Technology/sdn-launch-control/blob/main/ui/ui/docker-compose.yml), and the controller [here](https://github.com/Taurine-Technology/sdn-launch-control/blob/main/backend/control_center/ansible/playbooks/resources/templates/docker-compose-odl.yml.j2).

The server needs to be able to connect to the switches, so it must be on the same LAN.

### The Switch

In our examples, we have used a Raspberry Pi with Ethernet adapters as our SDN switch; however, you could have just as easily used any Ubuntu device running an x86 CPU. The `Taurine Stack` is a collection of tools that enable smart network management.

![Switch Architecture Diagram](/img/diagrams/switch-software-architecture.png)

#### System Resource Monitor

This collects system resource statistics and sends them to the backend for historical and real-time monitoring.

#### Port Monitor

This monitors the ports associated with a switch's bridge and sends throughput data to the backend for historical and real-time monitoring.

#### Sniffer

The traffic sniffer, enabled in the plugin settings, collects packet data on a per-flow level and sends it to the backend. This tool extracts packet payload data for traffic classification.

#### Open vSwitch Flow Monitor

This tool collects data such as the number of bytes processed by a flow table entry. This data is sent to the backend and linked to classification data to monitor the amount of data used per application.
