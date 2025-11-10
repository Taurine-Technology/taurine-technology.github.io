# Basic Setup Example

This example walks through setting up SDN Launch Control for a simple network topology.

## Network Topology

```
[Router] -- [Switch] -- [Access Point]
              |
         [SDN Controller]
```

## Step 1: Install Open vSwitch

1. Navigate to **Switches** in the UI
2. Click **Install OVS on a Switch**
3. Fill in the form:

   - **Device Name**: `switch-01`
   - **IP Address**: `192.168.1.10`
   - **SSH Username**: `admin`
   - **SSH Key**: Upload your SSH private key

4. Click **Install**

The system will:

- Connect to the device via SSH
- Install Open vSwitch using Ansible
- Configure OVS for OpenFlow

## Step 2: Set Up SDN Controller

1. Navigate to **Controllers** in the UI
2. Click **Set Up an SDN Controller**
3. Choose controller type: **OpenDaylight**
4. Fill in the form:

   - **Controller Name**: `odl-controller-01`
   - **IP Address**: `192.168.1.20`
   - **Port**: `6653` (default OpenFlow port)

5. Click **Install**

## Step 3: Create Bridge

1. Navigate to **Switches** → Select your switch
2. Scroll to **Bridge Details**
3. Click **Add Bridge**
4. Fill in the form:

   - **Bridge Name**: `br0` (no spaces or special characters)
   - **API URL**: `http://192.168.1.5:8000` (your SDN Launch Control server)
   - **Ports**: Select ports connecting to access point
   - **Controller**: Select `odl-controller-01`

5. Click **Submit**

## Step 4: Verify Connection

1. Navigate to **Switches** → Your switch
2. Check **Bridge Status**: Should show "Connected"
3. Check **Controller Status**: Should show "Active"

## Step 5: Monitor Traffic

1. Navigate to **Network Monitoring**
2. View real-time traffic classification
3. Check device statistics
4. View historical data

## Troubleshooting

**Bridge won't connect:**

- Verify API URL is accessible from switch
- Check firewall allows port 8000
- Verify controller is running

**No traffic data:**

- Ensure bridge is connected
- Check ports are correctly configured
- Verify OpenFlow flows are being installed

## Next Steps

- [Network Configuration](./network-configuration.md) - Advanced configuration
- [Controller Setup](./controller-setup.md) - Detailed controller configuration
