declare var caches: any;
declare var SST_ASSET_MANIFEST: Record<string, string>;

export interface Env {
  ASSETS: any;
  INDEX_PAGE: string;
  ERROR_PAGE?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/^\//, "");
    const filePath = pathname === "" ? env.INDEX_PAGE : pathname;

    // Return from cache if available
    let cachedResponse = await lookupCache();
    if (cachedResponse) return cachedResponse;

    // Fetch from KV
    const object = await env.ASSETS.getWithMetadata(filePath);
    if (object.value) return await respond(200, filePath, object);

    // Handle error page
    if (env.ERROR_PAGE) {
      const object = await env.ASSETS.getWithMetadata(env.ERROR_PAGE);
      if (object.value) return await respond(404, env.ERROR_PAGE, object);
    } else {
      const object = await env.ASSETS.getWithMetadata(env.INDEX_PAGE);
      if (object.value) return await respond(200, env.INDEX_PAGE, object);
    }

    // Handle failed to render error page
    return new Response("Page Not Found", { status: 404 });

    async function lookupCache() {
      const cache = caches.default;
      const r = await cache.match(request);

      // cache does not exist
      if (!r) return;

      // cache exists but etag does not match
      if (r.headers.get("etag") !== SST_ASSET_MANIFEST[filePath]) return;

      // cache exists
      return r;
    }

    async function saveCache(response: Response) {
      const cache = caches.default;
      await cache.put(request, response.clone());
    }

    async function respond(status: number, filePath: string, object: any) {
      // build response
      const headers = new Headers();
      if (SST_ASSET_MANIFEST[filePath]) {
        headers.set("etag", SST_ASSET_MANIFEST[filePath]);
        headers.set("content-type", object.metadata.contentType);
        headers.set("cache-controle", object.metadata.cacheControl);
      }
      const response = new Response(object.value, {
        status,
        headers,
      });

      await saveCache(response);

      return response;
    }
  },
};
