import { LRUCache } from "lru-cache"

const apiBaseUrl = 'http://localhost:3001'

const promiseCache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60,  // 2
});