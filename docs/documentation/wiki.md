# Wiki / FAQ

This page aims to answer frequently asked questions and provide knowledge about Software-Defined Networking (SDN) and other industry jargon.

<details>
<summary><strong>What do I need to run SDN Launch Control?</strong></summary>

You need a device to act as a switch (minimum 3 Ethernet ports), a server to run Launch Control and a server to run the SDN controller (this can be the same server). They should all run Ubuntu Server 20 or 22. The server requires an x86-64 CPU architecture.

</details>

<details>
<summary><strong>Can I cloud-host SDN Launch Control?</strong></summary>

Yes and no. If you want to cloud-host the software and have a VPN tunnel or reverse proxy set up so your switches and API can communicate, then there is no issue in doing this. **However**, the switch needs to communicate with Launch Control, and Launch Control needs to be able to communicate with the switch, so they both need to be able to resolve the URL or IP address assigned to each other.

The **good news** is that we are building a cloud-hosted solution that will allow you to have multiple networks all connected to a single Launch Control instance. _Stay tuned for more..._

</details>

<details>
<summary><strong>What is an SDN Controller?</strong></summary>

An SDN controller is the "brain" of a Software-Defined Networking (SDN) architecture. It runs as software and centrally manages the network by communicating with both the data plane (switches/routers) and applications and orchestration systems. This enables SDN Launch Control to dynamically enforce QoS, program paths, manage queues, and more.

</details>

<details>
<summary><strong>What is Open vSwitch (OVS)?</strong></summary>

Open vSwitch (OVS) is a production‑quality, open-source virtual switch designed to provide advanced networking features in virtualized, cloud and certain hardware environments. It is a multilayer software switch that runs in the hypervisor (e.g., KVM with libvirt, Xen) and on Linux hosts; also available as a hardware offload via certain NICs/switches (OVS offload). Its core functionality includes high-performance packet switching/forwarding with kernel datapaths (Linux kernel module or DPDK userspace datapath).

</details>

<details>
<summary><strong>What is OpenFlow?</strong></summary>

OpenFlow is a standardized protocol that lets an external controller program the forwarding behavior of network devices (switches/routers). It's key in enabling SDN Launch Control to dynamically manage switches.

</details>

<details>
<summary><strong>What is an Open vSwitch (OVS) Bridge?</strong></summary>

In Open vSwitch (OVS), a bridge is a virtual switch instance. It’s the top-level switching element that holds ports and flow tables, and forwards packets between its ports according to its configuration and OpenFlow rules.

</details>
