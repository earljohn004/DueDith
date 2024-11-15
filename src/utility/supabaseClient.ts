import { createClient } from "@refinedev/supabase";

export const supabaseClient = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
  {
    db: {
      schema: "public",
    },
    auth: {
      persistSession: true,
    },
  },
);
