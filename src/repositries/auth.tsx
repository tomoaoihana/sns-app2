import { User as SupabaseUser } from "@supabase/auth-js";
import { supabase } from "../lib/supabase";

export type User = SupabaseUser & { userName: string };

type SignupParams = {
  name: string;
  email: string;
  password: string;
};

export const authRepository = {
  async signup({ name, email, password }: SignupParams): Promise<User | null> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error != null) throw new Error(error.message);
    if (data.user) {
      return { ...data.user, userName: data.user.user_metadata?.name || "" };
    } else {
      return null;
    }
  },
  async signin({ email, password }: SignupParams): Promise<User | null> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error != null) throw new Error(error.message);
    if (data.user) {
      return { ...data.user, userName: data.user.user_metadata?.name || "" };
    } else {
      return null;
    }
  },
};
