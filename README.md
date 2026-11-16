# npm-package-greeting

## Installation

Please you write `.npmrc`.  
A GitHub token with the `read:packages` scope is required.

```
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm install @okayuya/greeting@1.0.0 --registry https://npm.pkg.github.com
```

## Usage

```typescript
import { greeting } from "@okayuya/greeting";

greeting("world");
```
