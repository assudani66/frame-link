import { supabaseClientComponent } from "@/libs/supabaseClients";

export const signUpwithGoogle = async () => {
  const { data } = await supabaseClientComponent.auth.signInWithOAuth({
    provider: "google",
  });
  console.log(data);
};

export const getUserSession = async () => {
  const data = await supabaseClientComponent.auth.getSession();
  console.log(data);
};

export const signOut = async () => {
  const { error } = await supabaseClientComponent.auth.signOut();
  if (error) throw error;
};
