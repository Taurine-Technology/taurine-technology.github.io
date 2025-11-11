# Basic Setup Example

This example walks through setting up SDN Launch Control for a simple network topology using a Raspberry Pi as a switch although the installation process is largly similar between devices. Consult the diagram below to follow along. All IP Addresses and details used in the example are drawn from this diagram.

## Network Topology

The final outcome of this guide will be the network seen below. The server @ 10.10.10.10 is running SDN Launch Control, the switch at 10.10.10.6 is a Raspberry Pi with 2 USB to Ethernet Adapters.

![Basic Network Diagram](/img/diagrams/basic-network-diagram.png)

## Hardware

In this example the Controller and API are running on the same server. To do this you need a minimum of 16GB of RAM.

The Raspbbery Pi will be configured as follows:

![Basic Network Diagram](/img/hardware/raspberry-pi-ports.png)

## Step 1: Install Open vSwitch

1. Navigate to **Switches** in the UI at `http://<SERVER_IP_ADDRESS>:3000/devices/switches`
2. Click the **+ Add Switch** button
3. Fill in the form, nothing the following important fields:

   - **API URL**: `http://10.10.10.10:8000` - this is the IP address of the server running SDN Launch Control.
   - **Is Rapberry Pi?**: select this if your switch is a Raspberry Pi.

   ![Install Open vSwitch form](/img/screenshots/switch-install-form.png)

4. Click **Install OVS**

The system will:

- Configure OVS on the target device
- Install Docker on the target device
- Set up a device resource management script

## Step 2: Set Up SDN Controller

1. Navigate to **Controllers** in the UI at `http://<SERVER_IP_ADDRESS>:3000/devices/controllers`
2. Click **+ Install Controller**
3. Fill in the form:

   ![Install Controller form](/img/screenshots/install-controller-form.png)

4. Click **Install Controller**

The system will:

- Install Docker on the target device
- Set up an ODL SDN Controller in a Docker container

## Step 3: Create Bridge

1. Navigate to **Switches** → Select your switch
2. Click **Add Bridge** under the `Bridge Configuration` section.
3. Fill in the form:

   - **API URL**: `http://10.10.10.10:8000` (your SDN Launch Control server)
   - **Ports**: Select ports connecting to access point and back to your network. Refer back to the diagrams above.
   - **Controller**: Select the controller we set up in the step before.

   ![Add Birdge form](/img/screenshots/configure-bridge-form.png)

4. Click **Add Bridge**

The system will

- Configure the OVS Bridge
- Set up port and flow monitoring tools on the switch

## Conclusion

Once you have done this you will have a simple network set up. You should be able to connect to the access point and use the network.

## Next Steps

- [Network Configuration](./advanced-network-configuration.md) - Advanced configuration
