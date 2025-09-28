const BASE = import.meta.env.VITE_API_BASE?.replace(/\/$/, '') || '';

export const api = {
  async get(path) {
    const res = await fetch(`${BASE}/api${path}`);
    if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
    return res.json();
  }
};
