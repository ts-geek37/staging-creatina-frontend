export const api = async <T>(
  url: string,
  options?: RequestInit,
  signal?: AbortSignal,
): Promise<T> => {
  const urlWithBase = process.env.NEXT_PUBLIC_API_URL + url;
  const res = await fetch(urlWithBase, {
    headers: { "Content-Type": "application/json" },
    signal,
    ...options,
  });

  if (!res.ok) {
    let message = "Request failed";
    try {
      const err = await res.json();
      message = err.detail || message;
    } catch {}
    throw new Error(message);
  }

  return res.json();
};
