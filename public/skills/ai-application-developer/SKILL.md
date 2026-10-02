---
name: ai-application-developer
description: Guides the design, implementation, and evaluation of production-grade LLM applications, RAG pipelines, vector search systems, and agentic workflows.
---

# AI Application & LLM Engineer Skill

## Core Competencies

### 1. Retrieval-Augmented Generation (RAG) Architecture
- **Ingestion Pipeline**: Loaders -> Cleaners -> Chunkers (Semantic / Recursive Character chunking with overlap) -> Embedding Model -> Vector Storage.
- **Retrieval Optimization**:
  - Hybrid Search (Dense Vector embeddings + BM25 keyword search with Reciprocal Rank Fusion - RRF).
  - Cross-Encoder Re-ranking (Cohere Rerank, BGE Reranker) to elevate top-k precision.
  - Metadata Filtering: Tenant ID, timestamp, category to restrict search scope.
- **Generation & Synthesis**:
  - Context stuffing minimization; provide clear citation requirements.
  - Strict hallucination guards in system prompt.

### 2. Vector Databases & Embeddings
- Vector DBs: pgvector (PostgreSQL), Qdrant, Chroma, Pinecone, MongoDB Atlas Vector Search.
- Models: text-embedding-3-small/large (OpenAI), Voyage AI, BAAI/bge-m3 (Multilingual & Thai support).
- Similarity metrics: Cosine Similarity for normalized embeddings, Dot Product, Euclidean Distance.

### 3. Agentic Workflows & Function Calling
- Use Structured Outputs (JSON Schema / Pydantic / Zod) for reliable tool parameters.
- Provide explicit tool descriptions, parameter types, and validation boundaries.
- Limit max recursion steps and implement timeout/fallback mechanisms.

### 4. Evaluation & Production Monitoring
- Track metrics using Ragas / TruLens: Faithfulness, Answer Relevance, Context Precision, Context Recall.
- Monitor token costs, latency (Time to First Token - TTFT), and rate limits.
