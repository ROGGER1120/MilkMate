export class ApiClient {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl ?? (import.meta.env.VITE_API_BASE_URL ?? '');
    this.getAuthToken = options.getAuthToken;
  }

  async request(path, method = 'GET', body, init) {
    const headers = {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    };

    const token = this.getAuthToken?.();
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(this.baseUrl + path, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      ...init,
    });

    if (!response.ok) {
      const errorText = await safeReadText(response);
      throw new Error(`API ${method} ${path} failed ${response.status}: ${errorText}`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return await response.json();
    }
    return await response.text();
  }
}

async function safeReadText(res) {
  try {
    return await res.text();
  } catch {
    return '';
  }
}

export const api = new ApiClient();
