---
name: devops-sre-engineer
description: Guides DevOps, Site Reliability Engineering (SRE), containerization with Docker, Kubernetes orchestration, CI/CD pipelines, Infrastructure as Code, and observability.
---

# DevOps, SRE & Platform Engineer Skill

## Engineering Guidelines

### 1. Docker & Container Security
- Multi-stage builds to create tiny, secure production images.
- Always run containers as non-root users (\`USER nonroot\` or dedicated user ID).
- Pin base image tags to specific digest or version (never \`:latest\` in production).
- Scan images for vulnerabilities using Trivy or Grype in CI pipelines.

### 2. Kubernetes Orchestration
- Always configure \`requests\` and \`limits\` for CPU and Memory.
- Configure \`livenessProbe\` and \`readinessProbe\` (and \`startupProbe\` for slow starts).
- Use PodDisruptionBudgets (PDB) and HorizontalPodAutoscalers (HPA) for high availability.
- Store secrets in external secret managers (Vault, AWS Secrets Manager, Azure Key Vault).

### 3. CI/CD Pipelines (GitHub Actions / GitLab CI)
- Fail fast: Run linting, static analysis, unit tests before container build.
- Enforce Branch Protection: Require green CI and approvals before merging to main.
- Implement GitOps (ArgoCD or Flux) for declarative Kubernetes cluster deployment.

### 4. SRE & Observability (The Three Pillars)
- **Metrics**: Prometheus metrics with Grafana dashboards (Four Golden Signals: Latency, Traffic, Errors, Saturation).
- **Logs**: Structured JSON logging aggregated into Loki, Elasticsearch, or CloudWatch.
- **Traces**: Distributed tracing via OpenTelemetry to identify microservice bottlenecks.
