import { createClient } from "microcms-js-sdk";

// microCMSと接続
export const client = createClient({
  serviceDomain: "kei-blog",
  apiKey: process.env.API_KEY || '',
})