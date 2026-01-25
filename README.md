# Angular Signal Forms – Focus-Bound Control Demo

This repository demonstrates how to use the **`focusBoundControl()`** method in Angular Signal Forms to programmatically focus form controls.

It shows different approaches to focusing form fields, including:
- Using `focusBoundControl()` to focus the first invalid field
- Using `focusBoundControl({ preventScroll: true })` to focus without scrolling
- Finding invalid fields using `errorSummary()` and focusing them individually

---

## What This Repo Demonstrates

- Angular Signal Forms with an address form example
- Using `form().focusBoundControl()` to programmatically focus controls
- Focusing invalid fields after form reset or validation
- Different focus strategies and their use cases
- Integration with form validation and error handling

---

## Key Features

### Focus-Bound Control
The `focusBoundControl()` method allows you to focus form controls programmatically without directly accessing DOM elements. This is especially useful for:
- Focusing the first invalid field after form submission
- Focusing fields after resetting a form
- Improving accessibility and user experience

### Example Usage

```typescript
// Focus the first invalid field
this.form().focusBoundControl();

// Focus without scrolling
this.form().focusBoundControl({ preventScroll: true });

// Focus a specific invalid field from error summary
const nextInvalidField = this.form().errorSummary()[0];
if (nextInvalidField) {
  nextInvalidField.fieldTree().focusBoundControl();
}
```

---

## Directory Structure Overview

```text
src/app/
  address-form/
    address-form.component.ts    # Main form component demonstrating focusBoundControl()
    address-form.component.html   # Form template
    address-form.component.scss   # Styles
  
  shared/
    validation-errors/
      validation-errors.component.ts  # Reusable validation error display component
```

---

## How to Run

```bash
npm install
ng serve
```

---

## Related Resources
- 🎥 **YouTube Tutorial**: Coming Soon
- 📚 **Angular Signal Forms Documentation**: [Angular Forms Guide](https://angular.dev/guide/forms/signal-forms)