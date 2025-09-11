// lib/supabaseClient.js
let cachedClient = null;

export function getSupabaseClient() {
  if (cachedClient) return cachedClient;
  try {
    // Use dynamic require via eval to avoid bundlers resolving this at build time
    const dynamicRequire = (0, eval)("require");
    const mod = dynamicRequire("@supabase/supabase-js");
    const createClient = mod?.createClient ?? mod?.default?.createClient;
    if (!createClient) return null;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) return null;

    cachedClient = createClient(supabaseUrl, supabaseAnonKey);
    return cachedClient;
  } catch (err) {
    return null;
  }
}
