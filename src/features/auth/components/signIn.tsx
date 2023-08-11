"use client";
import { Input } from "@/app/components";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const signUpwithGoogle = async () => {
  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  console.log(data);
};

const getUserSession = async () => {
  const data = await supabase.auth.getSession();
  console.log(data);
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
export const SignUp = () => {
  return (
    <div className="flex flex-col ">
      <Input placeholder="email" className="" />
      <Input />
      <button onClick={() => getUserSession()}>getSession</button>
      <button onClick={() => signUpwithGoogle()}>sign In with google</button>
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
};
