# AI Human Oversight & Operational Boundaries

## What is the standard for Human Oversight & Operational Boundaries?
This standard translates the technical capabilities and limitations of an AI model into operational rules and human oversight procedures. It serves to establish the "Instructions for Use" for the deployer, ensuring that human operators remain in control and that the system is used safely and legally within its intended context, compliant with the AI Act.

## When and for whom is this standard applicable?
This standard applies to AI Engineers, UX/UI Designers, Product Owners, and the operational Deployers (users) of AI systems within the municipality of Amsterdam.

## What is required?
When transitioning an AI system to production, the following oversight mechanisms and operational rules must be implemented and meticulously documented:

### 1. Intended Purpose and Foreseeable Misuse
- [ ] **Precise Scoping:** Clearly document the specific, intended operational environment and the exact task the AI is authorized to perform (e.g., "Assisting ecologists in identifying flora in the Amsterdamse Bos").
- [ ] **Prohibited Uses:** Explicitly list known, foreseeable misuses or out-of-scope applications of the system to prevent unauthorized high-risk scenarios (e.g., "This system must not be used for facial recognition or tracking human visitors").

### 2. Human Oversight Models
- [ ] **Define the Oversight Paradigm:** Specify the required level of human involvement based on the system's risk profile:
  - **Human-in-the-Loop (HitL):** The system only makes recommendations; a human must explicitly approve every decision.
  - **Human-on-the-Loop (HotL):** The system executes decisions autonomously, but a human actively monitors the operation and can intervene at any time.
  - **Human-in-Command (HiC):** The system operates largely autonomously, but humans define the broader constraints, review aggregate outcomes, and can shut the system down.
- [ ] **Operator Competence:** Define the necessary qualifications, training, and domain expertise required for the human operator to effectively interpret the AI's output and exercise meaningful oversight.

### 3. Intervention Mechanisms (UX/UI)
- [ ] **Override Controls:** The user interface must provide clear, accessible mechanisms for the human operator to disregard, override, correct, or reverse the AI's outputs or recommendations.
- [ ] **Audit Logging:** Every instance where a human operator overrides an AI decision must be logged. These logs are critical for the [Continuous Bias Monitoring](/ai/fairness-and-bias-mitigation.md) and model retraining cycles.
- [ ] **Stop Switch:** For automated physical or high-stakes digital systems, implement a clear "stop" or "abort" functionality that safely halts the AI's operation.

### 4. Operational Instructions & Boundaries
- [ ] **Handling Uncertainty:** Provide clear instructions to the operator on how to handle low-confidence predictions (e.g., "If the confidence score is below 75%, the output is flagged yellow and must be manually verified").
- [ ] **Automation Bias Prevention:** Design the UI and workflows to mitigate automation bias (the tendency for humans to blindly trust automated systems). Avoid presenting AI outputs as absolute facts; instead, present them as probabilistic recommendations.

## What to avoid?
- Deploying a system with "rubber-stamping" workflows, where the UI encourages the human operator to blindly approve the AI's suggestions without review.
- Failing to define the boundaries of the system, leading to "function creep" where the AI is used for tasks it was not trained for.
- Implementing an autonomous system without a manual override or abort mechanism.

## Considerations
- The design of intervention mechanisms must align with the city's general [Accessibility Standards](/frontend/accessibility.md) to ensure all qualified operators can effectively oversee the system.
- Instructions for use should be continuously updated based on post-market monitoring and user feedback.
