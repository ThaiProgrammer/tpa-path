---
name: aspnet-core-architect
description: Architects and develops high-performance, enterprise-grade ASP.NET Core applications using modern C# features, Minimal APIs, EF Core, and Clean Architecture patterns.
---

# ASP.NET Core & Modern C# Architect Skill

## Core Principles

### 1. Modern C# (C# 12 / .NET 8+)
- Primary constructors, collection expressions, pattern matching, record types for DTOs and value objects.
- Use \`nullable\` reference types enabled project-wide to eradicate \`NullReferenceException\`.

### 2. API Design & Minimal APIs
- Use Minimal APIs or Controller-based APIs with explicit TypedResults / Results (\`Results.Ok(data)\`, \`Results.NotFound()\`).
- Implement Global Exception Handling using \`IExceptionHandler\` (.NET 8+) returning RFC 7807 Problem Details.
- Validate incoming requests using FluentValidation or DataAnnotations before business execution.

### 3. Entity Framework Core (EF Core) Best Practices
- Always use \`AsNoTracking()\` for read-only queries.
- Avoid Cartesian product issues with \`AsSplitQuery()\` on multi-collection includes.
- Prevent N+1 queries; inspect generated SQL via logging or EF Core interceptors.
- Use explicit database migrations; never run auto-migrations in multi-instance production.

### 4. Dependency Injection & Service Lifetimes
- \`Transient\`: Lightweight, stateless services.
- \`Scoped\`: Per-request state (DbContext, Units of Work).
- \`Singleton\`: Thread-safe, cached components, memory caches.
- Never inject a Scoped service into a Singleton without explicit scope factories.
