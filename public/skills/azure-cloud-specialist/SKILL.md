---
name: azure-cloud-specialist
description: Designs and implements cloud solutions on Microsoft Azure. Covers App Service, Azure Functions, AKS, Azure SQL, Cosmos DB, Entra ID, and Bicep/ARM infrastructure.
---

# Microsoft Azure Cloud Specialist Skill

## Core Azure Services & Best Practices

### 1. Compute & Modern Apps
- **Azure App Service**: Deploy web apps with deployment slots for zero-downtime blue/green releases.
- **Azure Functions**: Serverless event-driven processing with Consumption or Premium plans.
- **Azure Container Apps (ACA)**: Managed microservices with built-in KEDA autoscaling and Dapr support.
- **Azure Kubernetes Service (AKS)**: Managed enterprise Kubernetes with Azure CNI and Entra ID integration.

### 2. Identity & Security (Microsoft Entra ID)
- Never hardcode connection strings or keys; use **Managed Identities** for Azure resources.
- Retrieve secrets securely via **Azure Key Vault** integration.
- Enforce Role-Based Access Control (RBAC) at the Resource Group or Subscription level.

### 3. Storage & Databases
- **Azure SQL**: Managed relational database with Automated Tuning and Threat Detection.
- **Azure Cosmos DB**: Globally distributed NoSQL database; design partition keys carefully to avoid hot partitions.
- **Azure Blob Storage**: Object storage with Lifecycle Management rules (Hot, Cool, Archive tiers).

### 4. Infrastructure as Code (IaC)
- Use **Bicep** for clean, modular, first-class Azure resource provisioning.
