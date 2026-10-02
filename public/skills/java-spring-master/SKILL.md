---
name: java-spring-master
description: Implements enterprise-grade backend services with modern Java (Java 21 LTS), Spring Boot 3+, Spring Data JPA, Spring Security, and robust testing frameworks.
---

# Modern Java & Spring Boot Specialist Skill

## Core Principles

### 1. Modern Java (Java 21 LTS)
- Use **Records** for immutable DTOs and data carriers.
- Leverage **Virtual Threads (Project Loom)** for high-throughput I/O-bound microservices (\`spring.threads.virtual.enabled=true\`).
- Use pattern matching for switch and sealed classes to model domain state machines.

### 2. Spring Boot 3+ Standards
- Use constructor injection instead of field injection (\`@Autowired\` on fields is prohibited).
- Structure into layers: \`Controller -> Service -> Repository -> Entity\`.
- Keep Controllers thin; place business rules inside domain services or aggregate roots.
- Implement global error handling with \`@RestControllerAdvice\` returning ProblemDetail (RFC 7807).

### 3. Spring Data JPA & Database
- Prevent N+1 query traps using \`@EntityGraph\` or JPQL \`JOIN FETCH\`.
- Use DTO projections for read-heavy operations instead of loading complete managed entities.
- Configure connection pools (HikariCP) with tuned maximumPoolSize and leakDetectionThreshold.

### 4. Testing Suite
- Unit tests with **JUnit 5** and **Mockito**.
- Integration tests with **Testcontainers** for real database/message queue validation.
- Slice testing using \`@WebMvcTest\` or \`@DataJpaTest\` for fast feedback loops.
