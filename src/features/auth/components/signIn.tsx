"use client";
import { Input } from "@/components";
import React from "react";
import { Button } from "@/components/UI/button";
import { getUserSession, signOut, signUpwithGoogle } from "../services";

export const SignUp = () => {

  return (
    <div className="flex flex-col ">
      <Input placeholder="email" />
      <Button onClick={() => getUserSession()}>get session</Button>
      <Button onClick={() => signUpwithGoogle()}>sign In with google</Button>
      <Button onClick={() => signOut()}>sign out</Button>
    </div>
  );
};
