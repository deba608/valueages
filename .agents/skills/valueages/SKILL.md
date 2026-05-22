```markdown
# valueages Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `valueages` repository, a TypeScript project built with the Next.js framework. You'll learn about file naming, import/export styles, commit patterns, and how to write and locate tests. This guide also provides suggested commands for common workflows to streamline your development process.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.ts`, `apiHandler.tsx`

### Import Style
- Both default and named imports are used.
- Mixed import styles are acceptable.
  - Example:
    ```typescript
    import React from 'react';
    import { useState } from 'react';
    import customHook from './useCustomHook';
    ```

### Export Style
- Prefer **default exports** for modules.
  - Example:
    ```typescript
    const MyComponent = () => { /* ... */ };
    export default MyComponent;
    ```

### Commit Patterns
- Commit messages are **freeform** (no enforced prefixes).
- Average commit message length: ~36 characters.
  - Example: `fix login redirect on mobile`

## Workflows

_No automated workflows detected in the repository._

## Testing Patterns

- **Test files** follow the `*.test.*` pattern.
  - Example: `userProfile.test.ts`, `apiHandler.test.tsx`
- **Testing framework** is not specified. To run or write tests, locate files matching `*.test.*`.

#### Example Test File
```typescript
// userProfile.test.ts
import { render } from '@testing-library/react';
import UserProfile from './userProfile';

test('renders user profile', () => {
  const { getByText } = render(<UserProfile />);
  expect(getByText(/profile/i)).toBeInTheDocument();
});
```

## Commands

| Command     | Purpose                                         |
|-------------|-------------------------------------------------|
| /create-file camelCaseName | Create a new file using camelCase naming convention |
| /import-example            | Show examples of import styles    |
| /export-example            | Show examples of export styles    |
| /find-tests                | List all test files (`*.test.*`)  |
| /commit-guidelines         | Show commit message best practices|

```