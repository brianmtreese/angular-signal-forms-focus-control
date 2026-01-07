# Angular Signal Forms – Scalable Form Composition Example

This repository contains the **refactored version** of a large Angular form built using **Angular Signal Forms**.

It demonstrates a possible method to structure **large, real-world forms** using reusable model factories, section builders, and clean parent orchestration, avoiding monolithic form definitions and tight coupling.

This repository represents a **possible scalable architecture** when adopting Signal Forms in production applications.

---

## What This Repo Demonstrates

- Angular Signal Forms used in a real, multi-section form
- Reusable **model factories** per domain
- **Section builder functions** that encapsulate fields and validation
- Clean parent form composition using `form()`
- Passing **form slices** to child components
- Avoiding large, monolithic `form()` blocks
- A scalable and maintainable Signal Forms architecture

---

## Key Architectural Concepts

### Model Factories
Each form section exports a `createXModel()` function that defines its initial state and shape.

### Section Builders
Each form section encapsulates its fields and validation logic inside a `buildXSection()` function.

### Parent Orchestration
The parent form composes sections without owning their internal implementation details.

### Form Slice Isolation
Child components receive **only the portion of form state they need**, keeping them reusable and decoupled.

---

## Directory Structure Overview

```text
account/
  account-form.model.ts
  account-form.component.ts

shipping/
  address-form.model.ts
  address-form.component.ts

sign-up/
  profile-form.component.ts
```

---

## How to Run

```bash
npm install
ng serve
```