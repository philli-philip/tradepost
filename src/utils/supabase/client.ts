import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";
import * as dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON;

export const supabaseClient = () => {
  if (!supabaseUrl) throw new Error("No Supabase URL defined.");
  if (!supabaseAnonKey) throw new Error("No Supabase Anon key defined.");
  return createClient<Database>(supabaseUrl, supabaseAnonKey);
};
