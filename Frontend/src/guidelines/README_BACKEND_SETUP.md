# Backend setup (stubs ready)

- Configure `.env` with:
  - `VITE_API_BASE_URL=https://api.example.com`
- Use `api` from `src/utils/api.ts` to call endpoints, e.g.:

```ts
import { api } from './src/utils/api';

await api.request('/auth/login', 'POST', { email, password });
```

- Add auth token retrieval by passing `getAuthToken` to `ApiClient` if needed.
