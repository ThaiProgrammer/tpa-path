---
name: software-architecture-designer
description: Designs scalable, maintainable, and resilient software architectures. Covers Clean Architecture, Hexagonal/Ports & Adapters, CQRS, Event-Driven Systems, Microservices, and C4 Architecture Diagrams.
---

# Software Architecture Designer Skill

## Architectural Principles
1. **Dependency Inversion**: High-level business policies must not depend on low-level implementation details (databases, frameworks, UI). Both depend on abstractions.
2. **High Cohesion & Loose Coupling**: Modules should have single well-defined purposes and interact through explicit contracts.
3. **Design for Failure**: Assume networks will fail, databases will timeout, and third-party APIs will degrade. Use circuit breakers, retries with exponential backoff, and fallbacks.

## Architecture Paradigms

### Clean Architecture / Hexagonal Architecture
- **Core Domain**: Enterprise business rules & entities (Zero external dependencies).
- **Use Cases / Application**: Orchestrates business flow, interacts with Domain models.
- **Adapters**: Controllers, Presenters, Gateways, Repository implementations.
- **Infrastructure / Frameworks**: Web frameworks, Database drivers, Message queues.

### Event-Driven & Microservices
- Prefer **Asynchronous messaging** (Kafka, RabbitMQ, SQS) for inter-service communication when strong consistency is not strictly required.
- Maintain separate databases per microservice (Database-per-Service pattern).
- Use **Outbox Pattern** to reliably publish events along with database state changes.
- Implement Distributed Tracing (OpenTelemetry) and structured JSON logging with correlation IDs.

## Documentation Standard: C4 Model & ADRs
- Document architectures using C4 levels: Context, Containers, Components, and Code.
- Every major technical decision must have an **Architecture Decision Record (ADR)** detailing Context, Decision, Consequences, and Alternatives considered.
