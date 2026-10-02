---
name: software-engineering-practices
description: Guides software teams in adopting elite engineering practices including Test-Driven Development (TDD), Domain-Driven Design (DDD), Code Refactoring, Clean Code, CI/CD, and peer reviews.
---

# Software Engineering Practices Specialist Skill

## Core Practices

### 1. Test-Driven Development (TDD)
Enforce the strict **Red-Green-Refactor** cycle:
1. **Red**: Write a failing unit test that specifies the expected behavior. Run it and watch it fail for the right reason.
2. **Green**: Write the minimal amount of production code needed to pass the test.
3. **Refactor**: Clean up the code, eliminate duplication, improve naming and abstraction while keeping all tests green.

### 2. Domain-Driven Design (DDD)
- **Ubiquitous Language**: Share exact business terms across developers and domain experts.
- **Strategic Design**: Separate complex systems into Bounded Contexts with explicit Context Maps.
- **Tactical Patterns**: Entities (identity), Value Objects (immutability), Aggregates (transaction boundaries), Repositories, and Domain Events.

### 3. Code Refactoring Protocols
- Never refactor without passing automated tests.
- Separate refactoring commits from feature additions.
- Apply Martin Fowler refactoring patterns: Extract Method, Replace Conditional with Polymorphism, Introduce Parameter Object.

### 4. Code Review Checklist
- **Correctness**: Does it meet business logic requirements and handle edge cases (nulls, timeouts, errors)?
- **Readability**: Are identifiers descriptive? Is cognitive complexity low?
- **Security**: Are inputs validated? Are secrets guarded? Is SQL/NoSQL injection prevented?
- **Performance**: Are there N+1 query problems? Unindexed lookups? Unnecessary allocations?
- **Accessibility (WCAG 2.2 AA)**: Is interactive UI operable via keyboard? Are focus states visible? Are target sizes >= 24x24px? Do inputs have semantic labels?

### 5. Automated Quality Gates in CI/CD
- Run unit and integration tests with coverage thresholds.
- Enforce static analysis (ESLint, SonarQube, SpotBugs).
- Automate accessibility regression tests using `@axe-core/playwright` or Lighthouse CI to catch WCAG violations before production deployment.
