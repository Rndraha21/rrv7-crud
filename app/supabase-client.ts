import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rkomfahulfevuyeboaqu.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrb21mYWh1bGZldnV5ZWJvYXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NDk1ODUsImV4cCI6MjA2MDAyNTU4NX0.C8Qf_7y-TlFeVmraKUOg3RJDTAeSdlcSDJL0pMMXjDA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
