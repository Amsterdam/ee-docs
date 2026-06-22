# AI Fairness & Bias Mitigation

## What is the standard for Fairness & Bias Mitigation in AI?
This standard focuses on the detection, analysis, and mitigation of unfair bias in AI systems. It helps reducing discrimination, be compliant with fundamental rights, and adherence to the fairness requirements set forth in the AI Act.

## When and for whom is this standard applicable?
This standard applies to AI Engineers, Data Scientists, AI Ethicists, and project leads developing and deploying AI systems for the municipality of Amsterdam.

## What is required?
When developing an AI system, the following fairness and bias mitigation protocols must be applied and meticulously documented:

### 1. Fairness Framework
- [ ] **Define Protected Characteristics:** Explicitly list the sensitive attributes considered for bias analysis. This must be based on applicable EU non-discrimination law and the specific context of the AI system's use (e.g., demographic groups, lighting conditions, or rare classes acting as proxies for class imbalance).
- [ ] **Select Fairness Metrics:** Standardize the use of specific, mathematically defined fairness metrics appropriate for the use case. Acceptable metrics include, but are not limited to:
  - *Demographic Parity*
  - *Equalized Odds*
  - *Equal Opportunity*
  - *Per-Class F1-Score*
  - *Accuracy Disparity*
- [ ] **Establish Quantifiable Thresholds:** Define pre-determined, quantifiable thresholds for the chosen metrics that the system MUST meet before deployment (e.g., "The F1-score for any individual class must not fall below 0.70"). These must be set *before* model testing begins.
- [ ] **Generative AI & LLM Benchmarking:** For Large Language Models (LLMs) and text-generation systems where traditional mathematical fairness metrics do not directly apply, you must leverage established LLM benchmarking frameworks. Refer to and implement the tests outlined in the [GRIP on LLMs repository](https://github.com/Amsterdam/grip-on-llms) to evaluate the model against known societal biases, toxicity, and stereotyping datasets.

### 2. Bias Analysis and Mitigation Strategies
- [ ] **Baseline Pre-Processing Analysis:** Conduct and document an analysis of the training data before mitigation to establish the baseline level of bias (e.g., identifying severe class imbalances).
- [ ] **Mitigation Application:** Apply and document appropriate bias mitigation techniques across the machine learning lifecycle:
  - **Pre-processing:** Re-sampling, re-weighting, over-sampling underrepresented groups, and targeted data augmentation.
  - **In-processing:** Algorithmic adjustments during training, such as implementing class-weighted loss functions (e.g., Focal Loss).
  - **Post-processing:** Adjusting the model's outputs or decision thresholds after training to improve fairness.

### 3. Fairness Testing & Counterfactuals
- [ ] **Final Fairness Evaluation:** Evaluate the final fairness metrics strictly on an unseen, hold-out test set after all mitigation steps have been applied.
- [ ] **Counterfactual Testing / Error Analysis:** Conduct counterfactual tests to analyze how an individual's prediction would change if their sensitive attribute were different, all else being equal. If strict counterfactuals are not applicable, conduct a rigorous error analysis on the worst-performing subgroups.

### 4. Continuous Bias Monitoring
- [ ] **Production Monitoring:** Implement a plan for continuous technical monitoring of fairness metrics in production to detect bias drift over time.
- [ ] **Automated Alerting:** Set up automated alerts to notify operators if performance drops below the established fairness thresholds for any specific subgroup.
- [ ] **Feedback Loops:** Incorporate user feedback and human-corrected classifications to identify emerging model weaknesses or shifts in population distributions.

## What to avoid?
- Defining fairness thresholds *after* testing the model to artificially pass compliance checks.
- Relying solely on overall accuracy, which can hide discriminatory outcomes against minority or underrepresented groups.
- Deploying a model without a continuous monitoring plan for bias drift.

## Considerations
- The choice of fairness metrics often involves trade-offs (e.g., optimizing for Demographic Parity might reduce overall accuracy or Equalized Odds). These trade-offs must be explicitly justified and documented in the Bias Template.
- Mitigation efforts must not violate data privacy laws; processing special categories of personal data for bias mitigation is strictly regulated and requires a valid legal basis under GDPR and the AI Act (e.g., Art. 10(5)).

## Further reading
- [GRIP on LLMs (Amsterdam LLM Benchmarking)](https://github.com/Amsterdam/grip-on-llms)
- [The Fairness Handbook](https://openresearch.amsterdam/nl/page/87589/the-fairness-handbook)
