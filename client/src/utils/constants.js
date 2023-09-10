// export const API_URL = import.meta.env.VITE_API_URL;

export function url() {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_API_URL_DEV;
  } else {
    return import.meta.env.VITE_API_URL_PROD;
  }
}
