---
title: Nodes, Topics, Services, and Actions
description: Understanding the fundamental communication patterns in ROS 2
sidebar_label: "Chapter 2: Nodes, Topics, Services, and Actions"
---

# Nodes, Topics, Services, and Actions

## Introduction

The Robot Operating System 2 (ROS 2) provides a rich set of communication patterns that enable different components of a robotic system to interact effectively. These patterns—nodes, topics, services, and actions—form the fundamental building blocks of robotic software architecture. Understanding these concepts is crucial for developing effective robotic systems.

As mentioned in [Module 1](../module-1/index.md), the principle of embodied intelligence suggests that intelligence emerges from the interaction between an agent's physical form and its environment. The communication patterns described in this chapter enable that interaction by facilitating the flow of information between sensors, processing units, and actuators.

## Nodes: The Execution Units

### What is a Node?

A node is the basic execution unit in ROS 2. Conceptually, a node represents a single process that performs a specific function within the robotic system. Nodes can:

- Publish data to topics
- Subscribe to topics to receive data
- Provide services
- Call services
- Send and receive action goals, feedback, and results

### Node Responsibilities

Each node typically handles a specific aspect of robotic functionality:

- **Sensor nodes** manage data acquisition from sensors
- **Processing nodes** transform raw sensor data into meaningful information
- **Control nodes** generate commands for actuators
- **Planning nodes** determine appropriate actions based on goals and current state

### Node Lifecycle

Nodes in ROS 2 have a well-defined lifecycle that includes:

- **Unconfigured**: The node is created but not yet configured
- **Inactive**: The node is configured but not yet activated
- **Active**: The node is fully operational and participating in communication
- **Finalized**: The node is shutting down

This lifecycle management allows for sophisticated resource management and system reconfiguration.

## Topics: Publish-Subscribe Communication

### The Publish-Subscribe Pattern

Topics implement the publish-subscribe communication pattern, where:

- **Publishers** send messages to a topic
- **Subscribers** receive messages from a topic
- Communication is **asynchronous** and **one-to-many**

### Characteristics of Topics

- **Loose coupling**: Publishers and subscribers don't need to know about each other
- **Data-driven**: Communication occurs when new data is available
- **Broadcast nature**: Multiple subscribers can receive the same data
- **No delivery guarantees**: Messages may be lost if subscribers aren't ready

### Message Types

Each topic has a specific message type that defines the structure of data that can be published to it. Common message types include:

- **Sensor data**: Images, laser scans, IMU readings
- **Control commands**: Joint positions, velocities, forces
- **State information**: Robot pose, battery level, system status

### Quality of Service (QoS)

Topics can be configured with different Quality of Service settings to control:

- **Reliability**: Whether messages must be delivered reliably or can be dropped
- **Durability**: Whether late-joining subscribers receive old messages
- **History**: How many messages to store for late subscribers

## Services: Request-Reply Communication

### The Request-Reply Pattern

Services implement the request-reply communication pattern, where:

- A **client** sends a request to a **server**
- The server processes the request and sends a response
- Communication is **synchronous** and **one-to-one**

### Characteristics of Services

- **Tightly coupled**: Client and server must be available simultaneously
- **Request-driven**: Communication occurs when a client makes a request
- **Guaranteed delivery**: Requests and responses are delivered reliably
- **Stateless**: Each request is independent of others

### When to Use Services

Services are appropriate for:

- **Configuration changes**: Updating system parameters
- **One-time operations**: Calculating a path, detecting objects in an image
- **Synchronous operations**: Tasks that must complete before proceeding

## Actions: Goal-Oriented Communication

### The Action Pattern

Actions implement goal-oriented communication, where:

- A **client** sends a **goal** to a **server**
- The server provides **feedback** during goal execution
- The server returns a **result** when the goal completes (or fails)

### Characteristics of Actions

- **Long-running**: Actions typically take significant time to complete
- **Monitorable**: Clients can monitor progress through feedback
- **Cancelable**: Goals can be canceled before completion
- **Stateful**: Actions maintain state during execution

### Action Components

Actions consist of three message types:

- **Goal**: Defines what the action should accomplish
- **Feedback**: Provides status updates during execution
- **Result**: Contains the final outcome of the action

### When to Use Actions

Actions are appropriate for:

- **Navigation**: Moving to a specific location
- **Manipulation**: Grasping and moving objects
- **Complex tasks**: Operations that require monitoring and potential cancellation

## Communication Patterns in ROS 2

![ROS 2 Communication Patterns](/img/module-2/communication-patterns-diagram.png)

*Figure 1: The three main communication patterns in ROS 2: topics, services, and actions.*

## Communication Pattern Comparison

| Pattern | Type | Synchronization | Delivery | Use Case |
|---------|------|----------------|----------|----------|
| Topic | Publish-Subscribe | Asynchronous | Best-effort | Sensor data, state updates |
| Service | Request-Reply | Synchronous | Guaranteed | Configuration, one-time tasks |
| Action | Goal-Oriented | Asynchronous | Guaranteed | Long-running, monitorable tasks |

## Practical Considerations

### Choosing the Right Pattern

Selecting the appropriate communication pattern depends on:

- **Timing requirements**: Real-time vs. best-effort delivery
- **Interaction style**: Data streaming vs. request-response vs. goal-oriented
- **Coupling requirements**: Loose vs. tight coupling between components
- **Monitoring needs**: Whether progress feedback is required

### Performance Implications

Different patterns have different performance characteristics:

- **Topics** provide the highest throughput with lowest latency
- **Services** introduce latency due to request-response nature
- **Actions** provide the most features but with additional overhead

### Resource Management

Effective use of communication patterns requires attention to:

- **Message frequency**: Avoid overwhelming the system with too many messages
- **Message size**: Balance information content with transmission efficiency
- **Connection management**: Properly handle publisher/subscriber lifecycles

## Integration with Physical Systems

The communication patterns in ROS 2 are designed to work effectively with physical robotic systems:

- **Topics** handle continuous sensor streams and state updates
- **Services** manage discrete configuration and processing requests
- **Actions** coordinate complex physical behaviors that take time to complete

This integration allows robotic systems to scale from simple single-purpose robots to complex multi-functional systems while maintaining clear communication patterns and system organization.

## Best Practices

### Design Principles

- **Single responsibility**: Each node should have a clear, focused purpose
- **Appropriate pattern**: Choose the communication pattern that best fits the interaction style
- **Clear interfaces**: Use well-defined message types that clearly express intent
- **Error handling**: Plan for communication failures and degraded operation

### Performance Optimization

- **Message aggregation**: Combine related information to reduce message overhead
- **Appropriate QoS**: Configure Quality of Service settings based on application requirements
- **Connection management**: Properly handle node lifecycles and resource cleanup

## References

Drake, S., & Dehban, A. (2021). ROS2 for beginners: Understanding the fundamentals of ROS2. *International Journal of Advanced Robotic Systems*, 18(4), 17298814211026753.

Macenski, S. (2019). Understanding ROS 2: A complete guide to the Robot Operating System. *Journal of Open Source Software*, 4(42), 1580.

Soragna, C., Ma, S., Kyrki, V., & Doherty, P. (2020). ROS2 for robotics: A survey of the ecosystem. *IEEE Robotics & Automation Magazine*, 27(4), 12-23.

Understanding these fundamental communication patterns provides the foundation for building robust and maintainable robotic systems that effectively coordinate their interactions with the physical world.