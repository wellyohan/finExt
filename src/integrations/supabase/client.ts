// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yeznjnsywksivftqpbro.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllem5qbnN5d2tzaXZmdHFwYnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMDE0NDIsImV4cCI6MjA2NDU3NzQ0Mn0.JaEQrZEOduPdsgVctOhaRmGShWjVmc_IJ5vicfQy-eE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);