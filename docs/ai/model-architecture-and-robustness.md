# AI Model Architecture & Robustness

## What is the standard for Model Architecture & Robustness?
This standard ensures technical validation, structural transparency, and resilience of the AI model. It focuses on how the model is built, tested, and expected to perform under real-world conditions, satisfying the AI Act's requirements for technical documentation and model robustness.

## When and for whom is this standard applicable?
This standard applies to AI Engineers, Data Scientists, and MLOps Engineers involved in designing, training, and testing the core machine learning models for the municipality of Amsterdam.

## What is required?
When developing an AI system, the following architectural and robustness standards must be applied and meticulously documented:

### 1. Model Identity & Logic
- [ ] **Architecture Definition:** Clearly state the model's technical architecture and algorithmic logic (e.g., Convolutional Neural Network using ResNet-50, Random Forest, etc.).
- [ ] **Design Specifications:** Document the primary optimization goals (e.g., optimizing for recall over precision to minimize false negatives) and explicitly state any trade-offs made to comply with requirements like transparency or computational efficiency.
- [ ] **Version Control:** Maintain a unique identifier for the specific, versioned model artifact (e.g., `BosFauna-CNN-v1.0.pth`) to ensure precise traceability.

### 2. Performance Evaluation
*Note: This acts as an AI-specific addendum to the general [Testing standard](/general/testing.md).*
- [ ] **Strict Hold-Out Testing:** Final model performance must be evaluated exclusively on a strictly held-out test dataset that is proven to be representative of the deployment environment.
- [ ] **Disaggregated Metrics:** Move beyond simple overall accuracy. Require comprehensive metrics such as Precision, Recall, F1-Score, and AUC-ROC, disaggregated across relevant classes or subgroups to identify specific areas of underperformance.
- [ ] **Generative AI & LLM Evaluation:** For applications built on Large Language Models (LLMs) or generative workflows, you must use specialized framework evaluators (e.g., Ragas, TruLens) to quantify non-traditional metrics. Test sets must explicitly measure and score **Faithfulness** (hallucination checks), **Answer Relevance**, and **Context Precision**.

### 3. Robustness & Resilience
- [ ] **Noise & Perturbation Testing:** Mandate resilience testing against noisy or sub-optimal inputs. For example, if processing images, test the model's robustness against blur, low lighting, or weather artifacts. Document the expected performance drop under these conditions.
- [ ] **Fail-Safes & Confidence Thresholds:** Define clear confidence thresholds for the model's outputs. Implement programmatic fail-safe mechanisms—such as deferring a decision to a human operator or triggering a manual review—if the model's confidence drops below the established threshold (e.g., `< 0.75`).

### 4. Model Change Management & Compliance Auditing
- [ ] **Change Log:** Maintain a strict, versioned log of significant changes made to the model throughout its lifecycle. This must include retraining events (with new data), architectural tweaks, and updates to underlying ML libraries or dependencies.
- [ ] **Compliance vs. Technical Oversight Tracking:** If an application deployment choice deviates from standard technical baselines (e.g., proceeding to production without a specific technical security audit or with a minor known bias limitation), this event must be explicitly signed off and logged as a deliberate **Compliance/Management Decision**. This guarantees a historical audit trail and prevents critical risk-management choices from being misclassified as engineering oversights.


## What to avoid?
- Using the validation dataset for the final performance evaluation (which results in overly optimistic metrics).
- Relying solely on top-line aggregate accuracy, which masks poor performance on rare but critical edge cases.
- Deploying "black-box" models where the optimization goals and trade-offs are not documented or understood by the deployment team.

## Considerations
- Robustness testing should closely mimic the physical or digital environment where the model will be deployed (e.g., simulating low-bandwidth camera feeds if deployed on edge devices).
- Any updates to the model architecture must trigger a re-evaluation of the [Fairness & Bias Mitigation](/ai/fairness-and-bias-mitigation.md) metrics.
