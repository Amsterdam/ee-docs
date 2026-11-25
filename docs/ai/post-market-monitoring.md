# AI Post-Market Monitoring (Lifecycle)

## What is the standard for Post-Market Monitoring?
This standard establishes the requirements for the continuous evaluation of AI models in production. Because machine learning models degrade over time as real-world data shifts, post-market monitoring ensures that the system maintains its performance, fairness, and safety long after its initial deployment, fulfilling the lifecycle requirements of the AI Act.

## When and for whom is this standard applicable?
This standard applies to MLOps Engineers, AI Engineers, Data Scientists, and Product Owners responsible for maintaining and operating AI systems within the municipality of Amsterdam.

## What is required?
This acts as an AI-specific extension to the general [Monitoring standards](https://github.com/Amsterdam/development-standards/tree/main/internal/monitoring/README.md). While standard telemetry tracks uptime and server errors, AI monitoring must track statistical drift and model behavior. The following must be implemented and documented:

### 1. Drift Detection & Custom Telemetry
- [ ] **Data & Concept Drift:** Monitor incoming production data for statistical deviations from the original training dataset (Data Drift) and track changes in the relationship between inputs and outputs (Concept Drift).
- [ ] **Custom AI Metrics:** Sometimes you might want to track your own custom metrics to measure specific things that matter to your app. For AI, you *must* log custom data such as prediction confidence scores, inference latency, and the frequency of edge cases.

### 2. Automated Alerting
- [ ] **Performance Thresholds:** Establish baseline performance metrics and configure automated alerts to notify the team if accuracy, precision, or confidence drops below acceptable thresholds (e.g., an alert triggers if the weekly average confidence score drops by 15%).
- [ ] **Fairness Monitoring:** Continuously track the fairness metrics defined in the [Fairness & Bias Mitigation](/ai/fairness-and-bias-mitigation.md) standard to ensure bias does not creep into the model as real-world demographics shift.

### 3. Maintenance & Retraining Cycles
- [ ] **Service Level Agreements (SLAs):** Define clear SLAs and operational procedures for model retraining and patching when alerts are triggered. 
- [ ] **Retraining Pipelines:** Ensure that any retraining incorporates new, verified data and strictly follows the [Data Governance & Quality](/ai/data-governance-and-quality.md) standard. All retrained models must be version-bumped and re-tested before deployment.

### 4. Human Feedback Loops
- [ ] **Logging Interventions:** Capture and log all instances where a human operator overrides or rejects an AI prediction. This feedback is critical ground-truth data that must be ingested back into the retraining pipeline to improve the model.

## What to avoid?
- Treating AI deployments as "fire and forget." Models are not static software; they require continuous care.
- Automatically retraining and deploying models without human validation of the new training data, which risks creating a negative feedback loop (model collapse).
- Logging excessive amounts of raw, sensitive user input for monitoring without applying data masking or anonymization.

## Considerations
- **Monitoring Costs:** Continuous AI monitoring can generate massive amounts of log data, incurring high ingestion and retention costs. To manage these expenses, limit data retention periods to what is legally necessary, avoid logging unnecessary raw inputs, and consider using log sampling for high-throughput models.
- Preprocess data before logging it, capturing only relevant insights (like statistical distributions or confidence scores) rather than raw image or text data.
