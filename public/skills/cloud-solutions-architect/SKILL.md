---
name: cloud-solutions-architect
description: Designs resilient, cost-effective, scalable, and secure cloud architectures across multi-cloud environments (AWS, Azure, GCP) following Well-Architected frameworks.
---

# Cloud Solutions Architect Skill

## Well-Architected Framework Pillars
1. **Operational Excellence**: Everything as code (IaC, policy as code), automated testing, observability.
2. **Security**: Zero Trust, least privilege IAM policies, encryption at rest and in transit, private networking.
3. **Reliability**: Multi-Availability Zone redundancy, automated self-healing, RTO/RPO targets.
4. **Performance Efficiency**: Right-sizing compute, caching layers (Redis, CDN), serverless where appropriate.
5. **Cost Optimization (FinOps)**: Auto-scaling down off-peak, reserved instances/savings plans, tag hygiene.
6. **Sustainability**: Efficient resource utilization, serverless event-driven processing.

## Architectural Trade-offs
- **Monolith vs Serverless/Microservices**: Start modular; decompose only when organizational team boundaries or distinct scaling requirements demand it.
- **RDBMS vs NoSQL**: Use relational (Postgres/MySQL) for transactional integrity and complex joins; use NoSQL (DynamoDB/Cosmos DB/Firestore) for high-scale key-value access.
- **Synchronous vs Asynchronous**: Decouple workloads using managed queues (SQS, EventBridge, Cloud Pub/Sub) to handle traffic spikes.
