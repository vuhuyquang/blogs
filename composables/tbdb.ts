import { LRUCache } from "lru-cache"
import type { HTTPMethod } from "~/types";
import { hash as ohash } from 'ohash'

const apiBaseUrl = 'http://127.0.0.1:8000'

const promiseCache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60,  // 2h
});

async function _fetchTBDB(url: string, params: any, method: HTTPMethod = 'GET', body: any = null) {
  return await $fetch(url, {
    method,
    baseURL: `${apiBaseUrl}/api`,
    params: method === 'GET' ? params : undefined,
    body: method !== 'GET' ? body : undefined,
  })
}

export function fetchTBDB(url: string, params: any, method: HTTPMethod = 'GET', body: any = null): Promise<any> {
  const hash = ohash([url, params, method, body]);
  const state = useState<any>(hash, () => null)

  if (state.value) {
    return state.value;
  }

  if (!promiseCache.has(hash)) {
    promiseCache.set(
      hash,
      _fetchTBDB(url, params, method, body).then((res) => {
        state.value = res;
        return res;
      }).catch((e) => {
        promiseCache.delete(hash);
        throw e;
      })
    )
  }
  
  return promiseCache.get(hash);
}

export async function getListPost(page: number, size: number, search: null | string): Promise<any> {
  return fetchTBDB('blog', {
    page: page,
    size: size,
    search: search,
  }, 'GET');
};