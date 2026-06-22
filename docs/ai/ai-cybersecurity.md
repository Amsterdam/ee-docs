# AI Cybersecurity

## What is the standard for AI Cybersecurity?
This standard focuses on protecting machine learning components, models, data pipelines, and deployment infrastructure from AI-specific security vulnerabilities. It targets vectors that traditional software security layers do not cover, such as manipulation of training sets, model inversion, or adversarial exploitation, ensuring compliance with the technical robustness and security mandates of the AI Act.

## When and for whom is this standard applicable?
This standard applies to AI Engineers, Data Scientists, Cloud Engineers, and MLOps Engineers responsible for securing, serving, and maintaining machine learning applications for the municipality of Amsterdam.

## What is required?
While standard security principles (such as secure transport or network isolation) are already governed by the [general Secure Coding standard](/general/secure-coding.md), AI development requires dedicated security controls across the model's runtime lifecycle:

### 1. Input Validation and Sanitization
- [ ] **Malicious Input Filtering:** Implement strict validation and normalization pipelines for inference requests. Ensure that input shapes, dimensions, and encodings match predefined schemas before passing data to the model.
- [ ] **Out-of-Distribution (OOD) Checks:** Deploy threshold-based anomaly detection mechanisms at API gateways to detect and log incoming requests that fall far outside the distribution of the training data.
- [ ] **Technical Enforcement at the API Layer:** Code-level input structure must be programmatically enforced. For Python-based applications (e.g., FastAPI), you must utilize rigid validation libraries like **Pydantic** to reject malformed payloads before they hit the model pipeline.

### 2. Adversarial Resilience, Penetration Testing & Prompt Safeguards
- [ ] **Perturbation Resilience:** Test the model's susceptibility to adversarial manipulation (e.g., using white-box or black-box gradient attacks like FGSM if applicable). The system must maintain stable predictions within acceptable error margins when subjected to bounded data alterations.
- [ ] **Data Poisoning Prevention:** Secure data ingestion lakes to prevent unauthorized training data modification, injection, or deletion. Enforce cryptographic validation on incoming batch training data files.
- [ ] **Generative Prompt Protections:** For user-facing LLM deployments, implement dedicated guardrails to intercept, filter, and block **Prompt Injection**, **Jailbreaking** attempts, and **System Prompt Leakage**. Malicious language strings must be neutralized before context tokenization.

### 3. Model Leakage & Data Privacy Protections
- [ ] **Exfiltration Protections:** Ensure APIs do not reveal structural metadata or excessive telemetry details (e.g., detailed prediction distributions or gradient shapes) that could assist a bad actor in reconstructing the training set via model inversion or extraction attacks.
- [ ] **Rate Limiting:** Enforce strict API rate limiting on model inference endpoints to mitigate continuous, high-volume automated queries designed for model cloning.

### 4. Supply Chain Security
- [ ] **Pre-trained Weights Verification:** When downloading third-party models, weights, or tokenizers, verify their cryptographic signatures and hash matches. Only load base weights from certified registries and scan serialized formats (e.g., `.pkl`, `.h5`, `.pt`) for arbitrary code execution vulnerabilities prior to loading into environment runtimes.

## What to avoid?
- Disabling request validation filters under the assumption that an AI model naturally filters noise out of its input.
- Distributing raw model weights or configuration files over public, unauthenticated networks.
- Treating third-party open-source pre-trained model checkpoints as implicitly secure without validating files and dependencies.

## Considerations
- Security mechanisms should not be over-engineered to the point that inference latency or normal model performance on valid edge cases degrades significantly.
- If a security incident or potential exploit is identified in production, a retraining baseline must be initiated from verified, cryptographically signed data versions managed under the [AI Data Governance & Quality standard](/ai/data-governance-and-quality.md).
