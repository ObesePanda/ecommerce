import { Token } from "@/api";

export async function authFetch(url, params) {
  const tokenCtrl = new Token();
  const token = tokenCtrl.getToken();

  /* if (token) {
    params.headers = {
      ...params.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(url, params);
  const result = await response.json();

  if (response.status !== 200) throw result;
  return result;*/
}
