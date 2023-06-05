import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
};

const superbassClientSchema = z.object({
  supabaseUrl: z.string(),
  supabaseKey: z.string(),
});

const validatedSuperbass = superbassClientSchema.parse({
  supabaseUrl: import.meta.env.VITE_SUPABASS_PROJECT_URL,
  supabaseKey: import.meta.env.VITE_SUPABASS_ANON_PUBLIC,
});

export const supabase = createClient(
  validatedSuperbass.supabaseUrl,
  validatedSuperbass.supabaseKey,
  options,
);
