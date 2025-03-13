# RuleKit

**A modular boolean rule engine for query building, validation, and debugging.**

RuleKit is a framework-agnostic TypeScript library designed to help developers **define, validate, and execute boolean logic rules** in a structured and extensible way. It provides a flexible engine for building rules, validating data against them, and debugging logic easily.

## Monorepo Structure

This repository follows a **monorepo architecture** using `pnpm workspaces`, with multiple packages handling different parts of the system:

- **`@rulekit/core`** – The rule-building engine for defining boolean logic in a structured JSON format.
- **`@rulekit/validate`** – The validation engine that checks data against rules and provides detailed debugging information.
- **`@rulekit/ui`** – A prebuilt UI component for visual rule building and debugging.

## License

Licensed under **Apache 2.0**.
