# AI Data Governance & Quality

## What is the standard for Data Governance & Quality in AI?
This standard focuses on ensuring the traceability, representativeness, and quality of training data used for AI models. High-quality data governance is foundational evidence for a model's fitness for purpose and compliance with the AI Act.

## When and for whom is this standard applicable?
This standard applies to AI Engineers, Data Scientists, and developers involved in building, training, and deploying AI models within the municipality of Amsterdam.

## What is required?
When developing an AI system, the following data governance and quality rules must be applied and thoroughly documented:

### Dataset Traceability
- [ ] **Version Control:** Require version control for all datasets (e.g., using Data Version Control or DVC) to explicitly link specific data versions to specific model versions. This extends the [general Git usage standards](/general/using-git.md) to include large data artifacts.
- [ ] **Data Splits:** Clearly separate and document the distinct datasets used for the model's lifecycle: Training, Validation (for hyperparameter tuning), and a hold-out Test dataset (for unbiased evaluation).
- [ ] **RAG Data & Context Architecture:** For systems utilizing Retrieval-Augmented Generation (RAG), you must version and document the semantic retrieval pipeline. This includes logging the specific text-chunking strategy (chunk size and overlap), the exact version/hash of the embedding model, and the snapshot version of the vector database index used during testing.

### Data Quality & Representativeness
- [ ] **Automated Validation:** Mandate automated validation pipelines to check for data completeness, outliers, corrupt files, duplicates, and strict schema adherence.
- [ ] **Data Gaps:** Explicitly document the relevance and representativeness of the data. Identify and document known data gaps (e.g., underrepresented classes or rare occurrences) and establish how these impact the system's performance.

### Labeling Protocols
- [ ] **Annotation Requirements:** Define strict procedures for data annotation, including the required qualifications of annotators (e.g., domain experts).
- [ ] **Consensus & Auditing:** Implement dual-labeling processes to resolve disagreements and maintain clear audit trails for all annotations (e.g., using dedicated annotation tools like CVAT).

### Data Governance Framework
- [ ] **MLOps Integration:** Enforce data quality checks as a mandatory stage within the MLOps pipeline prior to model training.

## What to avoid?
- Using unversioned data or failing to establish a clear chain of custody and provenance for the datasets.
- Using the test dataset during the training or validation phases (data leakage).
- Ignoring skewed distributions or data gaps that could lead to biased outcomes or poor performance in production.

## Considerations
- All decisions, methodologies (like resizing, normalization, or data augmentation techniques), and inclusion/exclusion criteria must be meticulously recorded in the **Data Template** to satisfy AI Act Article 10 requirements.
